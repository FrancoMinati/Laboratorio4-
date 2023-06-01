import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/detalle/:id",
    name: "DetallePlato",
    component: () => import("../views/DetallePlato.vue")
  },
  {
    path: "/listaPlatos",
    name: "GrillaPlatos",
    component: () => import("../views/GrillaPlatos.vue")
  },
  {
    path: "/InstrumentosABM",
    name: "InstrumentosABM",
    component: () => import("../views/InstrumentosABM.vue")
  },
  {
    path: "/formulario/:id",
    name: "FormularioPlato",
    component: () => import("../views/FormularioPlato.vue")
  },
  {
    path: "/instrumentos/formulario/:id",
    name: "FormularioInstrumento",
    component: () => import("../views/FormularioInstrumento.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
