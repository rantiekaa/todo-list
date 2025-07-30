<script setup>
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isAuthPage = computed(() =>
  ['/login', '/register'].includes(route.path)
)
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
