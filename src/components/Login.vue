<template>
  <div class="h-screen flex flex-col items-center lg:flex-row justify-evenly bg-[#020225]">
    <div class="absolute w-[382px] h-[351px] bg-[#0A0154] rounded-full blur-[150px] top-0 right-4"></div>
    <div class="absolute w-[382px] h-[351px] bg-[#0A0154] rounded-full blur-[150px] bottom-0 left-1/3"></div>
    <div class="w-screen h-[50vh] flex items-center justify-center lg:w-[50vw] lg:h-screen z-30">
      <img src="../assets/advogado.svg" alt="" class="w-80 md:w-96 lg:w-7/12">
    </div>
    <div class="w-screen h-[60vh] flex items-center justify-center lg:w-[50vw] lg:h-screen z-30">
      <form @submit.prevent="handleSubmit" class="w-11/12 h-[95%] flex flex-col items-center bg-white p-6 rounded-2xl gap-2 mb-8 md:w-9/12 lg:w-3/5 lg:h-3/5 lg:p-10 lg:gap-4">
        <h1 class="text-[#00224d] font-extrabold text-4xl">Login</h1>
        <div class="flex flex-col gap-1.5 w-8/12 lg:gap-4 lg:justify-around">
          <div class="flex flex-col justify-center my-2.5">
            <label for="email" class="text-black text-xl">E-mail</label>
            <input type="text" v-model="email" class="w-full border-none rounded-lg p-4 bg-[#c9c9c9] text-black text-base outline-none box-border" id="email" name="email" placeholder="Digite seu email">
            <p v-if="emailError" class="error">{{ emailError }}</p>
          </div>
          <div class="flex flex-col justify-center my-2.5">
            <label for="senha" class="text-black text-xl">Senha</label>
            <input type="password" v-model="senha" class="w-full border-none rounded-lg p-4 bg-[#c9c9c9] text-black text-base outline-none box-border" id="senha" name="senha" placeholder="Digite sua senha">
            <p v-if="senhaError" class="error">{{ senhaError }}</p>
          </div>  
        </div>
        <button type="submit" class="w-1/2 p-4 m-4 mt-0 border-none rounded-xl outline-none font-extrabold tracking-wide text-white text-base bg-[#00224d] cursor-pointer md:1/2 lg:w-1/2 lg:text-lg lg:m-6">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LoginDashboard',
  setup() {
    const email = ref('');
    const senha = ref('');
    const emailError = ref('');
    const senhaError = ref('');

    const validaEmail = () => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValue = email.value.trim();

      if (emailValue === "") {
        emailError.value = 'O email é obrigatório.';
        return false;
      } else if (!emailPattern.test(emailValue)) {
        emailError.value = 'O email digitado não é válido.';
        return false;
      } else {
        emailError.value = '';
        return true;
      }
    };

    const validaSenha = () => {
      const senhaValue = senha.value.trim();

      if (senhaValue === "") {
        senhaError.value = 'A senha é obrigatória.';
        return false;
      } else if (senhaValue.length < 6) {
        senhaError.value = 'A senha digitada não é válida.';
        return false;
      } else {
        senhaError.value = '';
        return true;
      }
    };

    const handleSubmit = () => {
      const isValidEmail = validaEmail();
      const isValidSenha = validaSenha();
      
      if (isValidEmail && isValidSenha) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = '/dashboard';
      }
    };


    return {
      email,
      senha,
      emailError,
      senhaError,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
