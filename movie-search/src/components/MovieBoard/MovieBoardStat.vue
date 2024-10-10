<script setup>
import { defineProps } from 'vue'

const { query, resultsCount } = defineProps({
  query: {
    type: String,
    required: true
  },
  resultsCount: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="movie-board__stat">
    <div v-if="query" class="movie-board__header">
      <h3 v-if="query" class="movie-board__stat-title">You searched for: {{ query.trim() }}.</h3>
      <p v-if="resultsCount > 1">Found {{ resultsCount }} results.</p>
      <p v-if="resultsCount == 1">Found {{ resultsCount }} result.</p>
      <p v-if="!resultsCount && query">No results found.</p>
    </div>
  </div>
</template>

<style scoped>
.movie-board__stat {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.movie-board__header {
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  border-bottom: 1px solid var(--search-panel-border);
}
</style>
