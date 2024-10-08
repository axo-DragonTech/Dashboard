<template>
  <div id="app">
    <CadastroContrato />
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <CadastroServico  />
    <Dashboard/>
  </div>
</template>

<script>
import CadastroContrato from './components/CadastroContrato.vue';
import CadastroServico from './components/CadastroServico.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    CadastroContrato, 
    CadastroServico,
    Dashboard
  }
}
</script>

<style scoped>
</style>
