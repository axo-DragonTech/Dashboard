<template>
  <div id="app">
    <nav>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/contrato">Cadastro de Contrato</router-link>
      <router-link to="/servico">Cadastro de Área de atuação</router-link>
    </nav>
    <router-view @add-contract="addContract" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    addContract(contract) {
      // Emitindo o evento para o dashboard
      this.$router.push({ path: '/' });
      this.$emit('add-contract', contract);
    },
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
