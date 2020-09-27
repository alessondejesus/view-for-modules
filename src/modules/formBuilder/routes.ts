const routes = {
    path: '/form-builder',
    name: 'formBuilder',
    component: () => import(/* webpackChunkName: "formBuilder" */ './views/FormBuilder.vue')
}

export { routes }