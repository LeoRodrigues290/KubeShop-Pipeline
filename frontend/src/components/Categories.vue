<template>
  <div class="bg-gray-100 p-4">
    <h3 class="font-bold mb-2">Categorias</h3>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'Products', params: { categoryId: category.id }}">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'Eletrônicos' },
        { id: 2, name: 'Roupas' },
        // Adicione mais categorias
      ],
    }
  },
}
</script>
