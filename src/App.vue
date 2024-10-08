<template>

  <div id="app">
    <nav v-if="isLogin" class="text-xs sm:text-base font-bold flex  justify-around items-center py-4 border-[#010859]">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/contrato">Cadastro de Contrato</router-link>
      <router-link to="/servico">Cadastro de Serviço</router-link>
      <button @click="logout">Sair</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated');
      this.$router.push({ path: '/' });
      window.location.reload();
    },
  },
  computed: {
    isLogin() {
      return localStorage.getItem('isAuthenticated') == 'true'; 
    }
  },
};
</script>

<style scoped>
nav {
  background-color: #02264B;
  padding: 10px;
}
nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
button {
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
