import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ChecklistList from '../views/ChecklistList.vue'
import ChecklistDetail from '../views/ChecklistDetail.vue'
import AddItem from '../views/AddItem.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/checklists', component: ChecklistList },
  { path: '/checklists/:id', component: ChecklistDetail },
  { path: '/checklists/:id/add-item', component: AddItem },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
