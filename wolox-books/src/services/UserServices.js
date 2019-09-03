import api from '../config/api'
import router from '../router'

export const createUser = async user => {
  const response = await api.post('/users', { user })
  if (response.ok) {
    router.push('/login')
    return response.data
  }
  throw response
}
