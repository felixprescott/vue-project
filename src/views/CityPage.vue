<script setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isCityFavorite, addFavoriteCity, removeFavoriteCity, getDataForCity } from '../utils';
import Loader from '../components/Loader.vue';

const route = useRoute();
const cityName = route.params.cityName;

const router = useRouter();
const goHome = () => {
  router.push('/');
};

const cityMarked = ref(isCityFavorite(cityName));
const markCity = (city) => {
  addFavoriteCity(city);
  cityMarked.value = true;
}
const unmarkCity = (city) => {
  removeFavoriteCity(city);
  cityMarked.value = false;
}

const cityData = reactive({
  icon: '',
  description: '',
  temp: '',
  pressure: '',
  dawn: '',
});
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = false;
    const res = await getDataForCity(cityName);
    cityData.icon = res.icon;
    cityData.description = res.description;
    cityData.temp = res.temp;
    cityData.pressure = res.pressure;
    cityData.dawn = res.dawn;
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
})
</script>

<template>
  <div class="city">
    <div class="city__header">
      <div class="city__header--back" @click="goHome">
        <div class="city__header--back--img">
          <img src="@/assets/svg/back.svg" alt="Back Arrow" />
        </div>
        <div class="city__header--back--text">Назад</div>
      </div>
      <div class="city__header--bookmark">
        <img v-if="cityMarked" class="header__logo-image-img" src="@/assets/svg/bookmark_small_on.svg" alt="Bookmark Icon"
          @click="() => unmarkCity(cityName)" />
        <img v-else class="header__logo-image-img" src="@/assets/svg/bookmark_small_off.svg" alt="Bookmark Icon"
          @click="() => markCity(cityName)" />
      </div>
    </div>
    <div class="city__name">{{ cityName }}</div>
    <Loader v-if="loading" />
    <div v-if="!loading && cityData.description" class="city__weather-text">{{ cityData.description }}</div>
    <div v-if="!loading && cityData.temp" class="city__weather">
      <div class="city__weather--temp">{{ cityData.temp }}</div>
      <div v-if="cityData.icon" class="city__weather--logo">
        <img class="city__weather--logo--img" :src="`/weather_icon_${cityData.icon.slice(0, 2)}.svg`"
          alt="Weather Icon" />
      </div>
    </div>
    <div v-if="!loading && cityData.pressure" class="city__weather-pressure">
      <img src="@/assets/svg/barometer.svg" alt="Barometer Icon" />
      &nbsp;{{ cityData.pressure }}
    </div>
    <div v-if="!loading && cityData.dawn" class="city__weather-dawn">{{ cityData.dawn }}</div>
    <div v-if="error" class="city__error">
      При загрузке информации о погоде произошла ошибка
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(80.36% 80.36% at 50% 0%,
      #5a607c 0%,
      #161b30 100%);

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #8a91ab;
    padding: 34px 24px;

    &--back {
      display: flex;
      gap: 12px;
      cursor: pointer;
    }

    &--bookmark {
      cursor: pointer;
    }
  }

  &__name {
    font-size: 56px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  &__weather-text {
    margin-bottom: 36px;
  }

  &__weather {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    &--temp {
      font-size: 130px;
      font-weight: 600;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--logo {
      width: 190px;
      height: 190px;
      padding: 20px;

      &--img {
        height: 100%;
      }
    }
  }

  &__weather-pressure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }

  &__weather-dawn {
    color: #8a91ab;
  }
}

@media screen and (max-width: 600px) {
  .city {
    &__header {
      padding: 20px;

      &--back {
        &--text {
          display: none;
        }
      }
    }

    &__name {
      font-size: 24px;
      font-weight: 500;
    }

    &__weather-text {
      font-size: 14px;
      margin-bottom: 16px;
    }

    &__weather {
      flex-direction: column;
      margin-bottom: 20px;

      &--temp {
        font-size: 120px;
      }

      &--logo {
        width: 132px;
        height: 132px;
        padding: 0;
      }
    }

    &__weather-pressure {
      font-size: 14px;
    }

    &__weather-dawn {
      font-size: 14px;
    }
  }
}
</style>
