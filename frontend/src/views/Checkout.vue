<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Checkout</h2>
      <form @submit.prevent="processCheckout">
        <div class="mb-4">
          <label class="block">Nome Completo</label>
          <input type="text" v-model="customer.name" class="w-full border p-2" required />
        </div>
        <div class="mb-4">
          <label class="block">Endereço</label>
          <input type="text" v-model="customer.address" class="w-full border p-2" required />
        </div>
        <!-- Adicione mais campos conforme necessário -->
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">Confirmar Pedido</button>
      </form>
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
      customer: {
        name: '',
        address: '',
      },
    }
  },
  methods: {
    processCheckout() {
      // Implementar a lógica de checkout
      alert('Pedido confirmado!');
    },
  },
}
</script>
