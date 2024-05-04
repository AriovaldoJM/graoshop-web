import { HttpResponse, http } from "msw";

import { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details'

export const getOrdersDetailsMock =http.get<
    GetOrderDetailsParams, 
    never,
    GetOrderDetailsResponse
>
('/orders/:orderId', ({params}) => {
    return HttpResponse.json({
        id: params.orderId,
        totalInCents: 5000,
        customer: {
            name: 'Joh Doe',
            email: 'johdoe@hotmail.com',
            phone: '2448455489754',

        },
        status: 'pending',
        createdAt: new Date().toISOString(),
        
        orderItems: [
            {
                id:'order-item-1',
                priceInCents: 1000,
                product: {name: 'Bannoffe'},
                quantity: 1,
            },
            {
                id:'order-item-2',
                priceInCents: 2000,
                product: {name: 'Café'},
                quantity: 2,
            },
        ],
    })
})