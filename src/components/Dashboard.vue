<template>
  <div class="bg-[#020225]">
    <!-- Seção Faturamento ao longo do tempo -->
    <div>
      <h1 class="text-white">Faturamento ao longo do tempo</h1>
    </div>
    <!-- Seção Pedidos -->
    <div class="mt-12 text-white bg-[#02264B] rounded-lg w-3/4 p-4 shadow-lg font-semibold">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-semibold font-segoe text-2xl">Pedidos</h2>
      </div>
      <table class="min-w-full text-left text-sm">
        <thead>
          <tr class="text-gray-400 text-xl">
            <th class="p-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-2" viewBox="0 0 8 8" fill="none">
                  <path d="M1.13862 0.0408231C1.04103 0.090924 0.992234 0.152158 0.969713 0.25236C0.958453 0.293183 0.950946 1.46591 0.950946 3.00976V5.69666H0.628154C0.449867 5.69666 0.271581 5.70593 0.234047 5.71521C0.136458 5.74304 0.057637 5.81356 0.0219796 5.91005C-0.0361981 6.06035 0.0257331 6.42776 0.153349 6.69682C0.359786 7.12731 0.733249 7.42977 1.21368 7.55595L1.3732 7.59863H3.68154H5.98989L6.14941 7.55781C6.71805 7.40936 7.15532 6.98072 7.31671 6.41106L7.35988 6.26261L7.36551 3.2881C7.36926 1.28963 7.36363 0.291328 7.35049 0.243082C7.32422 0.146592 7.26417 0.0760793 7.17408 0.0352564C7.10089 0.0018558 6.97891 2.14553e-07 4.1601 2.14553e-07H1.22119L1.13862 0.0408231ZM6.7218 3.405C6.7218 6.03437 6.71992 6.1754 6.68802 6.28117C6.59043 6.59476 6.33895 6.84341 6.03117 6.93062C5.87541 6.97516 5.62768 6.97144 5.47192 6.9232C5.1191 6.81372 4.86199 6.50755 4.81507 6.142C4.80381 6.05478 4.78692 5.95458 4.77754 5.91561C4.75689 5.83397 4.65743 5.74304 4.55984 5.71707C4.51292 5.70408 3.99495 5.69666 3.0491 5.69666H1.60779V3.16378V0.6309L4.16573 0.634611L6.7218 0.640178V3.405Z" fill="white"/>
                  <path d="M2.56491 1.91126V2.22671H2.88395H3.20299V1.91126V1.59581H2.88395H2.56491V1.91126Z" fill="white"/>
                  <path d="M3.84106 1.91126V2.22671H4.79818H5.7553V1.91126V1.59581H4.79818H3.84106V1.91126Z" fill="white"/>
                  <path d="M2.56491 3.17305V3.4885H2.88395H3.20299V3.17305V2.8576H2.88395H2.56491V3.17305Z" fill="white"/>
                  <path d="M3.84106 3.17305V3.4885H4.79818H5.7553V3.17305V2.8576H4.79818H3.84106V3.17305Z" fill="white"/>
                  <path d="M2.56491 4.43486V4.75031H2.88395H3.20299V4.43486V4.11941H2.88395H2.56491V4.43486Z" fill="white"/>
                  <path d="M3.84106 4.43486V4.75031H4.79818H5.7553V4.43486V4.11941H4.79818H3.84106V4.43486Z" fill="white"/>
                </svg>
                Pedido
              </div>
            </th>
            <th class="p-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-2" viewBox="0 0 10 10" fill="none">
                  <path d="M0.673981 8.74211C0.673981 7.21035 1.91572 5.96861 3.44747 5.96861H6.55253C8.08428 5.96861 9.32602 7.21035 9.32602 8.74211V8.74211C9.32602 9.25269 8.91211 9.66661 8.40152 9.66661H1.59848C1.08789 9.66661 0.673981 9.25269 0.673981 8.74211V8.74211Z" fill="white"/>
                  <path d="M5.00164 5.26403C6.36321 5.26403 7.46697 4.16027 7.46697 2.7987C7.46697 1.43714 6.36321 0.333374 5.00164 0.333374C3.64008 0.333374 2.53632 1.43714 2.53632 2.7987C2.53632 4.16027 3.64008 5.26403 5.00164 5.26403Z" fill="white"/>
                </svg>
                Cliente
              </div>
            </th>
            <th class="px-4 py-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-2" viewBox="0 0 11 12" fill="none">
                  <rect x="0.72876" y="2.21973" width="9.06956" height="9.12111" rx="1" stroke="white" stroke-width="0.8"/>
                  <path d="M0.72876 5.26807H9.79832V10.3402C9.79832 10.8925 9.35061 11.3402 8.79832 11.3402H1.72876C1.17648 11.3402 0.72876 10.8925 0.72876 10.3402V5.26807Z" fill="white" stroke="white" stroke-width="0.8"/>
                  <path d="M7.77954 1.34082V2.99451" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.8186 1.34082V2.99451" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Data
              </div>
            </th>
            <th class="px-4 py-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-2" viewBox="0 0 11 10" fill="none">
                  <path d="M9.18403 0H0.850698C0.629684 0 0.417722 0.0877973 0.261442 0.244078C0.105162 0.400358 0.0173645 0.61232 0.0173645 0.833333V9.16667C0.0173645 9.38768 0.105162 9.59964 0.261442 9.75592C0.417722 9.9122 0.629684 10 0.850698 10H9.18403C9.40504 10 9.61701 9.9122 9.77329 9.75592C9.92957 9.59964 10.0174 9.38768 10.0174 9.16667V0.833333C10.0174 0.61232 9.92957 0.400358 9.77329 0.244078C9.61701 0.0877973 9.40504 0 9.18403 0V0ZM7.59549 4.05208L4.54341 6.96875C4.4645 7.04298 4.36007 7.084 4.25174 7.08333C4.14501 7.08374 4.04229 7.04265 3.96528 6.96875L2.43924 5.51042C2.39691 5.47349 2.36249 5.42838 2.33804 5.37781C2.31359 5.32724 2.29962 5.27225 2.29696 5.21614C2.29431 5.16003 2.30303 5.10396 2.32259 5.05131C2.34216 4.99866 2.37217 4.9505 2.41082 4.90974C2.44947 4.86898 2.49597 4.83646 2.54751 4.81413C2.59905 4.79179 2.65457 4.78011 2.71074 4.77979C2.76691 4.77946 2.82257 4.7905 2.87437 4.81223C2.92617 4.83396 2.97303 4.86594 3.01216 4.90625L4.25174 6.08854L7.02257 3.44792C7.10359 3.37723 7.20879 3.3406 7.31619 3.34568C7.42358 3.35077 7.52486 3.39716 7.59884 3.47518C7.67282 3.5532 7.71378 3.65679 7.71316 3.76431C7.71253 3.87182 7.67037 3.97493 7.59549 4.05208Z" fill="white"/>
                </svg>
                Status Causa
              </div>
            </th>
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
  * {
    font-family: 'Segoe', sans-serif;
  }
</style>
