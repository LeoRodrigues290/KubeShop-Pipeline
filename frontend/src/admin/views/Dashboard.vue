<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Card de Resumo -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-2">Total de Vendas</h2>
        <p class="text-3xl font-bold">R$ {{ totalSales.toFixed(2) }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-2">Pedidos Pendentes</h2>
        <p class="text-3xl font-bold">{{ pendingOrders }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-2">Produtos em Estoque</h2>
        <p class="text-3xl font-bold">{{ productsInStock }}</p>
      </div>
    </div>
    <!-- Gráficos e Tabelas podem ser adicionados aqui -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalSales: 0,
      pendingOrders: 0,
      productsInStock: 0,
    };
  },
  mounted() {
    // Chamar funções para buscar dados
    this.fetchDashboardData();
  },
  methods: {
    fetchDashboardData() {
      // Implementar chamadas à API para obter os dados
      // Exemplo:
      this.totalSales = 5000; // Valor mockado
      this.pendingOrders = 3;
      this.productsInStock = 150;
    },
  },
};
</script>
