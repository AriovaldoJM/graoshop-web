import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdesAmountCard } from './month-orders-amount-card'
import { DayOrdesAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdesAmountCard } from './month-canceled-ordes-amount-card'
import { RevenueCharts } from './revenue-chart'
import { PopularProductsCharts } from './popular-products-chart'
import { useQuery } from '@tanstack/react-query'
import { getDayOrdersAmount } from '@/api/get-day-orders-amont'

export function Dashboard(){

    return (
        <>
            <Helmet title="Dashboard"/>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

                <div className='grid grid-cols-4 gap-4'>
                    <MonthRevenueCard/>
                    <MonthOrdesAmountCard/>
                    <DayOrdesAmountCard/>
                    <MonthCanceledOrdesAmountCard/>
                </div>
                <div className='grid grid-cols-9 gap-4'>
                    <RevenueCharts/>
                    <PopularProductsCharts/>
                </div>
            </div>
        </>
    )
}