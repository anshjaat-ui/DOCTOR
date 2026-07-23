const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`)
  }
  return data
}

// ---- Auth ----
export const signup = (payload) => apiFetch('/auth/signup', { method: 'POST', body: payload })
export const login = (payload) => apiFetch('/auth/login', { method: 'POST', body: payload })
export const getMe = (token) => apiFetch('/auth/me', { token })

// ---- Products ----
export const getProducts = (params = '') => apiFetch(`/products${params}`)
export const getProductById = (id) => apiFetch(`/products/${id}`)

// ---- Categories ----
export const getCategories = () => apiFetch('/categories')

// ---- Cart ----
export const getCart = (token) => apiFetch('/cart', { token })
export const addToCart = (token, productId, qty = 1) =>
  apiFetch('/cart', { method: 'POST', body: { productId, qty }, token })
export const updateCartItem = (token, productId, qty) =>
  apiFetch(`/cart/${productId}`, { method: 'PUT', body: { qty }, token })
export const removeCartItem = (token, productId) =>
  apiFetch(`/cart/${productId}`, { method: 'DELETE', token })

// ---- Orders ----
export const placeOrder = (payload, token) =>
  apiFetch('/orders', { method: 'POST', body: payload, token })
export const getMyOrders = (token) => apiFetch('/orders', { token })

// ---- AI Symptom Checker ----
export const getAIQuestions = (category) => apiFetch(`/ai/questions?category=${category}`)
export const analyzeAI = (payload) => apiFetch('/ai/analyze', { method: 'POST', body: payload })

// ---- Settings ----
export const getHeroSettings = () => apiFetch('/settings/hero')

export { API_BASE }
