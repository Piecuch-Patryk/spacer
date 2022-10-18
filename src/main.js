import { createApp } from 'vue';
import { VueMasonryPlugin } from 'vue-masonry';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(VueMasonryPlugin).mount('#app');
