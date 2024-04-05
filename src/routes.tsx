import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { SignIn } from './pages/auth/sign-in'
import { Orders } from './pages/app/orders/orders'

export const Router = createBrowserRouter([

    {
        path: '/', element: <AppLayout/>,
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