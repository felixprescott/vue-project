<script setup>
import { useCityAutocomplete } from '../composables';
import CityAutocompleteOption from './CityAutocompleteOption.vue';
const props = defineProps(['cityToFind']);
const emits = defineEmits(['chooseCity']);

const handleChooseCity = (e) => {
  emits('chooseCity', e)
}

const { matchedCities, loading, error } = useCityAutocomplete(() => props.cityToFind);
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
      @click="() => handleChooseCity(city)"
      :cityToFind="props.cityToFind"
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
