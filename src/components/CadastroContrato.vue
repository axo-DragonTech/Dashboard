<template>
  <div class="bg-[#020225] w-full h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg px-8 pb-8 sm:pb-12 w-4/6 sm:w-5/6 md:w-3/5">
      <h1 class="text-lg mt-6 font-bold mb-4 text-center sm:text-2xl md:text-3xl">Cadastro de Contrato</h1>
      <form @submit.prevent="submitContract" class="flex flex-col items-center">
        <div class="mb-4 flex flex-col">
          <label class="block text-gray-700 text-sm sm:text-xl pb-2">Nome do Cliente</label>
          <input type="text" v-model="nomeCliente" required class="w-[60vw] p-2 pb-1 border border-gray-300 rounded sm:w-[50vw]" />
        </div>
        <div class="mb-4 flex flex-col">
          <label class="block text-gray-700 text-sm sm:text-xl pb-2">Área de atuação</label>
          <select v-model="areaAtuacao" required class="w-[60vw] p-2 pb-1 border border-gray-300 rounded sm:w-[50vw]">
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
          </select>
        </div>
        <div class="mb-4 flex flex-col">
          <label class="block text-gray-700 text-sm sm:text-xl pb-2">Valor do Contrato</label>
          <input type="number" v-model="valorContrato" required class="w-[60vw] p-2 pb-1 border border-gray-300 rounded sm:w-[50vw]" />
        </div>
        <div class="mb-4 flex flex-col">
          <label class="block text-gray-700 text-sm sm:text-xl pb-2">Data de Início</label>
          <input type="date" v-model="dataIniciada" required class=" text-sm w-[60vw] p-2 pb-1 border border-gray-300 rounded sm:w-[50vw] sm:text-lg" />
        </div>
        <div class="mb-4 flex flex-col">
          <label class="block text-gray-700 text-sm sm:text-xl pb-2">Data de Término</label>
          <input type="date" v-model="dataTerminada" required class="text-sm w-[60vw] p-2 pb-1 border border-gray-300 rounded sm:w-[50vw] sm:text-lg" />
        </div>
        <button type="submit" class="bg-green-500 text-white text-sm p-2 mb-1 px-4 mt-2 border-none rounded cursor-pointer mr-1.5 hover:bg-[#45a049] md:text-xl">Cadastrar Contrato</button>
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
      valorContrato: '',
      dataIniciada: '',
      dataTerminada: '',
      services: ["Imobiliária", "Empresarial", "Contratos", "Esportes", "Contencioso", "Família"], 
    };
  },
  methods: {
    submitContract() {
      const contratosSalvos = JSON.parse(localStorage.getItem('contratos')) || [];
      const novoContrato = {
        id: this.getNextId(contratosSalvos),
        cliente: this.nomeCliente,
        area: this.areaAtuacao,
        valor: this.valorContrato,
        dataInicio: this.dataIniciada,
        dataFim: this.dataTerminada,
      };

      contratosSalvos.push(novoContrato);
      localStorage.setItem('contratos', JSON.stringify(contratosSalvos));

      this.resetForm();
    },
    getNextId(contratos) {
      if (contratos.length === 0) return 1;
      return contratos[contratos.length - 1].id + 1;
    },
    resetForm() {
      this.nomeCliente = '';
      this.areaAtuacao = null;
      this.valorContrato = '';
      this.dataIniciada = '';
      this.dataTerminada = '';
    }
  },
};
</script>