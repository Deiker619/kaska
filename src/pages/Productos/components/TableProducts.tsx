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
interface Header {
  key: string;
  label: string;
  style?: string;
}

interface PropsTable<T> {
  data: T[];
  headers: Header[];
  title: string;
}
/* Permite acceder al ren    */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableProducts = <T extends Record<string, any>>({
  data,
  headers,
  title,

}: PropsTable<T>) => {
  return (
    <>
      <Table className="">
        <TableCaption>Lista de {title}.</TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header, i) => (
              <TableHead key={i}>{header.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((element, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <TableCell key={colIndex} className="font-medium">
                    {header?.style == "badge" ? (
                      <Badge>
                       { String(getNestedValue(element, header.key))}
                      </Badge>
                    ) : (
                      String(getNestedValue(element, header.key))
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                className="text-center text-gray-500"
              >
                No hay {title} disponibles
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
