<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Aqui você pode gerenciar produtos, categorias e pedidos.</p>
      <!-- Adicione funcionalidades administrativas -->
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
}
</script>
