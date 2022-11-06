<template>
  <div class="flex h-screen flex-col justify-between border-r bg-white">
    <div class="px-4 py-6">
      <div class="flex items-center gap-4">
        <img
          src="https://cdn.discordapp.com/attachments/1024849769392242711/1026062088352829450/IMG_0081.png"
          width="60"
        />
        <span class="block px-5 py-2 rounded-lg bg-gray-100 text-md"
          >{{ currentUser }} dashboard</span
        >
      </div>

      <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
        <details
          class="group"
          v-for="(items, index) in displayUserNav"
          :key="index"
        >
          <summary
            class="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <font-awesome-icon :icon="items.icon" />
            <span class="ml-3 text-sm font-medium"> {{ items.label }}</span>

            <span
              class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <font-awesome-icon
                icon="fa-solid fa-angle-down"
                v-if="items?.nested"
              />
            </span>
          </summary>

          <nav
            aria-label="Teams Nav"
            class="mt-1.5 ml-8 flex flex-col"
            v-for="(item, nestedIndex) in items?.nested"
            :key="nestedIndex"
          >
            <a
              class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <font-awesome-icon :icon="item.icon" />
              <span class="ml-3 text-sm font-medium"> {{ item.label }}</span>
            </a>
          </nav>
        </details>
      </nav>
    </div>

    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a
        href="#"
        class="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50"
      >
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-10 w-10 rounded-full object-cover"
        />

        <div class="ml-1.5">
          <p class="text-xs">
            <strong class="block font-medium">Eric Frusciante</strong>

            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
	currentUser: {
		type: String,
		default: 'Admin'
	}
});

const adminNav = [
	{
		label: 'Manage',
		icon: 'fa-solid fa-users',
		nested: [
			{
				label: 'Member Info',
				icon: 'fa-solid fa-user'
			},
			{
				label: 'Item',
				icon: 'fa-solid fa-box'
			},
			{
				label: 'Equipment Rental',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				label: 'Dive Package',
				icon: 'fa-solid fa-cubes'
			},
			{
				label: 'Deliver Status',
				icon: 'fa-solid fa-truck'
			}
		]
	},
	{
		label: 'Register dive center account',
		icon: 'fa-solid fa-address-card'
	},
	{
		label: 'Account',
		icon: 'fa-solid fa-user-gear',
		nested: []
	}
];

const managerNav = [
	{
		label: 'Manage',
		icon: 'fa-solid fa-users',
		nested: [
			{
				label: 'Member Info',
				icon: 'fa-solid fa-user'
			},
			{
				label: 'Item',
				icon: 'fa-solid fa-box'
			},
			{
				label: 'Equipment Rental',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				label: 'Dive Package',
				icon: 'fa-solid fa-cubes'
			},
			{
				label: 'Deliver Status',
				icon: 'fa-solid fa-truck'
			}
		]
	},
	{
		label: 'Generate Report',
		icon: 'fa-solid fa-address-card',
		nested: [
			{
				label: 'Sales report',
				icon: 'fa-solid fa-user'
			},
			{
				label: 'Membership report',
				icon: 'fa-solid fa-box'
			},
			{
				label: 'Dive package registration report',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				label: 'Dive center partner report',
				icon: 'fa-solid fa-cubes'
			},
			{
				label: 'Items sold / rented report',
				icon: 'fa-solid fa-truck'
			}
		]
	},
	{
		label: 'Account',
		icon: 'fa-solid fa-user-gear',
		nested: []
	}
];

console.log(props.currentUser);
const displayUserNav = computed(() => {
	if (props.currentUser === 'Manager') return managerNav;
	if (props.currentUser === 'Admin');
	return adminNav;
});
</script>

<style></style>
