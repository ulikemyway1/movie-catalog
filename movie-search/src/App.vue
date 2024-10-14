<script setup>
import { ref, watch } from 'vue'
import Header from './components/Header/Header.vue'
import fetchAPIDebounced from '@/services/fetchAPI'
import MovieBoard from '@/components/MovieBoard/MovieBoard.vue'
import Skeleton from '@/components/Loaders/Skeleton.vue';
import Pagination from '@/components/Pagination/Pagination.vue'
const movieList = ref([])
const movieListCount = ref(0)
const query = ref('')
const page = ref(null)
const loading = ref(false);

const setQuery = (newQuery) => (query.value = newQuery);

const setPage = (newPage) => (page.value = newPage);

const resetSearchResultList = () => {
  movieList.value = [];
}
const resetSearchResultCount = () => {
  movieListCount.value = 0;
}
const updateSearchResultOnPage = (searchResult) => {
  movieList.value = searchResult.Search
}
const updateSearchResult = (searchResult) => {
  movieList.value = searchResult.Search;
  movieListCount.value = searchResult.totalResults;
}

const setLoading = (value) => loading.value = value;

watch(query, async (currentQuery, prevQuery) => {
  if (currentQuery !== prevQuery) {
    resetSearchResultCount();
    resetSearchResultList();
  await fetchAPIDebounced(query.value, page.value, () => setLoading(true) )
    .then((r) => updateSearchResult(r))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
  }

})

watch(page, async (currentQuery, prevQuery) => {
    resetSearchResultList();
  await fetchAPIDebounced(query.value, page.value, () => setLoading(true))
    .then((r) => updateSearchResultOnPage(r))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
})

</script>

<template>
  <div class="container">
    <Header :setQuery="setQuery" :setPage="setPage" />

    <main>
      <MovieBoard :query="query" :resultsCount="movieListCount" :movieInfoArray="movieList" />
      <Pagination v-show="!loading && query" :itemsCount="movieListCount" :changePageCallback="setPage"/>
    </main>
    <Skeleton v-if="loading"/>
  </div>
</template>

<style scoped></style>
