<template>
  <div
    class="inline-flex -space-x-px overflow-hidden border bg-white shadow-sm rounded-md"
  >
    <span v-for="(item, index) in items" :key="index">
      <button
        class="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 focus:relative hover:scale-110 transition hover:font-bold"
        :class="
          index === 0
            ? 'underline underline-offset-4 decoration-sky-500 decoration-2'
            : null
        "
      >
        {{ item }}
      </button>
    </span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
	items: {
		type: Array,
		default: null
	}
});
</script>

<style></style>
