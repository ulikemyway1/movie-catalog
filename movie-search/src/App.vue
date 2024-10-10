<script setup>
import { ref, watch } from 'vue'
import Header from './components/Header/Header.vue'
import fetchAPIDebounced from '@/services/fetchAPI'
import MovieBoardStat from '@/components/MovieBoard/MovieBoardStat.vue'
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
      <MovieBoardStat :query="query" :resultsCount="movieListCount" />
    </main>
  </div>
</template>

<style scoped></style>
