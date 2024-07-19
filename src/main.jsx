import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import Welcome from './components/Welcome/Welcome'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Welcome/>
  },
  {
    path: "home",
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
