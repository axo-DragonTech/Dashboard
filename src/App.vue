<template>

  <div id="app">
    <nav v-if="isLogin">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/contrato">Cadastro de Contrato</router-link>
      <router-link to="/servico">Cadastro de Serviço</router-link>
      <button @click="logout">sair</button>
    </nav>
    <router-view  />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push({ path: '/' });
      this.isAuthenticated = false
    },
  },
  computed: {
    isLogin() {
      return !!localStorage.getItem('token');
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
}
</style>