<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/axiosInstance'

const route = useRoute()
const router = useRouter()

const itemName = ref('')
const error = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  if (!itemName.value.trim()) {
    error.value = 'Nama item tidak boleh kosong.'
    return
  }

  loading.value = true
  try {
    await api.post(`/checklist/${route.params.id}/item`, {
      itemName: itemName.value,
    })
    router.push(`/checklists/${route.params.id}`)
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="p-6 max-w-lg mx-auto">
    <h1 class="text-xl font-bold mb-4">Tambah Item ke Checklist</h1>

    <div v-if="error" class="mb-4 text-red-600 text-sm">
      {{ error }}
    </div>

    <input
      v-model="itemName"
      type="text"
      placeholder="Masukkan nama item"
      class="w-full p-2 border rounded mb-4"
    />

    <div class="flex space-x-2">
      <button
        @click="handleSubmit"
        :disabled="loading"
        class="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 disabled:opacity-50"
      >
        {{ loading ? 'Menyimpan...' : 'Simpan' }}
      </button>
      <button
        @click="router.back()"
        class="text-sm text-gray-600 hover:underline"
      >
        Batal
      </button>
    </div>
  </div>
</template>
