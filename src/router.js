// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RegistrationPage from './views/sign.vue';
import TheSettings from './views/TheSettings.vue';
import TheProfile from './views/TheProfile.vue';
const routes = [
  { path: '/', component: HomePage },
  { path: '/sign', component: RegistrationPage },
  {path : '/TheSettings', component : TheSettings},
  {path : '/TheProfile', component : TheProfile}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
