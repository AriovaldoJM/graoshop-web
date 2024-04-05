import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { SignIn } from './pages/auth/sign-in'
import { Orders } from './pages/app/orders/orders'
import { NotFound } from './pages/404'

export const Router = createBrowserRouter([

    {
        path: '/', element: <AppLayout/>,
        errorElement: <NotFound/>,
        children: [
            {path: '/', element: <Dashboard/> },
            {path: '/orders', element: <Orders/> },
        ]
    },
    {
        path: '/', element: <AuthLayout/>,
        children: [
            {path: '/sign-in', element:<SignIn/>},
            {path: '/sign-up', element:<SignUp/>}
        ]

    },


]) 