import { supabase } from "@/api/api";
import type { ProductoCreate } from "@/interfaces/Producto";
import { toast } from "sonner";

export const _getProducts = async () => {
  const { data: productos, error } = await supabase.from("productos").select(`
    id,
    nombre,
    precio,
    marca_id,
    categoria_id,
    categorias (
      id,
      nombre
    ),
    marcas (
      id,
      nombre    
    )
  `);
  console.log(productos);
  if (error) {
    toast.error("No se pudo obtener los productos");
    return;
  }
  return productos;
};

export const _createProduct = async (producto: ProductoCreate) => {
  const { data: productos, error } = await supabase
    .from("productos")
    .insert([
      {
        nombre: producto.nombre,
        precio: producto.precio,
        categoria_id: producto.categoria_id,
        marca_id: producto.marca_id,
      },
    ])
    .select();

  if (error) {
    toast.error("No se pudo obtener los productos");
    return;
  }
  toast.success('Producto agregado correctamente')
  return productos;
};
