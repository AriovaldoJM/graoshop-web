
import { RouterProvider } from 'react-router-dom'

import './global.css'
import { Router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'


export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="graoshop-theme" defaultTheme='dark'>
        <Helmet titleTemplate="%s grão.shop"/>
        <Toaster richColors />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </HelmetProvider>
    
  )
}

