import axios from 'axios'
const baseURL = import.meta.env.VITE_PROD
export const api = axios.create({
  baseURL: baseURL,
})
