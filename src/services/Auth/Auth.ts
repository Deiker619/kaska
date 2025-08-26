import type { LoginUserCurrently, UserSession } from "@/interfaces/User";
import { supabase } from "@/api/api";
import { toast } from "sonner";

export const LoginCurrently = async (user: LoginUserCurrently) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
  
  if (error) {
    const { message } = error;
    toast.error(message);
    return 
  }

  return data.user as unknown as UserSession;
};
