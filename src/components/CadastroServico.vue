<template>
  <div class="bg-[#020225] flex items-center justify-center h-screen">
    <div class="bg-white rounded-lg px-8 pb-12 w-4/6 sm:w-2/4">
      <h1 class="text-4 mt-6 font-bold mb-4 text-center md:text-xl lg:text-2xl lg:pb-4">Cadastro de Área de Atuação</h1>
      <form @submit.prevent="submitService" class="flex flex-col items-center">
        <div class="mb-4 flex flex-col lg:pb-4">
          <label class="block text-gray-700 text-sm md:text-base lg:text-xl">Nome do Cliente</label>
          <input type="text" v-model="nomeCliente" required class="w-[60vw] p-2 border border-gray-300 rounded sm:w-64 md:w-[40vw]" />
        </div>
        <div class="mb-4 flex flex-col lg:pb-4">
          <label class="block text-gray-700 text-sm md:text-base lg:text-xl">Área de Atuação</label>
          <select v-model="areaAtuacao" required class="w-[60vw] p-2 border border-gray-300 rounded text-sm sm:w-64 md:text-base md:w-[40vw] lg:text-xl">
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
          </select>
        </div>
        <div class="mb-4 flex flex-col lg:pb-4">
          <label class="block text-gray-700 md:text-base lg:text-xl">Descrição sobre seu problema</label>
          <textarea v-model="descricaoProblema" required class="w-[60vw] p-2 border border-gray-300 rounded sm:w-64 md:w-[40vw]"></textarea>
        </div>
        <button type="submit" class="bg-green-500 text-white p-2 px-4 border-none rounded cursor-pointer mr-1.5 hover:bg-[#45a049] lg:text-xl">{{ isEditing ? 'Atualizar Serviço' : 'Cadastrar Serviço' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeCliente: '',
      areaAtuacao: null,
      descricaoProblema: '',
      services: ["Imobiliária", "Empresarial", "Contratos", "Esportes", "Contencioso", "Família"], 
    };
  },
  methods: {
    submitService() {
      // Recupera a lista de serviços de localStorage
      const servicoSalvo = JSON.parse(localStorage.getItem('servicos')) || {};

      // Verifica se a área já existe, se não, inicializa
      if (!servicoSalvo[this.areaAtuacao]) {
        servicoSalvo[this.areaAtuacao] = [];
      }

      // Cria um novo serviço
      const novoServico = {
        id: this.getNextId(servicoSalvo[this.areaAtuacao]),
        cliente: this.nomeCliente,
        areaGrafico: this.areaAtuacao,
        descricao: this.descricaoProblema,
      };

      // Adiciona o novo serviço na respectiva área
      servicoSalvo[this.areaAtuacao].push(novoServico);

      // Atualiza o localStorage
      localStorage.setItem('servicos', JSON.stringify(servicoSalvo));
      this.resetForm();
    },
    getNextId(services) {
      if (services.length === 0) return 1;
      return services[services.length - 1].id + 1;
    },
    resetForm() {
      this.nomeCliente = '';
      this.areaAtuacao = null;
      this.descricaoProblema = '';
    }
  },
};
</script>

<style scoped>
</style>
