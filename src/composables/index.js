import { ref, watchEffect, toValue } from 'vue';
/* import cities from '../assets/cities.json'; */

export const useCityAutocomplete = (searchCityStringRef) => {
  const matchedCities = ref([]);
  const loading = ref(false);
  const error = ref(false);

  watchEffect(() => {
    const searchCityString = toValue(searchCityStringRef);
    matchedCities.value = [];
    error.value = false;

    if (searchCityString && searchCityString.length >= 3) {
      loading.value = true;
      const cityToFind = searchCityString.toLowerCase();

      /* for (const city of cities) {
        if (city.toLowerCase().includes(cityToFind)) {
          matchedCities.value.push(city);
          if (matchedCities.value.length === 5) {
            break;
          }
        }
      }
      if (matchedCities.value.length === 0) {
        matchedCities.value.push(toValue(searchCityString));
      }
      loading.value = false; */

      fetch(
        'https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=city&term=' +
          cityToFind
      )
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            matchedCities.value = data.slice(0, 5).map((city) => city.name);
            if (
              !matchedCities.value
                .map((city) => city.toLowerCase())
                .includes(cityToFind)
            ) {
              matchedCities.value = matchedCities.value.slice(0, 4);
              matchedCities.value.push(searchCityString);
            }
            loading.value = false;
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          loading.value = false;
          error.value = true;
        });
    }
  });

  return { matchedCities, loading, error };
};
