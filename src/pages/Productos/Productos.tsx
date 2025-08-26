import { useProductos } from "@/hooks/useProductos";


const LABEL_ELEMENT = 'Productos'

export const Productos = () => {
  const { productos } = useProductos();
  return (
  <>
    {productos && productos.length > 0 ? (
      productos.map((producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))
    ) : (
      <p>No hay { LABEL_ELEMENT } disponibles</p>
    )}
  </>
);

}
