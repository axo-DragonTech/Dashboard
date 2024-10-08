import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/Dashboard.vue';
import CadastroContrato from '../components/CadastroContrato.vue';
import CadastroServico from '../components/CadastroServico.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/contrato',
    name: 'CadastroContrato',
    component: CadastroContrato
  },
  {
    path: '/servico',
    name: 'CadastroServico',
    component: CadastroServico
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
