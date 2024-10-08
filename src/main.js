import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import CadastroContrato from './components/CadastroContrato.vue';
import CadastroServico from './components/CadastroServico.vue';

// Definindo as rotas
const routes = [
  { path: '/', component: Dashboard },
  { path: '/contrato', component: CadastroContrato },
  { path: '/servico', component: CadastroServico },
];

// Criando o router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Criando a instância do Vue
createApp(App)
  .use(router)
  .mount('#app');
