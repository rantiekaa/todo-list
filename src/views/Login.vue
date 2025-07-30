<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/authService'
import { setLogin } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await login(email.value, password.value)
    const token = res.data.token
    setLogin(token)
    router.push('/checklists')
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to login'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input v-model="email" type="email" placeholder="Email" class="w-full border p-2 rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full border p-2 rounded" />
      <button type="submit" class="bg-amber-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </form>
    <p class="mt-4 text-center text-sm">
      Belum punya akun?
      <router-link to="/register" class="text-amber-600 hover:underline">
        Daftar sekarang
      </router-link>
    </p>
  </div>
</template>
