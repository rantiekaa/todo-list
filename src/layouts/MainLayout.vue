<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="container mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>

