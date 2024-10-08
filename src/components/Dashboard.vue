<template>
  <div class="bg-[#020225] w-full h-screen grid grid-cols-3">
    <!-- Gráfico de Distribuição de Necessidade de Advogados em São Paulo -->
    <div class="mt-12">
      <canvas ref="lawyerChart" class="bg-[#02264B] w-1/8"></canvas>
    </div>
    <!-- Gráfico de Demanda por Área de Atuação Jurídica -->
    <div>
      <div class="mt-12">
        <canvas ref="areaChart" class="bg-[#02264B] w-1/8"></canvas>
      </div>
      <!-- Seção Pedidos -->
      <div class="mt-12 text-white bg-[#02264B] rounded-lg w-full p-4 shadow-lg font-semibold">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold font-segoe text-2xl">Pedidos</h2>
        </div>
        <table class="min-w-full text-left text-sm">
          <thead>
            <tr class="text-gray-400 text-xl">
              <th class="p-2">Pedido</th>
              <th class="p-2 px-4">Cliente</th>
              <th class="p-2 px-4">Área</th>
              <th class="px-4 py-2">Data Início</th>
            </tr>
          </thead>
          <tbody class="bg-[#02264B] text-lg">
            <tr v-for="contrato in contratos" :key="contrato.id" :class="[contrato.id % 2 === 0 ? 'bg-[#02264B] text-white hover:bg-[#1d3e63]' : 'bg-white text-black hover:bg-[#cbcbcb]']">
              <td class="px-6 py-3">#{{ contrato.id }}</td>
              <td class="px-4 py-3">{{ contrato.cliente }}</td>
              <td class="px-3 py-3">{{ contrato.area }}</td>
              <td class="px-4 py-3">{{ formatarData(contrato.dataInicio) }}</td>
            </tr>
          </tbody>
        </table>
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
      areaData: {}, // Para armazenar a contagem de serviços por área
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
      
      // Contar a quantidade de serviços por área
      Object.keys(servicosSalvos).forEach(area => {
        const quantidade = servicosSalvos[area].length;
        this.areaData[area] = quantidade;
      });

      // Obter labels e dados para o gráfico
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
canvas {
  border-radius: 16px;
}
</style>
