import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FlowbiteProvider from './providers/FlowbiteProvider';
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

// TODO : 
const queryClient = new QueryClient()
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <FlowbiteProvider>
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </FlowbiteProvider>
)
