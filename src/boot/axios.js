import { boot } from 'quasar/wrappers'
import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api.example.com'
})

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

// Export for Composition API / stores / composables
export { axios, api }