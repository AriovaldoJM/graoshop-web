import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDatails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Pedido: 18544fdsf4s55
                </DialogTitle>
                <DialogDescription>Detalhes do pedido:</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                <span className="font-medium text-muted-foreground">
                                    Pendente
                                </span>
                            </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                Ariovaldo Joaquim de Moraes
                            </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Celular</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                (11) 951139687
                            </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Email</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                ariovaldo.jmoraes@hotmail.com
                            </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há:</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                3 minutos
                            </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Café expresso</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 20,00</TableCell>
                            <TableCell className="text-right">R$ 40,00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Bannoffe</TableCell>
                            <TableCell className="text-right">5</TableCell>
                            <TableCell className="text-right">R$ 30,00</TableCell>
                            <TableCell className="text-right">R$ 150,00</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do Pedido:</TableCell>
                            <TableCell className="text-right font-medium">
                                R$ 190,00
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}