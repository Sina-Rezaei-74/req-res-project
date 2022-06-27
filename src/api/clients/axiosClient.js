import axios from 'axios'
import router from '@/routes/index'

const baseDomain = 'https://reqres.in/api'
const baseURL = `${baseDomain}`

const client = axios.create({
    baseURL,
})

client.interceptors.response.use(response => response,
    function (error) {
        if (error.response.status === 404) {
            router.push({ path: '/error/404' })
        }
        return Promise.reject(error)
    })

export default client