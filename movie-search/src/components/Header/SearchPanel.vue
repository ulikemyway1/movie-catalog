<script setup>
import { ref } from 'vue'

const inputQuery = ref('')

const { setQuery } = defineProps({
  setQuery: {
    type: Function,
    required: true
  }
})

const updateQuery = () => {
  setQuery(inputQuery.value)
}
</script>

<template>
  <input
    type="search"
    v-model="inputQuery"
    @input="updateQuery"
    class="search-panel"
    placeholder="Search"
  />
</template>

<style scoped>
.search-panel {
  padding: 5px 10px;
  flex-grow: 1;
  border-radius: 6px;
  border: 2px solid var(--search-panel-border);
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}

.search-panel:focus {
  box-shadow: 0 0 5px var(--search-panel-border);
}
</style>
