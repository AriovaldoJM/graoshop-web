import { HttpResponse, http } from "msw";

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getGetMonthRevenueMock =http.get<
    never, 
    never,
    GetMonthRevenueResponse
>
('/metrics/month-receipt', () => {
    return HttpResponse.json({
        receipt: 20000,
        diffFromLastMonth: 10,
    })
})