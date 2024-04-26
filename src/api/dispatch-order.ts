import { api } from "@/lib/axios";

export interface dispatchOrderParams{
    orderId: string
}


export async function dispatchOrder({orderId}: dispatchOrderParams) {
    const response = await api.patch(`/orders/${orderId}/dispatch`)

    // console.log(response.data)

    return response.data
}