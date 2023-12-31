import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routes/Routes.jsx'
import AuthProvider from './components/providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto h-full'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
