<template>
  <div class="px-10 overflow-y-hidden max-h-screen">
    <div class="flex mx-2">
      <div></div>
    </div>
    <div class="flex flex-col overflow-y-auto">
      <div
        v-for="(item, index) in packages"
        :key="index"
        class="bg-white rounded-lg w-full py-5 my-2 flex flex-row px-5 z-0"
      >
        <img :src="item.image" class="rounded-lg" />
        <div class="justify-between flex flex-row w-full items-center pl-5">
          <div class="flex flex-col">
            <h1>{{ item.label }}</h1>
            <h3>{{ item.description }}</h3>
          </div>
          <div class="flex font-bold text-xl">More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const packages = [
	{
		label: 'Fun Diving Packages',
		description: 'Packages for already certified divers',
		image: './menu-img-projectaware.jpg'
	},
	{
		label: 'PADI Dive Course Packages',
		description: 'Want to learn to dive or enhance your diving knowledge?',
		image: './menu-img-gopro.jpg'
	},
	{
		label: 'Tec Dive Rates',
		description: 'Rates for Technical Dive courses and tips',
		image: './menu-img-ratespackages.jpg'
	},
	{
		label: 'PADI Go Pro Rates',
		description: 'Become a PADI Dive Professional',
		image: './menu-img-recreational.jpg'
	},
	{
		label: 'B&J Promotions',
		description: 'Don\'t miss out and chekc out our monthly promotions',
		image: './menu-img-tecdive.jpg'
	}
];
</script>

<style scoped>
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
  }
</style>
