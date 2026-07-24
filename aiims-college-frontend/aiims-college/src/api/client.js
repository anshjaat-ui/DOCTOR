const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function getToken() {
  return localStorage.getItem('token')
}

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  if (auth) {
    const token = getToken()
    if (token) headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok || data.success === false) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}

// ---- Auth ---- (backend: POST /auth/register, POST /auth/login)
export const register = (payload) => request('/auth/register', { method: 'POST', body: payload })
export const login = (payload) => request('/auth/login', { method: 'POST', body: payload })

// ---- Courses (backend calls them "products") ----
export const getCourses = () => request('/products').then((r) => r.data)

// ---- Admission ----
export const applyAdmission = (payload) => request('/admission/apply', { method: 'POST', body: payload }).then((r) => r.data)

// ---- AI Counsellor ----
export const askAI = (payload) => request('/ai', { method: 'POST', body: payload }).then((r) => r.result)

// ---- Orders (course purchase / prospectus order) ----
export const placeOrder = (payload) => request('/orders', { method: 'POST', body: payload, auth: true }).then((r) => r.data)
