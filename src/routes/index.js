import VueRouter from 'vue-router'
import generalRoutes from './general'
import errorsRoutes from './errors'

const routes = [
    ...generalRoutes,
    ...errorsRoutes,
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router