import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/Dashboard.vue';
import CadastroContrato from '../components/CadastroContrato.vue';
import CadastroServico from '../components/CadastroServico.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true } 
  },
  {
    path: '/contrato',
    name: 'CadastroContrato',
    component: CadastroContrato,
    meta: { requiresAuth: true } 
  },
  {
    path: '/servico',
    name: 'CadastroServico',
    component: CadastroServico,
    meta: { requiresAuth: true } 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log("Verificando autenticação. Token presente:", isAuthenticated);


  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      console.log("Usuário não autenticado. Redirecionando para login.");
      next({ name: 'Login' });
    } else {
      console.log("Usuário autenticado. Permitindo acesso.");
      next();
    }
  } else {
    if (to.name === 'Login' && isAuthenticated) {
      console.log("Usuário autenticado tentando acessar login. Redirecionando para Dashboard.");
      next({ name: 'dashboard' });
    } else {
      next(); 
    }
  }
});

export default router;
