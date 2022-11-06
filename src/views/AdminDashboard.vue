<template>
  <div class="flex flex-row">
    <div class="w-2/12">
      <Sidebar :current-user="user" />
    </div>
    <div class="w-10/12 h-screen bg-gray-100">
      <div class="pt-5 px-5">
        <h1 class="text-3xl py-3 pb-4 font-bold">{{ title }}</h1>
        <NestedNav :items="navItem" />
      </div>
      <div class="pl-0 pr-10 py-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/MainSidebar.vue';
import NestedNav from '../components/ComponentNestedNav.vue';

import { defineProps, computed } from 'vue';

const props = defineProps({
	navItem: {
		type: Array,
		default: null
	},
	title: {
		type: String,
		default: ''
	},
	user: {
		type: String,
		default: 'Admin'
	}
});
</script>

<style></style>
