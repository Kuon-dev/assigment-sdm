<template>
  <div class="px-10">
    <div class="flex mx-2">
      <div>
        <div class="dropdown relative pb-5">
          <button
            class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            @click="isHidden = !isHidden"
          >
            Filter year
            <span
              class="ml-2 mb-1 shrink-0 transition duration-300"
              :class="isHidden ? null : 'rotate-180'"
            >
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </span>
          </button>

          <ul
            class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-right py-2 list-none text-center rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none flex flex-col w-full"
            :class="isHidden ? 'hidden' : null"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >2016</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >2017</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >2018</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-1/3 px-8 bg-white rounded-lg py-5 mx-2">
        <h1>Year: 2019</h1>
        <LineChart />
      </div>
      <div class="w-1/3 px-8 bg-white rounded-lg py-5 mx-2">
        <h1>Year: 2020</h1>
        <LineChart />
      </div>
      <div class="w-1/3 px-8 bg-white rounded-lg py-5 mx-2">
        <h1>Year: 2021</h1>
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LineChart from '../components/lineChart';

const isHidden = ref(true);
</script>

<style scoped>
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: underline;
  }
</style>
