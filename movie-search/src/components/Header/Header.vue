<script setup>
import { ref } from 'vue'
import SearchPanel from './SearchPanel.vue'
import UserBadge from '../User/UserBadge.vue'

const { title, setPage, setQuery } = defineProps({
  title: {
    type: String,
    default: 'Movie Catalog'
  },
  setQuery: {
    type: Function,
    required: true
  },
  setPage: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <SearchPanel :setQuery="setQuery" />
    <UserBadge userName="Alex" />
  </header>
</template>

<style scoped>
.header {
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background-color: var(--main-bg);
  border-radius: 12px;
}

.title {
  font-style: italic;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
}
</style>
