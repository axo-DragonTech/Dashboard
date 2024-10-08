<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">Cadastro de Contratos</h1>
      <form @submit.prevent="submitContract">
        <div class="mb-4">
          <label class="block text-gray-700">Nome do Cliente</label>
          <input type="text" v-model="clientName" required class="input" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Área de atuação</label>
          <select v-model="selectedService" required class="input">
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Valor do Contrato</label>
          <input type="number" v-model="contractValue" required class="input" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Data de Início</label>
          <input type="date" v-model="startDate" required class="input" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Data de Término</label>
          <input type="date" v-model="endDate" required class="input" />
        </div>
        <button type="submit" class="btn">{{ isEditing ? 'Atualizar Contrato' : 'Cadastrar Contrato' }}</button>
      </form>
  
      <h2 class="text-xl font-bold mt-8">Contratos Cadastrados</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="border px-4 py-2">Cliente</th>
            <th class="border px-4 py-2">Área de Atuação</th>
            <th class="border px-4 py-2">Valor</th>
            <th class="border px-4 py-2">Data de Início</th>
            <th class="border px-4 py-2">Data de Término</th>
            <th class="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contract in contracts" :key="contract.id">
            <td class="border px-4 py-2">{{ contract.client }}</td>
            <td class="border px-4 py-2">{{ contract.service }}</td>
            <td class="border px-4 py-2">{{ contract.value }}</td>
            <td class="border px-4 py-2">{{ contract.startDate }}</td>
            <td class="border px-4 py-2">{{ contract.endDate }}</td>
            <td class="border px-4 py-2">
              <button @click="editContract(contract)" class="btn">Editar</button>
              <button @click="deleteContract(contract.id)" class="btn">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        clientName: '',
        selectedService: null,
        contractValue: '',
        startDate: '',
        endDate: '',
        contracts: [],
        services: ["Imobiliária", "Empresarial", "Contratos", "Esportes", "Contencioso", "Família"], 
        isEditing: false,
        editingContractId: null,
      };
    },
    methods: {
      submitContract() {
        if (this.isEditing) {
          const index = this.contracts.findIndex(contract => contract.id === this.editingContractId);
          this.contracts[index] = {
            ...this.contracts[index],
            client: this.clientName,
            service: this.selectedService,
            value: this.contractValue,
            startDate: this.startDate,
            endDate: this.endDate,
          };
        } else {
          const newContract = {
            id: Date.now(),
            client: this.clientName,
            service: this.selectedService,
            value: this.contractValue,
            startDate: this.startDate,
            endDate: this.endDate,
          };
          this.contracts.push(newContract);
        }
        this.resetForm();
      },
      resetForm() {
        this.clientName = '';
        this.selectedService = null;
        this.contractValue = '';
        this.startDate = '';
        this.endDate = '';
        this.isEditing = false;
        this.editingContractId = null;
      },
      editContract(contract) {
        this.clientName = contract.client;
        this.selectedService = contract.service;
        this.contractValue = contract.value;
        this.startDate = contract.startDate;
        this.endDate = contract.endDate;
        this.isEditing = true;
        this.editingContractId = contract.id;
      },
      deleteContract(id) {
        this.contracts = this.contracts.filter(contract => contract.id !== id);
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
  