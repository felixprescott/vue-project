import './assets/base.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './views/HomePage.vue';
import CityPage from './views/CityPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/:cityName', component: CityPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');
