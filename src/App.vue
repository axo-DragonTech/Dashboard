<template>
  <LoginDashboard/>
</template>

<script>
import LoginDashboard from './components/LoginDashboard.vue';

export default {
  name: 'App',
  components: {
    LoginDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
