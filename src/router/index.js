import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'
import Membership from '../pages/Membership.vue'
import ContactUs from '../pages/ContactUs.vue'
import Law from '../pages/Law.vue'
import Login from '../pages/login.vue'
import Admin from '../pages/Admin.vue'

// import { i18n } from '../main'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/membership',
    name: 'Membership',
    component: Membership
  },
  {
    path: '/contact_us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/law',
    name: 'Law',
    component: Law
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },



]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // document.getElementById('app').scrollIntoView();
    return { top: 0 }
  },

})


// router.beforeEach((to, from, next) => {
//   i18n.global.locale = localStorage.getItem('language') || 'mn'
//   if (authenticatedPaths.includes(to.name) && !Store.getters.authenticated) next({ name: 'SignIn' })
//   else next()
// })

export default router
