<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg w-1/2">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-semibold">{{ product.id ? 'Editar' : 'Adicionar' }} Produto</h2>
        <button @click="$emit('close')" class="text-gray-600">&times;</button>
      </div>
      <form @submit.prevent="submit" class="p-4">
        <div class="mb-4">
          <label class="block">Nome</label>
          <input type="text" v-model="product.name" class="w-full border p-2" required />
        </div>
        <div class="mb-4">
          <label class="block">Preço</label>
          <input type="number" v-model="product.price" class="w-full border p-2" required />
        </div>
        <div class="mb-4">
          <label class="block">Estoque</label>
          <input type="number" v-model="product.stock" class="w-full border p-2" required />
        </div>
        <!-- Adicione campos adicionais conforme necessário -->
        <div class="flex justify-end">
          <button @click="$emit('close')" type="button" class="px-4 py-2 mr-2">Cancelar</button>
          <button type="submit" class="bg-primary text-white px-4 py-2">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      product: this.product ? { ...this.product } : { name: '', price: 0, stock: 0 },
    };
  },
  methods: {
    submit() {
      this.$emit('save', this.product);
    },
  },
};
</script>
