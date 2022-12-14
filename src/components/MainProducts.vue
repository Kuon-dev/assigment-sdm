<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8">
      <div>
        <span class="inline-block h-1 w-12 bg-red-700"></span>

        <h2
          class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl"
        >
          Items
        </h2>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        <a h="#" class="block" v-for="(items, index) in demoData" :key="index">
          <div class="flex justify-center hidden">
            <strong
              class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white"
            >
              New
            </strong>
          </div>

          <img
            alt="Trainer"
            :src="items.img"
            class="-mt-3 h-96 w-full object-cover p-5 hover:scale-110 transition"
          />

          <h3 class="mt-4 text-md text-black/90">
            {{ items.title }}
          </h3>

          <div class="mt-4 flex items-center justify-between font-bold">
            <p class="text-lg">RM{{ items.price }}</p>

            <p class="text-xs uppercase tracking-wide">
              {{ items.amountSold }} sold
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {} from 'vue';

const props = defineProps({
	demoData: {
		type: Array,
		default: null
	}
});
</script>

<style></style>
