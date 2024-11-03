<template>
  <div class="flex h-screen bg-neutral">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white">
      <div class="p-4 text-2xl font-bold">
        KubeShop Admin
      </div>
      <nav class="mt-8">
        <ul>
          <li class="mb-2">
            <router-link to="/admin" class="flex items-center px-4 py-2 hover:bg-secondary">
              <span class="ml-2">Dashboard</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/admin/products" class="flex items-center px-4 py-2 hover:bg-secondary">
              <span class="ml-2">Produtos</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/admin/categories" class="flex items-center px-4 py-2 hover:bg-secondary">
              <span class="ml-2">Categorias</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/admin/orders" class="flex items-center px-4 py-2 hover:bg-secondary">
              <span class="ml-2">Pedidos</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <div class="text-xl font-semibold">Administração</div>
        <div>
          <button @click="logout" class="text-primary">Sair</button>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-y-auto p-6 bg-neutral">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  methods: {
    logout() {
      // Implementar lógica de logout
      this.$store.dispatch('setUser', null);
      this.$router.push('/login');
    },
  },
};
</script>
