<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-white text-xl font-bold">
        <router-link to="/">KubeShop</router-link>
      </div>
      <ul class="flex space-x-4 text-white">
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li>
          <router-link to="/products">Produtos</router-link>
        </li>
        <li>
          <router-link to="/cart">Carrinho</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </div>

    <div class="flex items-center">
      <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="performSearch"
          placeholder="Buscar produtos..."
          class="px-4 py-2 rounded-l bg-white text-gray-800"
      />
      <button
          @click="performSearch"
          class="bg-primary text-white px-4 py-2 rounded-r"
      >
        Buscar
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    // ... outros métodos ...
    performSearch() {
      if (this.searchQuery) {
        this.$router.push({name: 'SearchResults', query: {q: this.searchQuery}});
      }
    },
  },
};
</script>
