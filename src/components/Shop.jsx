import React, { useContext, useState } from 'react'
import { CartContext, ProductContext } from '../App'
import ProductCard from './Cards/ProductCard'
import { addToDb } from '../utils/fakeDB'
import toast from 'react-hot-toast'

const Shop = () => {
  const products = useContext(ProductContext || [])
  const [cart, setCart] = useContext(CartContext || [])

  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
    toast.success('Product Added! 🛒', { autoClose: 500 })
  }

  return (
    <div className='my-container'>
      <div className='product-container'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop
