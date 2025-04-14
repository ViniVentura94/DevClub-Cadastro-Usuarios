
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{
        background: 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '10px',
        fontFamily: 'inherit',
        boxShadow: '0 0 10px rgba(0,0,0,0.4)'
      }}
      progressStyle={{
        background: '#fff'
      }}
    />

  </StrictMode>,
)

