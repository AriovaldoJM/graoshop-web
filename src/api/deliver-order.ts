import { api } from "@/lib/axios";

export interface DeliverOrderParams{
    orderId: string
}


export async function deliverOrder({orderId}: DeliverOrderParams) {
    const response = await api.patch(`/orders/${orderId}/deliver`)

    // console.log(response.data)

    return response.data
}