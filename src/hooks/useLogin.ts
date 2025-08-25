import type { LoginUserCurrently } from "@/interfaces/User";
import { useAuthStore } from "@/store/session/useAuthStore";
import { LoginCurrently } from "@/services/Auth/Auth";
import type { UserSession } from "@/interfaces/User";
export const useLogin = () => {
  const setSession = useAuthStore((store) => store.setSession);

  const login = async (data: LoginUserCurrently) => {
    const user = await LoginCurrently(data);
    if (user) {
      setSession(user as UserSession);
    }
    console.log(user);
  };

  return { login };
};
