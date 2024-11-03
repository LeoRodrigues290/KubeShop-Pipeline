<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Produtos</h2>
      <div class="grid grid-cols-4 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    Navbar,
    Footer,
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produto 1', price: 100, image: 'image1.jpg' },
        { id: 2, name: 'Produto 2', price: 200, image: 'image2.jpg' },
        // Adicione mais produtos
      ],
    }
  },
}
</script>
