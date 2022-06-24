import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import MainView from '../views/MainView.vue'
import PregledView from '../views/PregledView.vue'
import ListaView from '../views/ListaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/pregled',
      name: 'pregled',
      component: PregledView
    },
    {
      path: '/lista',
      name: 'lista',
      component: ListaView
    }
    
  ]
})

export default router
