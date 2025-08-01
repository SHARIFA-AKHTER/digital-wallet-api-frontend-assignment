/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useState, type ReactNode } from "react";

// interface WalletContextType {
//   balance: number;
//   addMoney: (amount: number) => void;
//   withdrawMoney: (amount: number) => void;
//   setBalance: (amount: number) => void;
// }

// const WalletContext = createContext<WalletContextType | undefined>(undefined);

// export const WalletProvider = ({ children }: { children: ReactNode }) => {
//   const [balance, setBalanceState] = useState<number>(50);

//   const addMoney = (amount: number) => {
//     setBalanceState((prev) => prev + amount);
//   };

//   const withdrawMoney = (amount: number) => {
//     setBalanceState((prev) => Math.max(0, prev - amount));
//   };

//   const setBalance = (amount: number) => {
//     setBalanceState(amount);
//   };

//   const value: WalletContextType = {
//     balance,
//     addMoney,
//     withdrawMoney,
//     setBalance,
//   };

//   return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
// };

// export const useWallet = () => {
//   const context = useContext(WalletContext);
//   if (!context) throw new Error("useWallet must be used within WalletProvider");
//   return context;
// };

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import axios from "axios";
import type { IWallet } from "@/types/wallet";

interface WalletContextType {
  balance: number;
  addMoney: (amount: number) => Promise<void>;
  withdrawMoney: (amount: number) => Promise<void>;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState<number>(0);

  const getToken = () => {
    const authUser = localStorage.getItem("authUser");
    if (!authUser) return null;
    return JSON.parse(authUser).token;
  };

  const fetchBalance = async () => {
    try {
      const token = getToken();
      if (!token) return;
      const res = await axios.get<{ success: boolean; data: IWallet }>(
        "http://localhost:3000/api/wallets/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBalance(res.data.data.balance);
    } catch (error) {
      console.error("Failed to fetch balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const addMoney = async (amount: number) => {
    const authUser = localStorage.getItem("authUser");

    if (!authUser) {
      throw new Error("Not authenticated");
    }

    const { token } = JSON.parse(authUser);

    try {
      const response = await axios.post<{ success: boolean; data: IWallet }>(
        "http://localhost:3000/api/wallets/add",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedWallet = response.data.data;
      setBalance(updatedWallet.balance);
    } catch (error: any) {
      console.error("Add money failed:", error);
      throw new Error("Add money failed");
    }
  };

  const withdrawMoney = async (amount: number) => {
    const authUser = localStorage.getItem("authUser");

    if (!authUser) {
      throw new Error("Not authenticated");
    }

    const { token } = JSON.parse(authUser);

    try {
      const response = await axios.post<{ success: boolean; data: IWallet }>(
        "http://localhost:3000/api/wallets/withdraw",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedWallet = response.data.data;
      setBalance(updatedWallet.balance);
    } catch (error: any) {
      console.error("Withdraw failed:", error);
      throw new Error("Withdraw failed");
    }
  };

  return (
    <WalletContext.Provider
      value={{ balance, addMoney, withdrawMoney, refreshBalance: fetchBalance }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within WalletProvider");
  return context;
};
