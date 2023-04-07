import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './components/Home'
import App from './App'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartData } from './loaders/getCart&ProductsData'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)
