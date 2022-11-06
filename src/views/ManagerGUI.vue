<template>
  <div>
    <div class="flex flex-row px-10">
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
import LineChart from '../components/lineChart';
</script>

<style scoped>
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: underline;
  }
</style>
