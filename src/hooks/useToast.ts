import { toast } from "react-toastify";


/**
 * Hook to show toast messages easily
 */
export const useAppToast = () => {
  const showSuccess = (message: string) =>
    toast({
      title: "Success",
      description: message,
      variant: "default",
    });

  const showError = (message: string) =>
    toast({
      title: "Error",
      description: message,
      variant: "destructive",
    });

  return { showSuccess, showError };
};
