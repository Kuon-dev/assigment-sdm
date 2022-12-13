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
const demoData = [
	{
		img: 'https://ae01.alicdn.com/kf/HTB1lGJtKVXXXXaxXXXXq6xXFXXXD/Adult-Flexible-Comfort-Swimming-Fins-Submersible-Long-Swimming-Snorkeling-Foot-Profession-Diving-Fins-Flippers-Water-Sports.jpg',
		title: 'Blue Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://theswimshop.co.za/wp-content/uploads/2020/08/Spurt-TRAINING-FINS-Yellow.jpg',
		title: 'Yellow Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://cdn.shopify.com/s/files/1/0036/4226/1577/products/DP1810x_cressi-light-swim-fins_blue.jpg?v=1562170232',
		title: 'Cressi Light Swimming Training Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://www.wigglestatic.com/product-media/101828486/uNHtBpeV.jpeg?w=430&h=430&a=7',
		title: 'Wiggle Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://ae01.alicdn.com/kf/HTB1Pe0pXiDxK1Rjy1zcq6yGeXXa4/4-colors-Snorkeling-Diving-Swimming-Fins-Adult-Flexible-Comfort-Swimming-Fins-Submersible-Foot-Fins-Flippers-swim.jpg',
		title: 'Red Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://i5.walmartimages.com/asr/af247bdb-bd28-4fde-a4b3-e4cc85291c43_1.9c38202f5f586aad45e54358fee2f841.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
		title: 'Yellow Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91kp9qnVOJL._SL1500_.jpg',
		title: 'Adjustable Short Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://i5.walmartimages.com/asr/2a3cb297-dfd9-4c8e-8ffa-02b363419a36_1.578c80868a0bdc27bbc1a09ea741e33f.jpeg',
		title: 'Green Swim Fins',
		price: '10',
		amountSold: '120'
	}
];
</script>

<style></style>
