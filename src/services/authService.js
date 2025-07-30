import axios from './axiosInstance'

export const login = async (email, password) => {
  const res = await axios.post('/login', {
    email,
    password,
  })
  return res.data
}

export const register = async (fullName, email, password) => {
  const res = await axios.post('/register', {
    email,
    password,
    full_name: fullName,
  })
  return res.data
}
