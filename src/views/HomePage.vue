<script setup>
import CityAutocomplete from '../components/CityAutocomplete.vue';
import HomeHelp from '../components/HomeHelp.vue';
import HomeFavCities from '../components/HomeFavCities.vue';

import { useStore } from '../store';
const store = useStore();
</script>

<template>
  <div class="home">
    <div class="home__city">
      <input
        id="citySelect"
        name="citySelect"
        list="citySelectList"
        class="home__city--input"
        :value="store.cityQuery"
        @input="(e) => store.setCityQuery(e.target.value)"
        placeholder="Укажите город"
        autofocus />
      <CityAutocomplete />
    </div>
    <HomeFavCities v-if="store.favoriteCities.length" />
    <HomeHelp v-else />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 80px 20px 20px 20px;

  &__city {
    position: relative;
    width: 100%;
    max-width: 550px;
    max-width: 510px;

    &--input {
      position: relative;
      padding: 18px 20px;
      border-radius: 2px;
      background: #2a2f45;
      border: 0;
      width: 100%;
      color: #fff;
      outline: none;
    }

    &--input::placeholder {
      color: #8a91ab;
    }

  }
}

@media screen and (max-width: 600px) {
  .home {
    padding-top: 20px;
  }
}
</style>
