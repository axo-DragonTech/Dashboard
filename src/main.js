import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'
import router from './routes/routes';


// Criando a instância do Vue
createApp(App)
  .use(router)
  .mount('#app');
