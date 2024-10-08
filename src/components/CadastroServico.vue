<template>
  <div class="bg-[#020225] w-full h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg px-12 pb-12">
      <h1 class="text-2xl mt-6 font-bold mb-4">Cadastro de Tipos de Serviço</h1>
      <form @submit.prevent="submitService">
        <div class="mb-4">
          <label class="block text-gray-700">Nome do Serviço</label>
          <input type="text" v-model="serviceName" required class="input" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Área de Atuação</label>
          <select v-model="serviceArea" required class="input">
            <option value="" disabled>Selecione uma área</option>
            <option value="Imobiliária">Imobiliária</option>
            <option value="Empresarial">Empresarial</option>
            <option value="Contratos">Contratos</option>
            <option value="Esportes">Esportes</option>
            <option value="Contencioso">Contencioso</option>
            <option value="Família">Família</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Valor Estimado</label>
          <input type="number" v-model="serviceValue" required class="input" />
        </div>
        <button type="submit" class="btn">{{ isEditing ? 'Atualizar Serviço' : 'Cadastrar Serviço' }}</button>
      </form>

      <h2 class="text-xl font-bold mt-8">Serviços Cadastrados</h2>
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
      </table>
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
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 6px;
}

.btn:hover {
  background-color: #45a049;
}
</style>
