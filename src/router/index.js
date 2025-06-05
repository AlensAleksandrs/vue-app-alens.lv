import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudyView from '../views/StudyView.vue'
import ProView from '@/views/ProView.vue'
import HobbyView from '@/views/HobbyView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/studies',
      name: 'studies',
      component: StudyView,
    },
    {
      path: '/professionally',
      name: 'professionally',
      component: ProView,
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: HobbyView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
