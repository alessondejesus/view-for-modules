const routes = {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
}

export { routes }