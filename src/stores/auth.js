import { ref } from 'vue'

export const isLoggedIn = ref(!!localStorage.getItem('token'))

export function setLogin(token) {
  localStorage.setItem('token', token)
  isLoggedIn.value = true
}

export function logout() {
  localStorage.removeItem('token')
  isLoggedIn.value = false
}
