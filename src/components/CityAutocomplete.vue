<script setup>
import { ref, watch } from 'vue';
import CityAutocompleteOption from './CityAutocompleteOption.vue';
const props = defineProps(['cityToFind']);
const emits = defineEmits(['chooseCity']);
import cities from '../assets/cities.json';

const handleChooseCity = (e) => {
  console.log(e);
  emits('chooseCity', e)
}

const matchedCities = ref([]);
watch(() => props.cityToFind, () => {
  matchedCities.value = [];
  if (props.cityToFind) {
    const cityToFind = props.cityToFind.toLowerCase();
    for (const city of cities) {
      if (city.toLowerCase().includes(cityToFind)) {
        matchedCities.value.push(city);
        if (matchedCities.value.length === 5) {
          break;
        }
      }
    }
  }
});

</script>

<template>
  <div v-if="matchedCities.length" class="home__city--autocomplete">
    <CityAutocompleteOption v-for="city in matchedCities" @click="() => handleChooseCity(city)"
      :cityToFind="props.cityToFind" :fullCityName="city" :key="city" />
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
}
</style>