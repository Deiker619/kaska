import { supabase } from "@/api/api";
import { toast } from "sonner";

export const _getProducts = async () => {
  const { data: productos, error } = await supabase.from("productos").select("*");
  if(error){
    toast.error('No se pudo obtener los productos')
    return;
  }
  return productos
};
