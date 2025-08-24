import type { LoginUserCurrently } from "@/interfaces/User";
import { supabase } from "@/api/api";

export const LoginCurrently = async (data: LoginUserCurrently)=>{
   await console.log(data, supabase)


}