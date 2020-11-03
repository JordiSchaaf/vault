import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import SignIn from '@/components/sign_in'
import Home from '@/components/home'
import Profile from '@/components/profile'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/sign-in', name: 'Sign-in', component: SignIn },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  }

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record =>
    record.meta.requiresAuth
  )

  if (requiresAuth) {
    if (localStorage.getItem('auth_token')) {
      store.commit('LOGGED_IN_SET', true)

      if (!store.state.currentUser.email) {
        store.dispatch('setUser')
      }

      next()
    } else {
      next('/sign-in')
    }
  } else {
    next()
  }
})

export default router
