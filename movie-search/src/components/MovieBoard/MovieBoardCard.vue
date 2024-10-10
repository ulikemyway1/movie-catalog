<script setup>
import { defineProps } from 'vue'

const { movieInfo } = defineProps({
  movieInfo: {
    type: Object,
    required: true
  }
})

import placeholder from '@/assets/img/no-image.svg'

const { Title, Year, imdbID, Type, Poster } = movieInfo
const posterSRC = Poster && Poster !== 'N/A' ? Poster : placeholder
</script>

<template>
  <div class="movie-card">
    <img
      class="movie-card__poster"
      :style="{ objectFit: Poster !== 'N/A' ? 'cover' : 'contain' }"
      :src="posterSRC"
      :alt="Title"
    />
    <div class="movie-card__descr">
      <span><strong>Title:</strong> {{ Title }}</span>
      <span><strong>Year: </strong>{{ Year }}</span>
      <span><strong>imdbID:</strong> {{ imdbID }}</span>
      <span><strong>Type:</strong> {{ Type }}</span>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 300px;
  height: 600px;
  background-color: var(--main-bg);
  border: 2px solid var(--search-panel-border);
  border-radius: 12px;
  color: var(--black);
  font-weight: 300;
  cursor: pointer;
  transition:
    filter 0.3s,
    transform 0.3s;
  overflow: hidden;
}

.movie-card__descr {
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.movie-card__poster {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  object-fit: cover;
  transform: scale(1.2);
  transition: all 0.3s;
}

@media (hover: hover) and (pointer: fine) {
  .movie-card:hover {
    filter: drop-shadow(0 0 10px var(--search-panel-border));
    transform: scale(1.1);
    z-index: 100;
  }

  .movie-card:hover .movie-card__poster {
    transform: scale(1);
    object-fit: contain;
  }
}
</style>
