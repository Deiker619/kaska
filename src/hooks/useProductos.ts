import type { Producto } from "@/interfaces/Producto";
import { useProductStore } from "@/store/productos/useProductosStore";
import { useEffect } from "react";
import { toast } from "sonner";

export const useProductos = () => {
  const productos = useProductStore((state) => state.productos);
  const getProducts = useProductStore((state) => state.getProducts);

  const handleDelete = (producto: Producto) => {
      toast('Desea eliminar este producto?', {
        action: {
          label: 'Confirmar',
          onClick: () => console.log(producto, 'Eliminado')
        },
      })
    };
  const createProduct = useProductStore((state)=> state.createProduct)
  useEffect(() => {
    if (!productos?.length) getProducts();
  }, [productos, getProducts]);

  return {productos, createProduct, handleDelete};
};
