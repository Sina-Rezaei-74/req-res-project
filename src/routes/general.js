const generalRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/general/Index.vue')
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: () => import('@/views/general/users/Create.vue'),
    },
    {
        path: '/users',
        name: 'users.index',
        component: () => import('@/views/general/users/Index.vue'),
    },
    {
        path: '/users/:id(\\d+)',
        name: 'users.show',
        component: () => import('@/views/general/users/Show.vue'),
    },
    {
        path: '/users/:id(\\d+)/edit',
        name: 'users.edit',
        component: () => import('@/views/general/users/Edit.vue')
    },
    {
        path: '/users-delay',
        name: 'users.delay',
        component: () => import('@/views/general/users/UsersDelay.vue')
    },
]

export default generalRoutes