<template>
  <div class="min-h-screen">
    <div
      class="w-full h-full bg-gray-100 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden sticky-0"
      :class="isOverlay ? 'fixed' : null"
      id="chec-div"
    >
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div
        class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
          <div
            class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 bg-gray-200 overflow-y-scroll overflow-x-hidden lg:h-screen h-auto"
            id="scroll"
          >
            <div
              class="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-left"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                @click="isOverlay = !isOverlay"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p class="text-xl pl-2 leading-none">
                {{ isOverlay ? 'back' : 'toggle overlay' }}
              </p>
            </div>
            <p
              class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pb-5"
            >
              Shopping cart
            </p>
            <div class="overflow-y-auto">
              <div
                v-for="(item, index) in demoData"
                :key="index"
                class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                <div class="md:w-4/12 2xl:w-1/4 w-full">
                  <img
                    :src="item.img"
                    alt="Black Leather Bag"
                    class="h-full object-center object-cover md:block hidden"
                  />
                </div>
                <div
                  class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center"
                >
                  <p
                    class="text-md font-bold leading-3 text-gray-800 md:pt-0 pt-4"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-xs leading-3 text-gray-800 pt-4 pb-1">
                    Quantity
                  </p>

                  <div class="flex items-center justify-between w-full pt-1">
                    <select
                      aria-label="Select quantity"
                      class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <div class="flex itemms-center">
                      <p
                        class="text-xs leading-3 underline text-gray-800 cursor-pointer"
                      >
                        Add to favorites
                      </p>
                      <p
                        class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <p class="text-base font-black leading-none text-gray-800">
                      RM {{ item.price }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
            <div
              class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto"
            >
              <div class="">
                <p
                  class="lg:text-4xl text-3xl font-black leading-9 text-gray-800"
                >
                  Summary
                </p>
                <div class="flex items-center justify-between pt-16">
                  <p class="text-base leading-none text-gray-800">
                    Subtotal : RM {{ totalPrice }}
                  </p>
                </div>
                <div class="flex items-center justify-between pt-5">
                  <p class="text-base leading-none text-gray-800">
                    Shipping: RM 5
                  </p>
                  <p class="text-base leading-none text-gray-800"></p>
                </div>
                <div class="flex items-center justify-between pt-5">
                  <p class="text-base leading-none text-gray-800">Tax: RM 3</p>
                  <p class="text-base leading-none text-gray-800"></p>
                </div>
              </div>
              <div>
                <div
                  class="flex items-center pb-6 justify-between lg:pt-5 pt-20"
                >
                  <p class="text-2xl leading-normal text-gray-800">Total</p>
                  <p
                    class="text-2xl font-bold leading-normal text-right text-gray-800"
                  >
                    RM 88
                  </p>
                </div>
                <button
                  class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOverlay = ref(false);

const demoData = [
	{
		img: 'https://ae01.alicdn.com/kf/HTB1lGJtKVXXXXaxXXXXq6xXFXXXD/Adult-Flexible-Comfort-Swimming-Fins-Submersible-Long-Swimming-Snorkeling-Foot-Profession-Diving-Fins-Flippers-Water-Sports.jpg',
		title: 'Blue Swim Fins',
		price: '10',
		amountSold: '120'
	},
	{
		img: 'https://www.topbest10reviews.com/wp-content/uploads/2019/08/10.-Deep-Blue-Gear-Latitude-2-Fins.jpg',
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
		img: 'https://ourlandoutdoor.com/wp-content/uploads/2021/01/16105893446701-12915.jpeg',
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

const totalPrice = ref(0);

const calTotal = (arr) => {
	let tempData = 0;
	arr.forEach((item) => {
		let price = parseInt(item.price);
		tempData += price;
	});
	totalPrice.value = tempData;
};

calTotal(demoData);
</script>

<style scoped>
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
</style>
