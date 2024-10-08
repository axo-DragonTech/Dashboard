<template>
  <div class="bg-[#020225]">
    <!-- Seção Faturamento ao longo do tempo -->
    <div>
      <canvas ref="revenueChart" class="mt-4 bg-[#02264B]"></canvas>
    </div>
    
    <!-- Seção Pedidos -->
    <div class="mt-12 text-white bg-[#02264B] rounded-lg w-3/4 p-4 shadow-lg font-semibold">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-semibold font-segoe text-2xl">Pedidos</h2>
      </div>
      <table class="min-w-full text-left text-sm">
        <thead>
          <tr class="text-gray-400 text-xl">
            <th class="p-2">Pedido</th>
            <th class="p-2">Cliente</th>
            <th class="px-4 py-2">Data</th>
            <th class="px-4 py-2">Status Causa</th>
          </tr>
        </thead>
        <tbody class="bg-[#02264B] divide-y divide-gray-700 text-lg">
          <tr class="hover:bg-[#E8E8E8] bg-white text-black">
            <td class="px-4 py-3">#1532</td>
            <td class="px-4 py-3">Ana Souza</td>
            <td class="px-4 py-3">Set 29, 2024</td>
            <td class="px-4 py-3">
              <span class="relative inline-flex items-center px-3 py-1 rounded-md text-yellow-600 bg-yellow-200 border-yellow-500 border-2">
                <span class="absolute left-0 ml-2.5 h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                <span class="ml-4">Em andamento</span>
              </span>
            </td>
          </tr>
          <tr class="hover:bg-[#083366]">
              <td class="px-4 py-3">#1531</td>
              <td class="px-4 py-3">Lucas Silva</td>
              <td class="px-4 py-3">Set 20, 2024</td>
              <td class="px-4 py-3">
                <span class="relative inline-flex items-center px-3 py-1 rounded-md text-yellow-600 bg-yellow-200 border-yellow-500 border-2">
                  <span class="absolute left-0 ml-2.5 h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                  <span class="ml-4">Em andamento</span>
                </span>
              </td>
            </tr>
            <tr class="hover:bg-[#E8E8E8] bg-white text-black">
              <td class="px-4 py-3">#1530</td>
              <td class="px-4 py-3">Juliana Costa</td>
              <td class="px-4 py-3">Ago 14, 2024</td>
              <td class="px-4 py-3">
                <span class="relative inline-flex items-center px-3 py-1 rounded-md text-red-500 bg-red-200 border-red-400 border-2">
                  <span class="absolute left-0 ml-2.5 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  <span class="ml-4">Perdida</span>
                </span>
              </td>
            </tr>
            <tr class="hover:bg-[#083366]">
              <td class="px-4 py-3">#1529</td>
              <td class="px-4 py-3">Fernanda Pereira</td>
              <td class="px-4 py-3">Jul 10, 2024</td>
              <td class="px-4 py-3">
                <span class="relative inline-flex items-center px-3 py-1 rounded-md text-green-700 bg-green-200 border-green-500 border-2">
                  <span class="absolute left-0 ml-2.5 h-2.5 w-2.5 rounded-full bg-green-700"></span>
                  <span class="ml-4">Ganha</span>
                </span>
              </td>
            </tr>
            <tr class="hover:bg-[#E8E8E8] bg-white text-black">
              <td class="px-4 py-3">#1528</td>
              <td class="px-4 py-3">Carlos Almeida</td>
              <td class="px-4 py-3">Jun 24, 2024</td>
              <td class="px-4 py-3">
                <span class="relative inline-flex items-center px-3 py-1 rounded-md text-green-700 bg-green-200 border-green-400 border-2">
                  <span class="absolute left-0 ml-2.5 h-2.5 w-2.5 rounded-full bg-green-700"></span>
                  <span class="ml-4">Ganha</span>
                </span>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    <!-- Gráfico de Distribuição de Necessidade de Advogados em São Paulo -->
    <div class="mt-12">
      <canvas ref="lawyerChart" class="bg-[#02264B]"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'DashboardPage',
  mounted() {
    this.renderRevenueChart();
    this.renderLawyerChart();
  },
  methods: {
    renderRevenueChart() {
      const ctx = this.$refs.revenueChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
          datasets: [{
            label: 'Faturamento (R$)',
            data: [1500, 2000, 1800, 2200, 1700, 2100, 1850, 2000, 1900],
            backgroundColor: 'rgba(255, 255, 255)',
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Faturamento ao longo do tempo',
              color: '#ffffff',
              font: {
                size: 18,
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                color: '#ffffff'
              },
              ticks: {
                color: '#ffffff' 
              }
            },
            x: {
              title: {
                display: true,
                color: '#ffffff'
              },
              ticks: {
                color: '#ffffff'
              }
            }
          }
        }
      });
    },
    renderLawyerChart() {
  const ctx = this.$refs.lawyerChart.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', 'Acima de 64'],
      datasets: [{
        label: 'Distribuição de Necessidade de Advogados',
        data: [7, 15, 25, 30, 15, 8], // Dados ajustados
        backgroundColor: ['#0066FF', '#0099FF', '#33CCFF', '#6699CC', '#3366FF', '#6600FF'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            color: '#ffffff'
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
        // Tooltip para exibir valores em porcentagem
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
}

  }
};
</script>

<style scoped>
* {
  font-family: 'Segoe', sans-serif;
}

canvas{
  max-width: 75%;
  border-radius: 16px;
}
</style>
