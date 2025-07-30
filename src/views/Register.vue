<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../services/authService'

const fullName = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await register(fullName.value, email.value, password.value)
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to register'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Daftar Akun Baru</h2>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <input v-model="fullName" type="text" placeholder="Nama Lengkap"
        class="w-full border p-2 rounded" />
      <input v-model="email" type="email" placeholder="Email"
        class="w-full border p-2 rounded" />
      <input v-model="password" type="password" placeholder="Password"
        class="w-full border p-2 rounded" />
      <button type="submit" class="bg-amber-500 text-white px-4 py-2 rounded w-full">
        Daftar
      </button>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </form>
  </div>
</template>
