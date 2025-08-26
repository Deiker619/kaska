import type { Producto, ProductoCreate } from "@/interfaces/Producto";
import {
  _createProduct,
  _getProducts,
} from "@/services/Productos/ProductosServices";

import { create } from "zustand";

interface PropsProductStore {
  productos: Producto[] | null;
  setProductos: (newProductos: Producto[]) => void;
  getProducts: () => void;
  createProduct: (producto: ProductoCreate) => void;
  loading: boolean;
}

export const useProductStore = create<PropsProductStore>((set, get) => ({
  productos: [],
  loading: false,

  setProductos(Productos: Producto[]) {
    set({ productos: Productos });
  },

  getProducts: async () => {
    const productos = (await _getProducts()) || [];
    if (productos) get().setProductos(productos as Producto[]);
  },

  createProduct: async (producto: ProductoCreate) => {
    const productos = await _createProduct(producto);
    if (productos) get().getProducts();
  },
}));
