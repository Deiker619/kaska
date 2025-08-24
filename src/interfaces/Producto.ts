export interface Producto {
  id: string;
  cliente_id: string;
  nombre: string;
  precio: number;
  stock: number;
  categoria?: string;
  created_at: string;
}
