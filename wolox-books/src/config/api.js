import { create } from 'apisauce'

const api = create({
  baseURL: process.env.VUE_APP_BASE_URL,
  'Content-Type': 'application/json',
  Accept: 'application/json'
})

export default api
