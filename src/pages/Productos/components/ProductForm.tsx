import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useProductos } from "@/hooks/useProductos";
import type { ProductoCreate } from "@/interfaces/Producto";
import { GridIcon } from "lucide-react";
import { useForm } from "react-hook-form";

interface PropsModal {
  mode: "edit" | "create";
  dialogTitle: string;
  producto?: ProductoCreate;
}

export const ProductForm = ({ mode, dialogTitle, producto }: PropsModal) => {
  /* *********************************** */
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ProductoCreate>({
    mode: "onChange",
    defaultValues: producto || {
      nombre: "",
      precio: 0,
      categoria_id: "",
      marca_id: "",
    },
  });
  /*  *******************************  */

  const { createProduct } = useProductos()
  const handleCreate = (producto: ProductoCreate) => {
    createProduct(producto)
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {mode == "create" ? (
          <Button>
            <GridIcon /> Nuevo producto
          </Button>
        ) : (
          "Editar Producto"
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form
          className="text-black text-sm"
          onSubmit={handleSubmit(handleCreate)}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
            <div className="grid grid-cols-2 gap-3 mb-4 text-black">
              <div className="grid gap-3 col-span-2">
                <Label htmlFor="nombre">Nombre del Producto</Label>
                <Input
                  id="nombre"
                  placeholder="Ej: Doritos"
                  {...register("nombre", {
                    required: "El nombre del producto es requerido",
                  })}
                />
              </div>
              <div className="grid gap-3 col-span-2">
                <Label htmlFor="precio">Precio</Label>
                <Input
                  id="precio"
                  placeholder="2.3"
                  {...register("precio", {
                    required: "El precio del producto es requerido",
                  })}
                />
              </div>
              <div className="grid gap-3 col-span-1">
                <Label htmlFor="categoria">Categorías</Label>
                <select
                  id="categoria"
                  {...register("categoria_id", {
                    required: "La categoria del producto es requerida",
                  })}
                  className="border border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="1">Selecciona una categoría</option>
                </select>
              </div>
              <div className="grid gap-3 col-span-1">
                <Label htmlFor="marca">Marca</Label>
                <select
                  id="marca"
                  {...register("marca_id", {
                    required: "La marca del producto es requerido",
                  })}
                  className="border border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="1">Selecciona la marca</option>
                </select>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <Button type="submit" disabled={!isValid}>
              {" "}
              Guardar
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
