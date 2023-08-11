export const FAVORITE_CITIES_PARAM = 'favorite_cities';

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
