import { create } from 'apisauce'

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  'Content-Type': 'application/json',
  Accept: 'application/json'
})

export default api
