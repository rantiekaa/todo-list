<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/axiosInstance'

const route = useRoute()
const router = useRouter()

const items = ref([])
const loading = ref(true)

const fetchItems = async () => {
  try {
    const res = await api.get(`/checklist/${route.params.id}/item`)
    items.value = res.data.data
  } catch (err) {
    console.error('Failed:', err)
  } finally {
    loading.value = false
  }
}

const toggleStatus = async (item) => {
  try {
    await api.put(`/checklist/item/${item.id}`, {
      itemCompletionStatus: !item.itemCompletionStatus,
    })
    item.itemCompletionStatus = !item.itemCompletionStatus
  } catch (err) {
    console.error('Failed:', err)
  }
}

const deleteItem = async (itemId) => {
  if (!confirm('Yakin ingin menghapus item ini?')) return

  try {
    await api.delete(`/checklist/${route.params.id}/item/${itemId}`)
    items.value = items.value.filter(item => item.id !== itemId)
  } catch (err) {
    console.error('Failed:', err.response?.data || err.message)
  }
}

onMounted(fetchItems)
</script>

<template>
  <div class="p-6">
    <div class="flex items-center mb-4">
      <button
        @click="$router.push('/checklists')"
        class="text-amber-600 cursor-pointer"
      >
        <span class="text-[30px] mdi mdi-chevron-left"></span>
      </button>
      <h1 class="text-xl font-bold ml-2">Detail Checklist</h1>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else class="mx-8">
      <div v-if="!items.length" class="text-gray-500 italic">
        Checklist ini belum punya item.
      </div>

      <ul v-else class="space-y-2 mb-6">
        <li
          v-for="item in items"
          :key="item.id"
          class="p-3 rounded bg-white shadow flex justify-between items-center"
        >
          <label class="flex items-center space-x-3 flex-1">
            <input
              type="checkbox"
              :checked="item.itemCompletionStatus"
              @change="toggleStatus(item)"
              class="form-checkbox h-5 w-5 text-amber-600"
            />
            <span
              :class="{
                'line-through text-gray-400': item.itemCompletionStatus,
                'text-gray-800': !item.itemCompletionStatus
              }"
              class="text-lg"
            >
              {{ item.name }}
            </span>
          </label>
          <button
            @click="deleteItem(item.id)"
            class="text-red-500 hover:text-red-700 text-xl ml-4"
            title="Hapus item"
          >
            <span class="mdi mdi-trash-can-outline"></span>
          </button>
        </li>
      </ul>
      <button
        @click="router.push(`/checklists/${route.params.id}/add-item`)"
        class="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
      >
        <span class="mdi mdi-plus"></span> Tambah Item
      </button>
    </div>
  </div>
</template>
