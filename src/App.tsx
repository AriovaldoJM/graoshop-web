
import { RouterProvider } from 'react-router-dom'

import './global.css'
import { Router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'


export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s grão.shop"/>
      <Toaster richColors />
      <RouterProvider router={Router} />
    </HelmetProvider>
    
  )
}

