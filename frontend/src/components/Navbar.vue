<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-white text-xl font-bold">
        <router-link to="/">KubeShop</router-link>
      </div>
      <ul class="flex space-x-4 text-white">
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/products">Produtos</router-link></li>
        <li><router-link to="/cart">Carrinho</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
