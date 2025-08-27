import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface Header {
  key: string;
  label: string;
  style?: string;
}

interface PropsTable<T> {
  data: T[];
  headers: Header[];
  title: string;
  onEdit?: (item: T) => void;   // Callback para editar
  onDelete?: (item: T) => void; // Callback para eliminar
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableProducts = <T extends Record<string, any>>({
  data,
  headers,
  title,
  onEdit,
  onDelete,
}: PropsTable<T>) => {
  return (
    <Table>
      <TableCaption>Lista de {title}.</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead key={i}>{header.label}</TableHead>
          ))}
          {(onEdit || onDelete) && <TableHead>Acciones</TableHead>}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data && data.length > 0 ? (
          data.map((element, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex} className="font-medium">
                  {header?.style === "badge" ? (
                    <Badge>{String(getNestedValue(element, header.key))}</Badge>
                  ) : (
                    String(getNestedValue(element, header.key))
                  )}
                </TableCell>
              ))}

              {
              (onEdit) && (
                <TableCell className="flex gap-2">
                  {onEdit && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onEdit(element)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => onDelete(element)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={headers.length + (onEdit || onDelete ? 1 : 0)}
              className="text-center text-gray-500"
            >
              No hay {title} disponibles
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
