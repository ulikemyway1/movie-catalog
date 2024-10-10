<script setup>
import MovieBoardCard from './MovieBoardCard.vue'
import MovieBoardStat from './MovieBoardStat.vue'
import { defineProps } from 'vue'

const { query, resultsCount, movieInfoArray } = defineProps({
  query: {
    type: String,
    required: true
  },
  resultsCount: {
    type: Number,
    required: true
  },
  movieInfoArray: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="movie-board">
    <MovieBoardStat :query="query" :resultsCount="resultsCount" />
    <div class="movie-board__cards-container">
      <MovieBoardCard
        v-for="(movieInfo, index) in movieInfoArray"
        :key="movieInfo.imdbID"
        :movieInfo="movieInfo"
      />
    </div>
  </div>
</template>

<style scoped>
.movie-board__cards-container {
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 40px;
  justify-content: center;
}
</style>
