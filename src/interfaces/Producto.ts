export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  categoria_id?: string;
  marca_id?: string
}

export type ProductoCreate = Omit<Producto, 'id'>