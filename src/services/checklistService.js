import api from './axiosInstance'

export const getChecklists = async () => {
  const res = await api.get('/checklist')
  return res.data.data
}
