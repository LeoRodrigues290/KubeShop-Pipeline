<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-8 flex">
      <!-- Sidebar de Filtros -->
      <aside class="w-1/4 mr-6">
        <h3 class="text-xl font-bold mb-4">Filtros</h3>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Categorias</h4>
          <ul>
            <li v-for="category in categories" :key="category.id">
              <label class="flex items-center">
                <input
                    type="checkbox"
                    :value="category.id"
                    v-model="selectedCategories"
                />
                <span class="ml-2">{{ category.name }}</span>
              </label>
            </li>
          </ul>
        </div>
        <!-- Outros filtros, como faixa de preço -->
      </aside>

      <!-- Lista de Produtos -->
      <div class="flex-1">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Produtos</h2>
          <!-- Ordenação -->
          <select v-model="sortOrder" class="border p-2">
            <option value="asc">Preço: Menor para Maior</option>
            <option value="desc">Preço: Maior para Menor</option>
          </select>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: {
    Navbar,
    Footer,
    ProductCard,
  },
  data() {
    return {
      products: [],
      categories: [],
      selectedCategories: [],
      sortOrder: 'asc',
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
            this.selectedCategories.includes(product.categoryId)
        );
      }
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered.sort((a, b) => b.price - a.price);
      }
      return filtered;
    },
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },
  methods: {
    fetchProducts() {
      // Chamada à API para obter produtos
    },
    fetchCategories() {
      // Chamada à API para obter categorias
    },
  },
};
</script>
