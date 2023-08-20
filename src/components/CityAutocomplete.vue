<script setup>
import CityAutocompleteOption from './CityAutocompleteOption.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
const chooseCity = (city) => {
  router.push(`/${city}`)
};

import { useStore } from '../store';
const store = useStore();

import { useCityAutocomplete } from '../composables';
const { matchedCities, loading, error } = useCityAutocomplete(() => store.cityQuery);
</script>

<template>
  <div v-if="loading" class="home__city--autocomplete message">
    Загрузка подходящих городов...
  </div>
  <div v-else-if="error" class="home__city--autocomplete message">
    При загрузке списка подходящих городов произошла ошибка
  </div>
  <div v-else-if="matchedCities.length" class="home__city--autocomplete">
    <CityAutocompleteOption
      v-for="city in matchedCities"
      @click="() => chooseCity(city)"
      :cityToFind="store.cityQuery"
      :fullCityName="city"
      :key="city" />
  </div>
</template>

<style lang="scss" scoped>
.home__city--autocomplete {
  position: absolute;
  z-index: 100;
  min-width: 100%;
  margin-top: -4px;
  border-radius: 2px;
  color: #8A91AB;
  background-color: #30354B;

  &.message {
    padding: 20px;
  }
}
</style>
