import { useProductStore } from "@/store/productos/useProductosStore";
import { useEffect } from "react";

export const useProductos = () => {
  const productos = useProductStore((state) => state.productos);
  const getProducts = useProductStore((state) => state.getProducts);

  useEffect(() => {
    if (!productos?.length) getProducts();
  }, [productos, getProducts]);

  return {productos};
};
