
import { RouterProvider } from 'react-router-dom'

import './global.css'
import { Router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'


export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="graoshop-theme" defaultTheme='dark'>
        <Helmet titleTemplate="%s grão.shop"/>
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
    
  )
}

