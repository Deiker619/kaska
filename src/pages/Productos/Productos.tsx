import { useProductos } from "@/hooks/useProductos";
import { TableProducts } from "./components/TableProducts";
import type { Producto } from "@/interfaces/Producto";
import { Input } from "@/components/ui/input";
import { ProductForm } from "./components/ProductForm";
const LABEL_ELEMENT = "Productos";
const headers = [
  { key: "id", label: "ID", style: "normal" },
  { key: "nombre", label: "Nombre", style: "normal" },
  { key: "precio", label: "Precio", style: "normal" },
  { key: "categorias.nombre", label: "Categoría", style: "badge" },
  { key: "marcas.nombre", label: "Marcas", style: "normal" },

];
export const Productos = () => {
  const { productos, handleDelete } = useProductos();

  const handleUpdate = (producto: Producto) => {
    console.log(producto)
  }

  return (
    <>

      <div className=" py-4 lg:px-6 space-y-4">
        <div className="border rounded-2xl p-4">
          <div className="flex  w-full items-center">
            <div className="flex-1 flex gap-2">
              <div className="w-1/3">
                <Input placeholder={`Search ${LABEL_ELEMENT}`}></Input>
              </div>
              <div className="w-1/3">
                <div className="flex gap-3">{/* OPTIONES DE FILTRADO */}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <ProductForm mode="create" dialogTitle="Crear Nuevo Producto" />
              </div>
            </div>
          </div>
          <TableProducts
            data={productos as Producto[]}
            headers={headers}
            title={LABEL_ELEMENT}
            onEdit={(producto) => handleUpdate(producto)}
            onDelete={(producto) => handleDelete(producto)}
          />

        </div>
      </div>
    </>
  );
};
