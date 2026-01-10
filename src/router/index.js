import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '../views/HolaMundo.vue'
import PreguntaView from '../views/PreguntaView.vue'
import PokemonView from '../views/PokemonView.vue'
 //existen 2 configuraciones, eager siempre carga cuando paginas que siempre se usan como por ejm login, se accede mas rapido
 //lazy load es carga perezosa, solo carga cuando la pagina lo necesita, por ejm para paginas que no se usan siempre como el de cambiar contraseña


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/hola/:id?', //path variable (optional)
    name: 'hola',
    component: HolaMundo
  },

  {
    path: '/pregunta',
    name: 'pregunta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreguntaView.vue')
  },

   {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
