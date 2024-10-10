<script setup>
import { ref, computed } from 'vue'

const itemsPerPage = 10

const { itemsCount, changePageCallback } = defineProps({
  itemsCount: {
    type: Number,
    required: true
  },
  changePageCallback: {
    type: Function,
    required: true
  }
})

const maxPage = computed(() => Math.ceil((itemsCount || 1) / itemsPerPage))
const minPage = 1
const currentPage = ref(minPage)

const isNextDisabled = computed(() => currentPage.value >= maxPage.value)
const isPrevDisabled = computed(() => currentPage.value <= minPage)

const goToNextPage = () => {
  if (!isNextDisabled.value) {
    currentPage.value += 1
    changePageCallback(currentPage.value)
  }
}

const goToPrevPage = () => {
  if (!isPrevDisabled.value) {
    currentPage.value -= 1
    changePageCallback(currentPage.value)
  }
}
</script>

<template>
  <div class="pagination__wrapper">
    <button class="btn prev" @click="() => goToPrevPage()">prev</button>
    <span>
      <select v-model="currentPage" @change="changePageCallback(currentPage)">
        <option v-for="page in maxPage" :key="page" :value="page">{{ page }}</option>
      </select>
      / {{ maxPage }}
    </span>
    <button class="btn next" @click="() => goToNextPage()">next</button>
  </div>
</template>

<style scoped>
.pagination__wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.btn {
  display: block;
  padding: 5px;
}
</style>
