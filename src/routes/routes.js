import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/Dashboard.vue';
import CadastroContrato from '../components/CadastroContrato.vue';
import CadastroServico from '../components/CadastroServico.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login' // Redireciona para a página de login ao acessar a raiz
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true } // Protege o dashboard
  },
  {
    path: '/contrato',
    name: 'CadastroContrato',
    component: CadastroContrato,
    meta: { requiresAuth: true } // Protege esta rota
  },
  {
    path: '/servico',
    name: 'CadastroServico',
    component: CadastroServico,
    meta: { requiresAuth: true } // Protege esta rota
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

// Guard de navegação para verificar se o usuário está autenticado
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica se há um token de login
  console.log("Verificando autenticação. Token presente:", isAuthenticated); // Debug para verificar se o token está presente

  // Se a rota requer autenticação e o usuário não está autenticado
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      console.log("Usuário não autenticado. Redirecionando para login.");
      next({ name: 'Login' }); // Redireciona para o login
    } else {
      console.log("Usuário autenticado. Permitindo acesso.");
      next(); // Usuário autenticado, permitir acesso à rota
    }
  } else {
    // Se a rota não requer autenticação
    if (to.name === 'Login' && isAuthenticated) {
      // Se o usuário já está autenticado e tenta acessar o login, redireciona para o dashboard
      console.log("Usuário autenticado tentando acessar login. Redirecionando para Dashboard.");
      next({ name: 'dashboard' });
    } else {
      next(); // Continua para a rota
    }
  }
});

export default router;
