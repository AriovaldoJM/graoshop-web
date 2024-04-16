import { api } from "@/lib/axios";

export interface registerRestaurantBody {
    restauranteName: string
    managerName: string
    email: string
    phone: string
}

export async function registerRestaurant({
    restauranteName,
    managerName,
    email,
    phone,
}: registerRestaurantBody) {
    await api.post('/restaurants', {
        restauranteName,
        managerName,
        email,
        phone,
    })
}
    