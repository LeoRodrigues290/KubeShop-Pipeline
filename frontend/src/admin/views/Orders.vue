<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Gerenciar Pedidos</h1>
    <table class="min-w-full bg-white">
      <thead>
      <tr>
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Cliente</th>
        <th class="px-4 py-2">Data</th>
        <th class="px-4 py-2">Total</th>
        <th class="px-4 py-2">Status</th>
        <th class="px-4 py-2">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id" class="text-center">
        <td class="border px-4 py-2">{{ order.id }}</td>
        <td class="border px-4 py-2">{{ order.customerName }}</td>
        <td class="border px-4 py-2">{{ order.date }}</td>
        <td class="border px-4 py-2">R$ {{ order.total.toFixed(2) }}</td>
        <td class="border px-4 py-2">{{ order.status }}</td>
        <td class="border px-4 py-2">
          <button
              @click="viewOrder(order)"
              class="text-blue-500 hover:underline mr-2"
          >
            Ver
          </button>
          <button
              @click="updateStatus(order)"
              class="text-green-500 hover:underline"
          >
            Atualizar Status
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal de Detalhes do Pedido -->
    <OrderDetailsModal
        v-if="showOrderModal"
        :order="selectedOrder"
        @close="closeOrderModal"
    />
  </div>
</template>

<script>
import OrderDetailsModal from '../components/OrderDetailsModal.vue';

export default {
  components: {
    OrderDetailsModal,
  },
  data() {
    return {
      orders: [],
      showOrderModal: false,
      selectedOrder: null,
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      // Implementar chamada à API para obter pedidos
      this.orders = [
        {
          id: 1,
          customerName: 'João Silva',
          date: '2023-10-01',
          total: 300,
          status: 'Pendente',
        },
        // Outros pedidos
      ];
    },
    viewOrder(order) {
      this.selectedOrder = { ...order };
      this.showOrderModal = true;
    },
    closeOrderModal() {
      this.showOrderModal = false;
    },
    updateStatus(order) {
      // Implementar lógica para atualizar o status do pedido
      order.status = 'Enviado';
    },
  },
};
</script>
