<script setup>
import { ref, watch } from 'vue';
const cityInput = ref();
const chooseCity = (city) => {
  cityInput.value = city;
};

watch(cityInput, () => {
  console.log(cityInput.value);
});
</script>

<template>
  <div class="home">
    <div class="home__city">
      <input
        id="citySelect"
        class="home__city-input"
        v-model="cityInput"
        placeholder="Укажите город"
      />
    </div>
    <div class="home__text-help">
      <div class="home__text-help--first">Начните вводить город,</div>
      <div class="home__text-help--second">
        например,
        <a href="#" @click="() => chooseCity('Ижевск')">Ижевск</a>
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
        <img
          class="header__logo-image-img"
          src="@/assets/svg/bookmark.svg"
          alt="Header Logo"
        />
      </div>
    </div>
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
    width: 100%;
    max-width: 550px;
    max-width: 510px;

    &-input {
      padding: 18px 20px;
      border-radius: 2px;
      background: #2a2f45;
      border: 0;
      width: 100%;
      color: #fff;
      outline: none;
    }

    &-input::placeholder {
      color: #8a91ab;
    }
  }

  &__text-help {
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

  &__text-fav {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    color: #8a91ab;
  }
}

@media screen and (max-width: 600px) {
  .home {
    padding-top: 20px;
  }
}
</style>
