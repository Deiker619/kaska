import type { LoginUserCurrently } from "@/interfaces/User";
import { useAuthStore } from "@/store/session/useAuthStore";
import { LoginCurrently } from "@/services/Auth/Auth";

export const useLogin = () => {
  const setSession = useAuthStore((store) => store.setSession);
  
  const login = async (data: LoginUserCurrently) => {
    LoginCurrently(data);
    //  setSession()
  };

  return { login };
};
