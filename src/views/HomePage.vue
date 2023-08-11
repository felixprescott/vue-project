<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getFavoriteCities } from '../utils';
import CityAutocomplete from '../components/CityAutocomplete.vue';
import HomeHelp from '../components/HomeHelp.vue';
import HomeFavCities from '../components/HomeFavCities.vue';
const router = useRouter();

const cityInput = ref();
const inputCity = (city) => {
  cityInput.value = city;
};

const chooseCity = (city) => {
  router.push(`/${city}`)
};

const favoriteCities = ref(getFavoriteCities());
</script>

<template>
  <div class="home">
    <div class="home__city">
      <input id="citySelect" name="citySelect" list="citySelectList" class="home__city--input" v-model="cityInput"
        placeholder="Укажите город" autofocus />
      <CityAutocomplete :cityToFind="cityInput" @chooseCity="chooseCity" />
    </div>
    <HomeFavCities v-if="favoriteCities.length" :favoriteCities="favoriteCities" />
    <HomeHelp v-else @inputCity="inputCity" />
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
