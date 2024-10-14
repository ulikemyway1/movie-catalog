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
    <button class="btn prev" @click="() => goToPrevPage()">
        <svg fill="currentColor" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
            <g id="SVGRepo_iconCarrier"> <path d="M18,3v18L5,12L18,3z M8.5,12l7.5,5V7L8.5,12z"/> </g>
            </svg>
    </button>
    <span>
      <select v-model="currentPage" @change="changePageCallback(currentPage)">
        <option v-for="page in maxPage" :key="page" :value="page">{{ page }}</option>
      </select>
      / {{ maxPage }}
    </span>
    <button class="btn next" @click="() => goToNextPage()">
        <svg fill="currentColor" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">
        <g id="SVGRepo_iconCarrier"> <path d="M18,3v18L5,12L18,3z M8.5,12l7.5,5V7L8.5,12z"/> </g>
        </svg>
    </button>
  </div>
</template>

<style scoped>
.pagination__wrapper {
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #ffffffc6;
  z-index: 10000;
}

select {
    font-size: 30px;
    cursor: pointer;
}

.btn {
  display: block;
  padding: 5px;
  cursor: pointer;
}
</style>
