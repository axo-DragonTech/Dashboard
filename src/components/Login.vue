<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="email">Email</label>
            <input v-model="email" type="email" id="email" required class="w-full p-2 border rounded focus:outline-none" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="password">Senha</label>
            <input v-model="password" type="password" id="password" required class="w-full p-2 border rounded focus:outline-none" />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Entrar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.email === 'admin@advocacia.com' && this.password === '123456') {
          localStorage.setItem('auth', 'true');
          this.$router.push('/dashboard');
        } else {
          alert('Credenciais inválidas');
        }
      }
    }
  }
  </script>
  