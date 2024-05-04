import { HttpResponse, http } from "msw";

import { GetMonthCancledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMothnCanceledOrdersAmountMock =http.get<
    never, never, GetMonthCancledOrdersAmountResponse
>
('/metrics/month-canceled-orders-amount', () => {
    return HttpResponse.json({
        amount: 5,
        diffFromLastMonth: -5,
    })
})