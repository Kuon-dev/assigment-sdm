<template>
  <div>
    <Navbar :demo-data="demoData" @set-toggle-overlay="toggleOverlay($event)" />
    <Page :demo-data="demoData" />
    <div v-if="isOverlayActive">
      <ShoppingCart
        @disable-overlay="toggleOverlay(false)"
        :demo-data="demoData"
        :is-overlay="isOverlayActive"
        :is-overlay-active="isOverlayActive"
      />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/MainNavbar.vue';
import Page from '../components/MainProducts.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import { ref } from 'vue';

const props = defineProps({
	demoData: {
		type: Array,
		default: null
	}
});

const isOverlayActive = ref(false);

const toggleOverlay = (e) => {
	isOverlayActive.value = e;
};
</script>

<style></style>
