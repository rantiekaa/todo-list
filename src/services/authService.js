import axios from './axiosInstance'

export const login = async (email, password) => {
  const res = await axios.post('/login', {
    email,
    password,
  })
  return res.data
}

export const register = async (username, email, password) => {
  const res = await axios.post('/register', {
    email,
    password,
    username
  })
  return res.data
}