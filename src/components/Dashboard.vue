<template>
    <div class="bg-[#020225]">
      <!-- Seção Faturamento ao longo do tempo -->
      <div>
        <h1>Faturamento ao longo do tempo</h1>
      </div>
      <!-- Seção Pedidos -->
      <div class="mt-12 text-white bg-[#02264B] rounded-lg w-3/4 p-4 shadow-lg font-semibold">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold font-segoe text-2xl">Pedidos</h2>
          <div class="flex items-center bg-[#081D40] px-4 py-2 rounded-md text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
              <rect x="0.72876" y="2.21973" width="9.06956" height="9.12111" rx="1" stroke="white" stroke-width="0.8"/>
              <path d="M0.72876 5.26807H9.79832V10.3402C9.79832 10.8925 9.35061 11.3402 8.79832 11.3402H1.72876C1.17648 11.3402 0.72876 10.8925 0.72876 10.3402V5.26807Z" fill="white" stroke="white" stroke-width="0.8"/>
              <path d="M7.77954 1.34082V2.99451" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.8186 1.34082V2.99451" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Jan 2024</span>
          </div>
        </div>
        <table class="min-w-full text-left text-sm">
          <thead>
            <tr class="text-gray-400 text-xl">
              <th class="p-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none" class="w-6">
                <path d="M0.673981 8.74211C0.673981 7.21035 1.91572 5.96861 3.44747 5.96861H6.55253C8.08428 5.96861 9.32602 7.21035 9.32602 8.74211V8.74211C9.32602 9.25269 8.91211 9.66661 8.40152 9.66661H1.59848C1.08789 9.66661 0.673981 9.25269 0.673981 8.74211V8.74211Z" fill="white"/>
                <path d="M5.00164 5.26403C6.36321 5.26403 7.46697 4.16027 7.46697 2.7987C7.46697 1.43714 6.36321 0.333374 5.00164 0.333374C3.64008 0.333374 2.53632 1.43714 2.53632 2.7987C2.53632 4.16027 3.64008 5.26403 5.00164 5.26403Z" fill="white"/>
                </svg>Pedido 
              </th>
              <th class="px-4 py-2">Cliente</th>
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
    </div>
</template>
  
<script>  
  export default {
    name: 'DashboardPage',
    
  };
</script>

<style scoped>
  *{
    font-family: 'Segoe', sans-serif;
  }
</style>
  