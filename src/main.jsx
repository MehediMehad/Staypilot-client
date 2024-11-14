import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import FlowbiteProvider from './providers/FlowbiteProvider';
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

// TODO : 
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <FlowbiteProvider>
  <HelmetProvider context={helmetContext}>
    <AuthProvider>
      <div className="bg-gray-100 min-h-screen">
      <RouterProvider router={router} />
      </div>
      <Toaster />
    </AuthProvider>
  </HelmetProvider>
  </FlowbiteProvider>
)
