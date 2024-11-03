<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Gerenciar Categorias</h1>
    <button
        @click="openCategoryModal()"
        class="bg-primary text-white px-4 py-2 rounded mb-4"
    >
      Adicionar Categoria
    </button>
    <table class="min-w-full bg-white">
      <thead>
      <tr>
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Nome</th>
        <th class="px-4 py-2">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="category in categories" :key="category.id" class="text-center">
        <td class="border px-4 py-2">{{ category.id }}</td>
        <td class="border px-4 py-2">{{ category.name }}</td>
        <td class="border px-4 py-2">
          <button
              @click="editCategory(category)"
              class="text-blue-500 hover:underline mr-2"
          >
            Editar
          </button>
          <button
              @click="deleteCategory(category.id)"
              class="text-red-500 hover:underline"
          >
            Excluir
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal de Categoria -->
    <CategoryModal
        v-if="showCategoryModal"
        :category="selectedCategory"
        @close="closeCategoryModal"
        @save="saveCategory"
    />
  </div>
</template>

<script>
import CategoryModal from '../components/CategoryModal.vue';

export default {
  components: {
    CategoryModal,
  },
  data() {
    return {
      categories: [],
      showCategoryModal: false,
      selectedCategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      // Implementar chamada à API para obter categorias
      this.categories = [
        { id: 1, name: 'Eletrônicos' },
        { id: 2, name: 'Roupas' },
        // Outras categorias
      ];
    },
    openCategoryModal() {
      this.selectedCategory = null;
      this.showCategoryModal = true;
    },
    closeCategoryModal() {
      this.showCategoryModal = false;
    },
    saveCategory(category) {
      // Implementar lógica para salvar a categoria
      if (category.id) {
        // Atualizar categoria existente
      } else {
        // Criar nova categoria
      }
      this.closeCategoryModal();
      this.fetchCategories();
    },
    editCategory(category) {
      this.selectedCategory = { ...category };
      this.showCategoryModal = true;
    },
    deleteCategory(categoryId) {
      // Implementar lógica para excluir a categoria
      this.categories = this.categories.filter((c) => c.id !== categoryId);
    },
  },
};
</script>
