<script setup>
import FavCityItem from './FavCityItem.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

import { useStore } from '../store';
const store = useStore();
</script>

<template>
  <div class="home__city--favs">
    <FavCityItem
      v-for="city in store.favoriteCities"
      :cityName="city"
      @click="() => router.push(`/${city}`)"
      :key="city" />
  </div>
</template>

<style lang="scss" scoped>
.home__city--favs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  width: 100%;
  max-width: 880px;
  margin-top: 55px;
}

@media screen and (max-width: 600px) {
  .home__city--favs {
    gap: 20px;
    margin-top: 35px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
