import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isloggedIn = ref(false)
  function authenticated() {
    isloggedIn.value = true
  }

  function logout() {
    isloggedIn.value = false
  }

  return { isloggedIn, authenticated, logout }
}, {
    persist: {
        storage: sessionStorage
    }
})
