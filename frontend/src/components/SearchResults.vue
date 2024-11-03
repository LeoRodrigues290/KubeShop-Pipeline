<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Resultados da Pesquisa para "{{ $route.query.q }}"</h2>
      <div v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </div>
      <div v-else>
        <p>Nenhum produto encontrado.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from '../components/ProductCard.vue';
import api from '../api';

export default {
  components: {
    Navbar,
    Footer,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  watch: {
    '$route.query.q': 'fetchSearchResults',
  },
  mounted() {
    this.fetchSearchResults();
  },
  methods: {
    async fetchSearchResults() {
      const query = this.$route.query.q;
      if (query) {
        // Chamada à API para buscar produtos com base na query
        // Exemplo mockado:
        this.products = [
          // Produtos que correspondem à pesquisa
        ];
      }
    },
  },
};
</script>
