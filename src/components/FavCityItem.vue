<script setup>
import { onMounted, ref, reactive } from 'vue';
import { getDataForCity } from '../utils';
import Loader from '../components/Loader.vue';
const props = defineProps(['cityName']);

const cityData = reactive({
  icon: '',
  temp: '',
});
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = false;
    const res = await getDataForCity(props.cityName);
    cityData.icon = res.icon;
    cityData.temp = res.temp;
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="home__city--favs-item">
    <div v-if="!loading" class="home__city--favs-item--name">
      {{ cityName }}
    </div>
    <div v-if="!loading && cityData.temp" class="home__city--favs-item--temp">
      {{ cityData.temp }}
    </div>
    <div v-if="!loading && cityData.icon" class="home__city--favs-item--logo">
      <img class="home__city--favs-item--logo--img" :src="`/weather_icon_${cityData.icon.slice(0, 2)}.svg`"
        alt="Weather Icon" />
    </div>
    <Loader v-if="loading" />
    <div v-if="error" class="home__city--favs-item--error">
      Ошибка загрузки данных
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home__city--favs-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 190px;
  border-radius: 6px;
  background: #292E44;
  cursor: pointer;

  &--name {
    text-align: center;
    margin-bottom: 10px;
  }

  &--temp {
    font-size: 40px;
    font-weight: 500;
  }

  &--logo {
    &--img {
      max-width: 80px;
      max-height: 80px;
    }
  }

  &--error {
    color: orangered;
  }
}
</style>