<script setup>
import { useRouter } from 'vue-router'
import { logout, isLoggedIn } from '../stores/auth'

const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <nav class="bg-amber-400 text-black px-6 py-4 flex justify-between items-center shadow">
    <div class="text-lg font-bold">
      <span class="mdi mdi-file-check-outline"></span>
      Checklist App
    </div>
    <button
      v-if="isLoggedIn"
      @click="handleLogout"
      class="text-sm"
    >
      Logout
    </button>
  </nav>
</template>
