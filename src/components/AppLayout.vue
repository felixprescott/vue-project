<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push('/');
};
</script>

<template>
  <main class="main">
    <header class="header">
      <div class="header__logo" @click="goHome">
        <div class="header__logo-image">
          <img
            class="header__logo-image-img"
            src="@/assets/svg/header_logo.svg"
            alt="Header Logo"
          />
        </div>
        <div class="header__logo-text">WeatherCheck</div>
      </div>
    </header>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background-color: #161b30;
  display: flex;
  flex-direction: column;
}
.header {
  height: 65px;
  background-color: #2a2f45;
  display: flex;

  &__logo {
    display: flex;
    cursor: pointer;

    &-image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      height: 65px;

      &-img {
        height: 30px;
        width: 30px;
      }
    }

    &-text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
  }
}

@media screen and (max-width: 600px) {
  .header {
    background: none;
  }
}
</style>
