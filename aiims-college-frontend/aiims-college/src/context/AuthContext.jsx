import { createContext, useContext, useState, useEffect } from 'react'
import * as api from '../api/client'

const AuthContext = createContext(null)

function decodeToken(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload // { id, role }
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [email, setEmail] = useState(() => localStorage.getItem('email'))

  const claims = token ? decodeToken(token) : null

  useEffect(() => {
    if (token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
  }, [token])

  async function doRegister(name, emailInput, password) {
    await api.register({ name, email: emailInput, password })
    // Backend's /register does not log the user in automatically — sign them in right after.
    return doLogin(emailInput, password)
  }

  async function doLogin(emailInput, password) {
    const data = await api.login({ email: emailInput, password })
    setToken(data.token)
    setEmail(emailInput)
    localStorage.setItem('email', emailInput)
    return data
  }

  function logout() {
    setToken(null)
    setEmail(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        email,
        role: claims?.role || null,
        isLoggedIn: !!token,
        register: doRegister,
        login: doLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
