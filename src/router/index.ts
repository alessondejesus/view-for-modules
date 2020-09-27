import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {Router} from './routes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = Router

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
