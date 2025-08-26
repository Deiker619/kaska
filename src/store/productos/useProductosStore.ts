import type { Producto } from "@/interfaces/Producto";
import { _getProducts } from "@/services/Productos/ProductosServices";

import { create } from "zustand";

interface PropsProductStore {
  productos: Producto[] | null;
  setProductos: (newProductos: Producto[]) => void;
  getProducts: () => void;
  loading: boolean;
}

export const useProductStore = create<PropsProductStore>((set, get) => ({
  productos: [],
  loading: false,

  setProductos(Productos: Producto[]) {
    set({ productos: Productos });
  },

  getProducts: async () => {
    const productos = await _getProducts() || [];
    if (productos) get().setProductos(productos as Producto[]);
  },
}));
