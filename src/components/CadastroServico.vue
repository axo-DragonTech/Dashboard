<template>
  <div class="bg-[#020225] flex items-center justify-center h-screen">
    <div class="bg-white rounded-lg px-8 pb-12 w-4/6 sm:w-2/4">
      <h1 class="text-4 mt-6 font-bold mb-4 text-center md:text-xl lg:text-2xl lg:pb-4">Cadastro de Tipos de Serviço</h1>
      <form @submit.prevent="submitService" class="flex flex-col items-center">
        <div class="mb-4 flex flex-col items-center lg:pb-4">
          <label class="block text-gray-700 text-center text-sm md:text-base lg:text-xl">Nome do Serviço</label>
          <input type="text" v-model="serviceName" required class="w-[60vw] p-2 border border-gray-300 rounded sm:w-64 md:w-[40vw]" />
        </div>
        <div class="mb-4 flex flex-col items-center lg:pb-4">
          <label class="block text-gray-700 text-center text-sm md:text-base lg:text-xl">Área de Atuação</label>
          <select v-model="serviceArea" required class="w-[60vw] p-2 border border-gray-300 rounded text-sm sm:w-64 md:text-base md:w-[40vw] lg:text-xl">
            <option value="" disabled>Selecione uma área</option>
            <option value="Imobiliária">Imobiliária</option>
            <option value="Empresarial">Empresarial</option>
            <option value="Contratos">Contratos</option>
            <option value="Esportes">Esportes</option>
            <option value="Contencioso">Contencioso</option>
            <option value="Família">Família</option>
          </select>
        </div>
        <div class="mb-4 flex flex-col items-center lg:pb-4">
          <label class="block text-gray-700 text-center md:text-base lg:text-xl">Valor Estimado</label>
          <input type="number" v-model="serviceValue" required class="w-[60vw] p-2 border border-gray-300 rounded sm:w-64 md:w-[40vw]" />
        </div>
        <button type="submit" class="bg-green-500 text-white p-2 px-4 border-none rounded cursor-pointer mr-1.5 hover:bg-[#45a049] lg:text-xl">{{ isEditing ? 'Atualizar Serviço' : 'Cadastrar Serviço' }}</button>
      </form>

      <!-- <h2 class="text-xl font-bold mt-8">Serviços Cadastrados</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="border px-4 py-2">Nome</th>
            <th class="border px-4 py-2">Área de Atuação</th>
            <th class="border px-4 py-2">Valor Estimado</th>
            <th class="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.id">
            <td class="border px-4 py-2">{{ service.name }}</td>
            <td class="border px-4 py-2">{{ service.area }}</td>
            <td class="border px-4 py-2">{{ service.value }}</td>
            <td class="border px-4 py-2">
              <button @click="editService(service)" class="btn">Editar</button>
              <button @click="deleteService(service.id)" class="btn">Remover</button>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceName: '',
      serviceDescription: '',
      serviceArea: '',
      serviceValue: '',
      services: [],
      isEditing: false,
      editingServiceId: null,
    };
  },
  methods: {
    submitService() {
      if (this.isEditing) {
        const index = this.services.findIndex(service => service.id === this.editingServiceId);
        this.services[index] = {
          ...this.services[index],
          name: this.serviceName,
          description: this.serviceDescription,
          area: this.serviceArea,
          value: this.serviceValue,
        };
      } else {
        const newService = {
          id: Date.now(),
          name: this.serviceName,
          description: this.serviceDescription,
          area: this.serviceArea,
          value: this.serviceValue,
        };
        this.services.push(newService);
      }
      this.resetForm();
    },
    resetForm() {
      this.serviceName = '';
      this.serviceDescription = '';
      this.serviceArea = '';
      this.serviceValue = '';
      this.isEditing = false;
      this.editingServiceId = null;
    },
    editService(service) {
      this.serviceName = service.name;
      this.serviceArea = service.area;
      this.serviceValue = service.value;
      this.isEditing = true;
      this.editingServiceId = service.id;
    },
    deleteService(id) {
      this.services = this.services.filter(service => service.id !== id);
    },
  },
};
</script>

<style scoped>

</style>
