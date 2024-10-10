<script setup>
import { ref, watch } from 'vue'
import Header from './components/Header/Header.vue'
import fetchAPIDebounced from '@/services/fetchAPI'
import MovieBoard from '@/components/MovieBoard/MovieBoard.vue'
const movieList = ref([])
const movieListCount = ref(0)
const query = ref('')
const page = ref(1)

const setQuery = (newQuery) => (query.value = newQuery)
const setPage = (newPage) => (pahe.value = newPage)
const updateSearchResult = (searchResult) => {
  movieList.value = searchResult.Search
  movieListCount.value = Number(searchResult.totalResults)
}

watch(query, async () => {
  await fetchAPIDebounced(query.value)
    .then((r) => updateSearchResult(r))
    .catch((err) => console.error(err))
})
</script>

<template>
  <div class="container">
    <Header :setQuery="setQuery" :setPage="setPage" />

    <main>
      <MovieBoard :query="query" :resultsCount="movieListCount" :movieInfoArray="movieList" />
    </main>
  </div>
</template>

<style scoped></style>
