import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import colors from 'tailwindcss/colors'
import { DateRange } from 'react-day-picker'
import { subDays } from 'date-fns'
import { Loader2 } from "lucide-react";

export function RevenueCharts() {

    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: subDays(new Date(), 7),
        to: new Date()
    }) 
    

    const {data:dailyRevenueInPeriod} = useQuery({
        queryKey:['metrics', 'daily-revenue-in-period', dateRange],
        queryFn: () => 
        getDailyRevenueInPeriod({
            from: dateRange?.from,
            to: dateRange?.to,
        })
    })

    const chartData = useMemo(() => {
        return dailyRevenueInPeriod?.map(chartItem => {
            return {
                date: chartItem.date,
                receipt: chartItem.receipt / 100
            }
        })
    }, [dailyRevenueInPeriod])
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no período
                    </CardTitle>
                    <CardDescription>
                        Receita Diária no Período
                    </CardDescription>
                </div>
                    <div className="flex items-center gap-3">
                        <label>
                            Período
                        </label>
                        <DateRangePicker date={dateRange} onDateChange={setDateRange}/>
                    </div>
            </CardHeader>
            <CardContent>
                {chartData ? (
                    <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={chartData} style={{fontSize:12}}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
                        <YAxis 
                            stroke="#888" 
                            axisLine={false} 
                            tickLine={false} 
                            width={80}
                            tickFormatter={(value: number) => 
                                value.toLocaleString('pt-BR', {
                                    style: "currency", 
                                    currency: 'BRL'
                                })
                            }
                        />
                        <CartesianGrid vertical={false} className="stroke-muted"/>
                        <Line 
                            type="linear" 
                            strokeWidth={2} 
                            dataKey="receipt" 
                            stroke={colors.violet[500]}
                        />
                    </LineChart>
                </ResponsiveContainer>
                ) : (
                    <div className="flex h-[240px] w-full items-center justify-center">
                       <Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}