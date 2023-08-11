<script setup>
import { useRouter } from 'vue-router';
import FavCityItem from './FavCityItem.vue';
defineProps(['favoriteCities']);
const router = useRouter();
</script>

<template>
  <div class="home__city--favs">
    <FavCityItem v-for="city in favoriteCities" :key="city" :cityName="city" @click="() => router.push(`/${city}`)" />
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
