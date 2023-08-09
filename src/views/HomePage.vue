<template>
  <div class="home">
    <div class="home__city">
      <input
        id="citySelect"
        class="home__city-input"
        ref=""
        placeholder="Укажите город"
      />
    </div>
    <div class="home__text-help">
      <div>Начните вводить город,</div>
      <div>
        например,
        <span>Ижевск</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 80px 20px 20px 20px;

  &__city {
    width: 100%;
    max-width: 510px;

    &-input {
      padding: 18px 20px;
      border-radius: 2px;
      background: #2a2f45;
      border: 0;
      width: 100%;
      color: #fff;
      font-weight: 400;
      outline: none;
    }

    &-input::placeholder {
      color: #8a91ab;
    }
  }

  &__text-help {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    color: #8a91ab;
    font-weight: 400;
  }
}

@media screen and (max-width: 600px) {
  .home {
    padding-top: 20px;
  }
}
</style>
