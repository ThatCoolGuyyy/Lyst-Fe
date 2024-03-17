import { createWebHistory, createRouter } from 'vue-router'

import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'
import LandingPage from '@/components/LandingPage.vue'
import RoleSelector from '@/components/RoleSelector.vue'
import DashBoard from '@/views/DashboardView.vue'

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/login', component: SignIn},
  { path: '/roleselect', component: RoleSelector},
  { path: '/', component: LandingPage },
  { path: '/dashboard/:role', component: DashBoard, props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router