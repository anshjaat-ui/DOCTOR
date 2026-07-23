'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import * as api from '@/lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedToken = typeof window !== 'undefined' ? localStorage.getItem('aiims_token') : null
    if (savedToken) {
      api
        .getMe(savedToken)
        .then((u) => {
          setUser(u)
          setToken(savedToken)
        })
        .catch(() => {
          localStorage.removeItem('aiims_token')
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  function persist(data) {
    setUser({ _id: data._id, name: data.name, email: data.email, role: data.role })
    setToken(data.token)
    localStorage.setItem('aiims_token', data.token)
  }

  async function login(email, password) {
    const data = await api.login({ email, password })
    persist(data)
    return data
  }

  async function signup(name, email, password) {
    const data = await api.signup({ name, email, password })
    persist(data)
    return data
  }

  function logout() {
    setUser(null)
    setToken(null)
    localStorage.removeItem('aiims_token')
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
