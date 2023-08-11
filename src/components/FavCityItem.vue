<script setup>
defineProps(['cityName']);
</script>

<template>
  <div class="home__city--favs-item">
    <div class="home__city--favs-item--name">
      {{ cityName }}
    </div>
    <div class="home__city--favs-item--temp">
      -13°
    </div>
    <div class="home__city--favs-item--logo">
      <img class="home__city--favs-item--logo--img" src="/weather_icon_01.svg" alt="Weather Icon" />
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
}
</style>