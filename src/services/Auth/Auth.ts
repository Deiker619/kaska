import type { LoginUserCurrently } from "@/interfaces/User";
import { supabase } from "@/api/api";

export const LoginCurrently = async (user: LoginUserCurrently) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  console.log(data, error)
};
