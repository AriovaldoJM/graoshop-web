import { HttpResponse, http } from "msw";

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock =http.get<
    never, 
    never,
    GetPopularProductsResponse
>
('/metrics/popular-products', () => {
    return HttpResponse.json([
        {product: 'Grão 01', amount: 5},
        {product: 'Grão 02', amount: 3},
        {product: 'Grão 03', amount: 2},
        {product: 'Grão 04', amount: 7},
        {product: 'Grão 05', amount: 4},
    ])
})