<script setup>
import cities from '../assets/cities.json';
const randomCity = cities[Math.floor(Math.random() * cities.length)];

import { useStore } from '../store';
const store = useStore();
</script>

<template>
  <div class="home__text-help">
    <div class="home__text-help--first">Начните вводить город,</div>
    <div class="home__text-help--second">
      например,
      <a href="#" @click="() => store.setCityQuery(randomCity)">{{ randomCity }}</a>
    </div>
  </div>
  <div class="home__text-fav">
    <div>
      <div class="home__text-fav--first">Используйте значок «закладки»,</div>
      <div class="home__text-fav--second">
        чтобы закрепить город на главной
      </div>
    </div>
    <div class="home__text-fav--bookmark">
      <img class="header__logo-image-img" src="@/assets/svg/bookmark.svg" alt="Header Logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home__text-help {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  color: #8a91ab;

  &--first::before {
    content: url(../assets/svg/arrow.svg);
    width: 38px;
    height: 32px;
    position: absolute;
    left: -40px;
    top: -16px;
  }

  a {
    border-bottom: 1px dotted #fff;
  }
}

.home__text-fav {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  color: #8a91ab;
}
</style>