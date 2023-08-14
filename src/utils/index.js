import { FAVORITE_CITIES_PARAM } from '../constants';

export const getFavoriteCities = () => {
  const storageItem = localStorage.getItem(FAVORITE_CITIES_PARAM);
  const citiesArray = storageItem ? storageItem.split(',') : [];
  return citiesArray;
};

export const isCityFavorite = (city) => {
  const citiesList = getFavoriteCities();
  return citiesList.includes(city);
};

export const addFavoriteCity = (city) => {
  const citiesList = getFavoriteCities();
  citiesList.push(city);
  const newCitiesList = [...new Set(citiesList)];
  localStorage.setItem(FAVORITE_CITIES_PARAM, newCitiesList);
};

export const removeFavoriteCity = (city) => {
  const citiesList = getFavoriteCities();
  const newCitiesList = [...new Set(citiesList.filter((c) => c !== city))];
  localStorage.setItem(FAVORITE_CITIES_PARAM, newCitiesList);
};

import { API, API_KEY } from '../constants';
export const getDataForCity = async (cityName) => {
  const cityData = {
    icon: '',
    description: '',
    temp: '',
    pressure: '',
    dawn: '',
  };
  const response = await fetch(
    `${API}/weather?lang=ru&units=metric&q=${cityName}&appid=${API_KEY}`
  );
  const data = await response.json();

  cityData.icon = data?.weather?.[0]?.icon || '';

  const description = data?.weather?.[0]?.description || 'Нет данных о погоде';
  cityData.description =
    description.charAt(0).toUpperCase() + description.slice(1);

  const temp = parseInt(data?.main?.temp);
  cityData.temp = isNaN(temp) ? '--' : `${temp}°`;

  const pressure = parseFloat(data?.main?.pressure);
  cityData.pressure = isNaN(pressure)
    ? 'Нет данных о давлении'
    : `${Math.floor(pressure / 1.33322)} мм рт. ст.`;

  if (data?.sys?.sunset && data?.sys?.sunrise && data?.timezone) {
    const timezone = data.timezone || 0;
    const dawn = new Date(
      (cityData.icon.charAt(2) === 'd'
        ? data?.sys?.sunset + timezone
        : data?.sys?.sunrise + timezone) * 1000
    );
    const dawnTime = `
      ${dawn.getUTCHours() > 9 ? '' : '0'}${dawn.getUTCHours()}:
      ${dawn.getUTCMinutes() > 9 ? '' : '0'}${dawn.getUTCMinutes()}
    `;
    cityData.dawn = `${
      cityData.icon.charAt(2) === 'd' ? 'Закат' : 'Восход'
    } в ${dawnTime}`;
  } else {
    cityData.dawn = 'Нет данных о восходе и закате';
  }

  return cityData;
};
