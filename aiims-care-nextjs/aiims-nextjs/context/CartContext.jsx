'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import * as api from '@/lib/api'
import { useAuth } from './AuthContext'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const { token } = useAuth()
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    if (!token) {
      setCart([])
      return
    }
    setLoading(true)
    try {
      const data = await api.getCart(token)
      setCart(data)
    } catch (err) {
      console.error('Failed to load cart:', err.message)
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    refresh()
  }, [refresh])

  async function add(productId, qty = 1) {
    if (!token) throw new Error('Please log in to add items to your cart')
    const data = await api.addToCart(token, productId, qty)
    setCart(data)
  }

  async function updateQty(productId, qty) {
    const data = await api.updateCartItem(token, productId, qty)
    setCart(data)
  }

  async function remove(productId) {
    const data = await api.removeCartItem(token, productId)
    setCart(data)
  }

  const count = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, count, loading, add, updateQty, remove, refresh }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
