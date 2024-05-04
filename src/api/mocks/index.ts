
import { env } from '@/env'
import {setupWorker} from 'msw/browser'
import { signInMock } from './sign-in-mocks'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getGetMonthRevenueMock } from './get-month-revenue'
import { getMothnCanceledOrdersAmountMock } from './get-motnh-canceled-orders-amount'
import { getDailyRevenueInPeriodRevenueMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrdersDetailsMock } from './get-order-details-mock'
import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order.mock'

export const worker = setupWorker(signInMock, 
    registerRestaurantMock,
    getDayOrdersAmountMock,
    getMonthOrdersAmountMock,
    getGetMonthRevenueMock,
    getMothnCanceledOrdersAmountMock,
    getDailyRevenueInPeriodRevenueMock,
    getPopularProductsMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
    getOrdersMock,
    getOrdersDetailsMock,
    approveOrderMock,
    cancelOrderMock,
    deliverOrderMock,
    dispatchOrderMock,
)

export async function enableMSW() {

    if(env.MODE !== 'test') {
        return
    }
    await worker.start()
}