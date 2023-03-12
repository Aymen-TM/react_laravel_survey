import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// @ts-ignore
import router from "../src/router.jsx"
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider >
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
