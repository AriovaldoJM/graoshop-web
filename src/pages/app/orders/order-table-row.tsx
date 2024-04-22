import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDatails } from "./order-details";

export interface OrderTableRowsProps {
    order: {
        orderId: string;
        createdAt: Date;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
}


export function OrderTableRow({order}: OrderTableRowsProps) {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"/>
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDatails/>
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-sm font-medium">
                {order.orderId}
            </TableCell>

            <TableCell className="text-muted-foreground">
                há 15 minutos
            </TableCell>

            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                    <span className="font-medium text-muted-foreground">
                        Pendente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                Ariovaldo Joaquim de Moraes
            </TableCell>
            <TableCell className="font-medium">
                R$ 149,90
            </TableCell>
            <TableCell>
                <Button variant="outline">
                    <ArrowRight className="mr-2 h-3 w-3"/>
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}