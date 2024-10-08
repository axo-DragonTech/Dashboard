<template>
  <div class="bg-[#020225]">
   
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
            <th class="px-4 py-2">Data Início</th>
          </tr>
        </thead>
        <tbody class="bg-[#02264B] divide-y divide-gray-700 text-lg">
          <tr class="hover:bg-[#E8E8E8] bg-white text-black">
            <td class="px-4 py-3">#1532</td>
            <td class="px-4 py-3">Ana Souza</td>
            <td class="px-4 py-3">Set 29, 2024</td>

          </tr>
          <tr class="hover:bg-[#083366]">
              <td class="px-4 py-3">#1531</td>
              <td class="px-4 py-3">Lucas Silva</td>
              <td class="px-4 py-3">Set 20, 2024</td>
            </tr>
            <tr class="hover:bg-[#E8E8E8] bg-white text-black">
              <td class="px-4 py-3">#1530</td>
              <td class="px-4 py-3">Juliana Costa</td>
              <td class="px-4 py-3">Ago 14, 2024</td>
            </tr>
            <tr class="hover:bg-[#083366]">
              <td class="px-4 py-3">#1529</td>
              <td class="px-4 py-3">Fernanda Pereira</td>
              <td class="px-4 py-3">Jul 10, 2024</td>
            </tr>
            <tr class="hover:bg-[#E8E8E8] bg-white text-black">
              <td class="px-4 py-3">#1528</td>
              <td class="px-4 py-3">Carlos Almeida</td>
              <td class="px-4 py-3">Jun 24, 2024</td>
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
export default {
  name: 'DashboardPage',
}
</script>

<style scoped>
* {
  font-family: 'Segoe', sans-serif;
}
</style>
