const errorsRoutes = [
    {
        path: '*',
        alias: '/error/404',
        name: 'error.404',
        component: () => import('@/views/general/errors/404.vue'),
        meta: {
            layout: 'ErrorsLayout',
        },
    },
]

export default errorsRoutes