<template>
  <div class="flex flex-col justify-center">
    <HomePage :demo-data="demoData" />

    <AdminDashboard
      title="Manage Item"
      :nav-item="['Add item', 'Edit item', 'Delete Item']"
    >
      <AdminGUI />
    </AdminDashboard>

    <PackageRegister />

    <SignupPage />

    <AdminDashboard
      title="Generate Report: Sales Report"
      :nav-item="['Revenue', 'Total Transaction', 'Total Order Value']"
      user="Manager"
    >
      <ManagerGUI />
    </AdminDashboard>

    <hr />
    <AdminDashboard
      title="View Dive Packages Record"
      :nav-item="['All Packages', 'Contact Admin']"
      user="Receptionist"
    >
      <ReceptionistGUI />
    </AdminDashboard>
  </div>
</template>

<script setup>
import 'animate.css';
import { ref, onMounted, computed } from 'vue';

import HomePage from './views/HomePage.vue';
import AdminDashboard from './views/AdminDashboard.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import PackageRegister from './views/PackageRegister.vue';
import SignupPage from './views/SignupPage.vue';

import AdminGUI from './views/AdminGUI.vue';
import ManagerGUI from './views/ManagerGUI.vue';
import ReceptionistGUI from './views/ReceptionistGUI.vue';

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

<style>
  @import '../public/catppuccin.css';

  :root {
    --white: #ffffff;
    --whiteFilter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(149deg)
      brightness(101%) contrast(100%);
    --gray0: #f8f8f8;
    --gray1: #eeeeee;
    --gray2: #dcdcdc;
    --oxfordBlue: #011936;
    --oxfordBlueFilter: invert(6%) sepia(27%) saturate(6747%) hue-rotate(203deg)
      brightness(96%) contrast(99%);
    --blackCoral: #465362;
    --morningBlue: #82a3a1;

    --gray8: #2d2d2d;
    --gray8T: #2d2d2dee;
    --gray9: #232323;
    --gray10: #161616;

    --cyan1: #d8fdf7;
    --cyan2: #c5fcf3;
    --cyan2T: #b1fbefee;
    --cyan3: #b1fbef;
    --cyan4: #9efaeb;
    --cyan5: #64f7de;
    --cyan6: #2af4d2;
    --cyan7: #0bd5b4;

    /* dark mode */

    /* solarized mode */
    --solar1: #002b36;
    --solar2: #073642;
    --solar2T: #073642ee;
    --solar3: #586e75;
    --solar4: #657b83;
    --solar5: #839496;
    --solar6: #93a1a1;
    --solar7: #eee8d5;
    --solar8: #fdf6e3;
    --solar8T: #fdf6e3ee;
    --solar9: #b58900;
    --solar10: #859900;
    --solar11: #2aa198;
    --solar12: #084a47;
    --solar11Filter: invert(50%) sepia(82%) saturate(361%) hue-rotate(126deg)
      brightness(91%) contrast(89%);

    /* starfall  */
    --starfall-bg: #1b2636;
    --starfall-text: #cacde2;
    --starfall-sel: #214d63ee;
    --starfall-highlight: #e278c4;
    --starfall2: #8de8b0;
  }

  @media (max-width: 370px) {
  }

  html,
  body {
    font-family: Helvetica, Roboto, sans-serif;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out,
      filter 2000ms ease-in-out, border-color 1000ms ease-in-out;
  }

  .div-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .solarized {
    --bg: var(--solar8);
    --bg-sel: var(--solar8T);
    --svg-color: var(--oxfordBlueFilter);
    --text: var(--solar12);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--solar11);
    --text-highlight-2: var(--solar9);
  }

  .dark_solar {
    --bg: var(--solar1);
    --bg-sel: var(--solar2T);
    --svg-color: var(--solar11Filter);
    --text: var(--solar11);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--solar10);
    --text-highlight-2: var(--solar10);
  }

  .placeholder-theme {
    --bg: var(--starfall-bg);
    --bg-sel: var(--starfall-sel);
    --svg-color: var(--whiteFilter);
    --text: var(--starfall-text);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--starfall-highlight);
    --text-highlight-2: var(--starfall2);
  }

  .acrlyic {
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    backdrop-filter: blur(20px) saturate(180%);
    padding: 1rem 2rem;
    border-radius: 4px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  }
</style>
