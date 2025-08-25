import { toast } from "sonner";

export const useErrors = () => {
  const showError = (error: unknown, message: string) => {
    console.error(error);
    toast.error(message);
  };

  return { showError };
};
