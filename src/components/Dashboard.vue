<template>
    <div class="bg-[#020225]">
      <div>
        <h1>Faturamento ao longo do tempo</h1>
      </div>
      <div class="mt-12 text-white bg-[#02264B] rounded-lg w-3/4 p-4 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Pedidos</h2>
          <div class="flex items-center bg-[#081D40] px-4 py-2 rounded-md text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m0 0h8m-8 0v4m0 0H3m12-4v4m5 0H3m5 0h8m-8 0v13h8m0 0V10m0 0v7m-8-7h5m0 0v7m0 0H8" />
            </svg>
            <span>Jan 2024</span>
          </div>
        </div>

      <table class="min-w-full text-left text-sm">
        <thead>
          <tr class="text-gray-400">
            <th class="px-4 py-2">Pedido</th>
            <th class="px-4 py-2">Cliente</th>
            <th class="px-4 py-2">Data</th>
            <th class="px-4 py-2">Status Causa</th>
            <th class="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-[#02264B] divide-y divide-gray-700">
          <tr class="hover:bg-[#E8E8E8] bg-white text-black">
            <td class="px-4 py-3">#1532</td>
            <td class="px-4 py-3">Ana Souza</td>
            <td class="px-4 py-3">Set 29, 2024</td>
            <td class="px-4 py-3">
              <span class="text-green-500 bg-green-100 px-2 py-1 rounded-md">Em andamento</span>
            </td>
            <td class="px-4 py-3">
              <button class="text-blue-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                </svg>
              </button>
              <button class="ml-2 text-red-400 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v1H8V7zM8 9h4v4H8V9z" clip-rule="evenodd" />
                </svg>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-[#083366]">
            <td class="px-4 py-3">#1531</td>
            <td class="px-4 py-3">Lucas Silva</td>
            <td class="px-4 py-3">Set 20, 2024</td>
            <td class="px-4 py-3">
              <span class="text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md">Em andamento</span>
            </td>
            <td class="px-4 py-3">
              <button class="text-blue-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                </svg>
              </button>
              <button class="ml-2 text-red-400 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v1H8V7zM8 9h4v4H8V9z" clip-rule="evenodd" />
                </svg>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-[#E8E8E8] bg-white text-black">
            <td class="px-4 py-3">#1530</td>
            <td class="px-4 py-3">Juliana Costa</td>
            <td class="px-4 py-3">Ago 14, 2024</td>
            <td class="px-4 py-3">
              <span class="text-red-500 bg-red-100 px-2 py-1 rounded-md">Perdida</span>
            </td>
            <td class="px-4 py-3">
              <button class="text-blue-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                </svg>
              </button>
              <button class="ml-2 text-red-400 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v1H8V7zM8 9h4v4H8V9z" clip-rule="evenodd" />
                </svg>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-[#083366]">
            <td class="px-4 py-3">#1529</td>
            <td class="px-4 py-3">Fernanda Pereira</td>
            <td class="px-4 py-3">Jul 10, 2024</td>
            <td class="px-4 py-3">
              <span class="text-green-500 bg-green-100 px-2 py-1 rounded-md">Ganha</span>
            </td>
            <td class="px-4 py-3">
              <button class="text-blue-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                </svg>
              </button>
              <button class="ml-2 text-red-400 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v1H8V7zM8 9h4v4H8V9z" clip-rule="evenodd" />
                </svg>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-[#E8E8E8] bg-white text-black">
            <td class="px-4 py-3">#1528</td>
            <td class="px-4 py-3">Carlos Almeida</td>
            <td class="px-4 py-3">Jun 24, 2024</td>
            <td class="px-4 py-3">
              <span class="text-green-500 bg-green-100 px-2 py-1 rounded-md">Ganha</span>
            </td>
            <td class="px-4 py-3">
              <button class="text-blue-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L10 7.172 5.414 2.586a2 2 0 00-2.828 2.828L7.172 10l-4.586 4.586a2 2 0 102.828 2.828L10 12.828l4.586 4.586a2 2 0 102.828-2.828L12.828 10l4.586-4.586a2 2 0 000-2.828z" />
                </svg>
              </button>
              <button class="ml-2 text-red-400 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v1H8V7zM8 9h4v4H8V9z" clip-rule="evenodd" />
                </svg>
              </button>
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
  