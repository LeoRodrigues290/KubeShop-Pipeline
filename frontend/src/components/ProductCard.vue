<template>
  <div class="border p-4">
    <img :src="product.image" alt="product.name" class="w-full h-48 object-cover mb-2" />
    <h3 class="text-xl font-bold">{{ product.name }}</h3>
    <p class="text-gray-700">R$ {{ product.price.toFixed(2) }}</p>
    <button class="bg-blue-500 text-white px-4 py-2 mt-2" @click="addToCart">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart() {
      // Implementar a lógica para adicionar ao carrinho
    },
  },
}
</script>
