<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-4">Bem-vindo ao KubeShop!</h1>
      <p>Seu e-commerce de confiança.</p>
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
