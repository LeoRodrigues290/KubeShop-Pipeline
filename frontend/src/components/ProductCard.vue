<template>
  <div class="border p-4 rounded-lg relative">
    <!-- Botão de Wishlist -->
    <button
        @click="toggleWishlist"
        class="absolute top-2 right-2 text-red-500"
    >
      <i :class="isInWishlist ? 'fas fa-heart' : 'far fa-heart'"></i>
    </button>
    <!-- Conteúdo existente -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  // ... código existente ...
  computed: {
    ...mapGetters(['wishlistItems']),
    isInWishlist() {
      return this.wishlistItems.some((item) => item.id === this.product.id);
    },
  },
  methods: {
    ...mapActions(['addToWishlist', 'removeFromWishlist']),
    toggleWishlist() {
      if (this.isInWishlist) {
        this.removeFromWishlist(this.product.id);
      } else {
        this.addToWishlist(this.product);
      }
    },
  },
};
</script>
