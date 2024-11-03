<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Gerenciar Produtos</h1>
    <button
        @click="openProductModal()"
        class="bg-primary text-white px-4 py-2 rounded mb-4"
    >
      Adicionar Produto
    </button>
    <table class="min-w-full bg-white">
      <thead>
      <tr>
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Nome</th>
        <th class="px-4 py-2">Preço</th>
        <th class="px-4 py-2">Estoque</th>
        <th class="px-4 py-2">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id" class="text-center">
        <td class="border px-4 py-2">{{ product.id }}</td>
        <td class="border px-4 py-2">{{ product.name }}</td>
        <td class="border px-4 py-2">R$ {{ product.price.toFixed(2) }}</td>
        <td class="border px-4 py-2">{{ product.stock }}</td>
        <td class="border px-4 py-2">
          <button
              @click="editProduct(product)"
              class="text-blue-500 hover:underline mr-2"
          >
            Editar
          </button>
          <button
              @click="deleteProduct(product.id)"
              class="text-red-500 hover:underline"
          >
            Excluir
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal de Produto -->
    <ProductModal
        v-if="showProductModal"
        :product="selectedProduct"
        @close="closeProductModal"
        @save="saveProduct"
    />
  </div>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';

export default {
  components: {
    ProductModal,
  },
  data() {
    return {
      products: [],
      showProductModal: false,
      selectedProduct: null,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Implementar chamada à API para obter produtos
      this.products = [
        { id: 1, name: 'Produto A', price: 100, stock: 10 },
        { id: 2, name: 'Produto B', price: 200, stock: 5 },
        // Outros produtos
      ];
    },
    openProductModal() {
      this.selectedProduct = null;
      this.showProductModal = true;
    },
    closeProductModal() {
      this.showProductModal = false;
    },
    saveProduct(product) {
      // Implementar lógica para salvar o produto (criar ou atualizar)
      if (product.id) {
        // Atualizar produto existente
      } else {
        // Criar novo produto
      }
      this.closeProductModal();
      this.fetchProducts();
    },
    editProduct(product) {
      this.selectedProduct = { ...product };
      this.showProductModal = true;
    },
    deleteProduct(productId) {
      // Implementar lógica para excluir o produto
      this.products = this.products.filter((p) => p.id !== productId);
    },
  },
};
</script>
