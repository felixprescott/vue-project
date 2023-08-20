import { defineStore } from 'pinia';
import { getFavoriteCities } from '../utils';

export const useStore = defineStore('store', {
  state: () => ({
    cityQuery: '',
    favoriteCities: getFavoriteCities(),
    favoriteCitiesData: {},
  }),
  actions: {
    setCityQuery(cityQuery) {
      this.cityQuery = cityQuery;
    },
    addFavoriteCity(city) {
      if (!this.favoriteCities.includes(city)) {
        this.favoriteCities.push(city);
      }
    },
    removeFavoriteCity(city) {
      this.favoriteCities = this.favoriteCities.filter((c) => c !== city);
    },
  },
  getters: {},
});
