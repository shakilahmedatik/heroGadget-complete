import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Modal from './components/Modal'

export const ProductContext = createContext([])
export const CartContext = createContext([])
const App = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { products, initialCart } = useLoaderData()

  const cartAlert = sessionStorage.getItem('alert')

  if (initialCart.length > 0 && cartAlert !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }
  const [cart, setCart] = useState(initialCart)
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet />
        </div>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
