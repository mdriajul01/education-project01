import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { createRoot } from 'react-dom/client'


const routes = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App></App>
    </RouterProvider>
  </React.StrictMode>,
)
