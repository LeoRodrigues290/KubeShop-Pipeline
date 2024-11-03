<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Carrinho de Compras</h2>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="flex justify-between items-center mb-4">
          <div>{{ item.name }}</div>
          <div>R$ {{ item.price.toFixed(2) }}</div>
        </div>
        <div class="text-right font-bold">
          Total: R$ {{ totalPrice.toFixed(2) }}
        </div>
        <router-link to="/checkout" class="bg-green-500 text-white px-4 py-2 mt-4 inline-block">
          Finalizar Compra
        </router-link>
      </div>
      <div v-else>
        <p>Seu carrinho está vazio.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      cartItems: [
        // Exemplo de itens no carrinho
        // { id: 1, name: 'Produto 1', price: 100 },
      ],
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    },
  },
}
</script>
