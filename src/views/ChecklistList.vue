<script setup>
import { onMounted, ref } from 'vue'
import { getChecklists } from '../services/checklistService'

const checklists = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    checklists.value = await getChecklists()
  } catch (err) {
    console.error('Failed:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Checklist Saya</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="checklists.length === 0">
      <p>Tidak ada checklist. Yuk buat satu!</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="item in checklists"
        :key="item.id"
        class="bg-white rounded shadow p-4 border hover:border-amber-500"
      >
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <div class="mt-4 flex justify-between">
          <router-link
            :to="`/checklists/${item.id}`"
            class="text-amber-600 text-sm"
          >
            Lihat Detail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
