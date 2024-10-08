<template>
  <div class="bg-[#020225] w-full h-full lg:h-screen flex flex-col items-center">
    <div class="lg:flex-row flex flex-col lg:gap-20 lg:justify-center items-center w-full">
      <!-- Seção Faturamento -->
      <div class="bg-[#02264B] text-white w-3/4 lg:w-1/4 h-2/3 rounded-xl p-8 flex items-center justify-center gap-8 mt-12 lg:mr-6">
        <div>
          <h3 class="lg:text-2xl md:text-xl text-lg my-8">Faturamento</h3>
          <p class="lg:text-4xl md:text-2xl text-xl my-8">R$1.424,12</p>
          <p class="lg:text-2xl md:text-xl text-lg my-8"><span class="text-green-500">▲15%</span> vs. ano anterior</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-2/12" viewBox="0 0 18 18" fill="none">
          <path d="M9 18C6.48333 18 4.354 17.6123 2.612 16.837C0.870667 16.0623 0 15.1167 0 14V4C0 2.9 0.879333 1.95833 2.638 1.175C4.396 0.391667 6.51667 0 9 0C11.4833 0 13.6043 0.391667 15.363 1.175C17.121 1.95833 18 2.9 18 4V14C18 15.1167 17.129 16.0623 15.387 16.837C13.6457 17.6123 11.5167 18 9 18ZM9 6.025C10.4833 6.025 11.975 5.81233 13.475 5.387C14.975 4.96233 15.8167 4.50833 16 4.025C15.8167 3.54167 14.9793 3.08333 13.488 2.65C11.996 2.21667 10.5 2 9 2C7.48333 2 5.996 2.21233 4.538 2.637C3.07933 3.06233 2.23333 3.525 2 4.025C2.23333 4.525 3.07933 4.98333 4.538 5.4C5.996 5.81667 7.48333 6.025 9 6.025ZM9 11C9.7 11 10.375 10.9667 11.025 10.9C11.675 10.8333 12.296 10.7373 12.888 10.612C13.4793 10.4873 14.0373 10.3333 14.562 10.15C15.0873 9.96667 15.5667 9.75833 16 9.525V6.525C15.5667 6.75833 15.0873 6.96667 14.562 7.15C14.0373 7.33333 13.4793 7.48733 12.888 7.612C12.296 7.73733 11.675 7.83333 11.025 7.9C10.375 7.96667 9.7 8 9 8C8.3 8 7.61667 7.96667 6.95 7.9C6.28333 7.83333 5.654 7.73733 5.062 7.612C4.47067 7.48733 3.91667 7.33333 3.4 7.15C2.88333 6.96667 2.41667 6.75833 2 6.525V9.525C2.41667 9.75833 2.88333 9.96667 3.4 10.15C3.91667 10.3333 4.47067 10.4873 5.062 10.612C5.654 10.7373 6.28333 10.8333 6.95 10.9C7.61667 10.9667 8.3 11 9 11ZM9 16C9.76667 16 10.546 15.9417 11.338 15.825C12.1293 15.7083 12.8583 15.554 13.525 15.362C14.1917 15.1707 14.75 14.954 15.2 14.712C15.65 14.4707 15.9167 14.225 16 13.975V11.525C15.5667 11.7583 15.0873 11.9667 14.562 12.15C14.0373 12.3333 13.4793 12.4873 12.888 12.612C12.296 12.7373 11.675 12.8333 11.025 12.9C10.375 12.9667 9.7 13 9 13C8.3 13 7.61667 12.9667 6.95 12.9C6.28333 12.8333 5.654 12.7373 5.062 12.612C4.47067 12.4873 3.91667 12.3333 3.4 12.15C2.88333 11.9667 2.41667 11.7583 2 11.525V14C2.08333 14.25 2.34567 14.4917 2.787 14.725C3.229 14.9583 3.78333 15.1707 4.45 15.362C5.11667 15.554 5.85 15.7083 6.65 15.825C7.45 15.9417 8.23333 16 9 16Z" fill="white"/>
        </svg>
      </div>
      <!-- Seção Clientes -->
      <div class="bg-[#02264B] text-white w-3/4 lg:w-1/4 h-2/3 rounded-xl p-8 flex justify-center items-center gap-8 mt-12 lg:mr-6">
        <div>
          <h3 class="lg:text-xl md:text-xl text-lg my-8">Clientes</h3>
          <p class="lg:text-4xl md:text-2xl text-xl my-8">1.236</p>
          <p class="lg:text-xl md:text-xl text-lg my-8"><span class="text-green-500">+17%</span> vs. ano anterior</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-2/12" viewBox="0 0 20 18" fill="none">
          <path d="M2.5 0V16H18.5V18H0.5V0H2.5ZM17.793 3.293L19.207 4.707L13.5 10.414L10.5 7.415L6.207 11.707L4.793 10.293L10.5 4.586L13.5 7.585L17.793 3.293Z" fill="#0093CD"/>
        </svg>
      </div>
      <!-- Gráfico de Distribuição de Necessidade de Advogados em São Paulo -->
      <div class="mt-24">
        <canvas ref="lawyerChart" class="bg-[#02264B] p-4 lg:px-10 rounded-2xl w-10/12 lg:w-full"></canvas>
      </div>
    </div>
    <div class="lg:flex-row flex flex-col lg:justify-center lg:gap-20 items-center w-full">
      <!-- Seção Pedidos -->
      <div class="text-white bg-[#02264B] rounded-lg mt-12 w-11/12 md:w-3/4 lg:w-2/4 p-4 shadow-lg lg:m-0 font-semibold">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold font-segoe text-2xl">Pedidos</h2>
        </div>
        <table class="min-w-full text-left text-sm">
          <thead>
            <tr class="text-gray-400 md:text-xl">
              <th class="md:p-2">Pedido</th>
              <th class="md:p-2 px-4">Cliente</th>
              <th class="md:p-2 px-4">Área</th>
              <th class="pl-4 md:px-4 py-2">Data Início</th>
            </tr>
          </thead>
          <tbody class="bg-[#02264B] text-sm md:text-lg">
            <tr v-for="contrato in contratos" :key="contrato.id" :class="[contrato.id % 2 === 0 ? 'bg-[#02264B] text-white hover:bg-[#1d3e63]' : 'bg-white text-black hover:bg-[#cbcbcb]']">
              <td class="md:px-6 py-3">#{{ contrato.id }}</td>
              <td class="px-4 py-3">{{ contrato.cliente }}</td>
              <td class="md:px-3 py-3">{{ contrato.area }}</td>
              <td class="px-4 py-3">{{ formatarData(contrato.dataInicio) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Gráfico de Demanda por Área de Atuação Jurídica -->
      <div class="mt-24 lg:w-1/3 mb-12 lg:mb-0">
        <canvas ref="areaChart" class="bg-[#02264B] w-1/8 rounded-xl"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);

  export default {
    name: 'DashboardPage',
    data() {
      return {
        contratos: [],
        areaData: {},
      };
    },
    mounted() {
      this.carregarContratos();
      this.renderLawyerChart();
      this.renderAreaChart();
    },
    methods: {
      carregarContratos() {
        const contratoSalvo = JSON.parse(localStorage.getItem('contratos')) || [];
        this.contratos = contratoSalvo;
      },
      formatarData(data) {
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      },
      renderLawyerChart() {
        const ctx = this.$refs.lawyerChart.getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55-64', 'Acima de 65'],
            datasets: [{
              label: 'Distribuição de Necessidade de Advogados',
              data: [8, 22, 25, 20, 15, 10], 
              backgroundColor: ['#191970', '#6495ED', '#191970', '#007AFF', '#87CEEB', '#010129'],
            }]
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'left',
                labels: {
                  color: '#ffffff',
                  usePointStyle: true,
                  padding: 25
                }
              },
              title: {
                display: true,
                text: 'Distribuição de Necessidade de Advogados em São Paulo',
                color: '#ffffff',
                font: {
                  size: 18,
                }
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    const data = tooltipItem.dataset.data;
                    const total = data.reduce((a, b) => a + b, 0);
                    const value = data[tooltipItem.dataIndex];
                    const percentage = ((value / total) * 100).toFixed(2); // Calcula a porcentagem
                    return `${tooltipItem.label}: ${percentage}%`;
                  }
                }
              }
            }
          }
        });
      },
      renderAreaChart() {
        const ctx = this.$refs.areaChart.getContext('2d');
        const servicosSalvos = JSON.parse(localStorage.getItem('servicos')) || {};
        
        
        Object.keys(servicosSalvos).forEach(area => {
          const quantidade = servicosSalvos[area].length;
          this.areaData[area] = quantidade;
        });

        const labels = Object.keys(this.areaData);
        const data = Object.values(this.areaData);

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Demanda por Área de Atuação Jurídica',
              data: data,
              backgroundColor: '#FFFFFF',
            }]
          },
          options: {
            responsive: true,
            indexAxis:'y',
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#ffffff'
                }
              },
              title: {
                display: true,
                text: 'Demanda por Área de Atuação Jurídica',
                color: '#ffffff',
                font: {
                  size: 18,
                }
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return `Área: ${tooltipItem.label}, Demandas: ${tooltipItem.raw}`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: '#ffffff'
                },
                ticks: {
                  color: '#ffffff'
                }
              },
              x: {
                ticks: {
                  color: '#ffffff'
                }
              }
            }
          }
        });
      }
    }
  };
</script>

<style scoped>
  * {
    font-family: 'Segoe', sans-serif;
  }
</style>
