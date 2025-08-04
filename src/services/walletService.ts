import useAuthAxios from "@/hooks/useAuthAxios";

export const useWalletApi = () => {

  const axiosInstance = useAuthAxios();
  
  const getMyWallet = async () => {
    const response = await axiosInstance.get("/wallet/me");
    return response.data;
  };

  const addMoneyToWallet = async (amount: number) => {
    const response = await axiosInstance.post("/wallet/add", { amount });
    return response.data;
  };

  const withdrawMoney = async (amount: number) => {
    const response = await axiosInstance.post("/wallet/withdraw", { amount });
    return response.data;
  };

  return {
    getMyWallet,
    addMoneyToWallet,
    withdrawMoney,
  };
};


