import { VaSe } from '@/js/generic'
import { sha256Hash } from '@/js/sha'
import router from '@/router'

export default {
  async signIn ({ commit }, { email, password }) {
    try {
      const token = await VaSe.post('/login', {
        email,
        password: sha256Hash(password)
      })
      localStorage.setItem('auth_token', token)
      commit('LOGGED_IN_SET', true)
      router.push({ name: 'Home' })
    } catch (e) {
      localStorage.removeItem('auth_token')
      commit('LOGGED_IN_SET', false)
    }
  },

  async signOut ({ commit }) {
    localStorage.removeItem('auth_token')
    commit('LOGGED_IN_SET', false)
    router.push({ name: 'Sign-in' })
  }
}
