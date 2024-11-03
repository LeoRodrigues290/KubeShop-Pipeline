<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg w-2/3">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-semibold">Detalhes do Pedido #{{ order.id }}</h2>
        <button @click="$emit('close')" class="text-gray-600">&times;</button>
      </div>
      <div class="p-4">
        <h3 class="font-bold mb-2">Cliente:</h3>
        <p>{{ order.customerName }}</p>
        <h3 class="font-bold mt-4 mb-2">Itens:</h3>
        <ul>
          <li v-for="item in order.items" :key="item.id">
            {{ item.quantity }}x {{ item.name }} - R$ {{ item.price.toFixed(2) }}
          </li>
        </ul>
        <h3 class="font-bold mt-4">Total: R$ {{ order.total.toFixed(2) }}</h3>
      </div>
      <div class="flex justify-end p-4 border-t">
        <button @click="$emit('close')" class="bg-primary text-white px-4 py-2">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['order'],
};
</script>
