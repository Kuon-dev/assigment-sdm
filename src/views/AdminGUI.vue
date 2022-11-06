<template>
  <div class="flex flex-row">
    <div class="w-8/12 px-8 pr-10">
      <div class="flex flex-row">
        <div
          class="rounded-lg bg-white shadow-lg items-center flex flex-col w-96 justify-center"
        >
          <div class="text-5xl">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </div>
          <div>Add image</div>
        </div>
        <div>
          <div class="flex p-6 max-w-md">
            <form>
              <div class="form-group mb-6">
                <label>Name </label>
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <label>Quantity</label>
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                  />
                </div>
                <div class="form-group mb-6">
                  <label>Price</label>
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                  />
                </div>
              </div>

              <div class="form-group form-check text-center mb-6"></div>
            </form>
          </div>
        </div>
      </div>
      <div class="pt-8 px-10">
        <form class="">
          <label>Description</label>
          <Editor
            api-key="o89kdvq15guc708rlvj7ca9oauq5nxzawlalbx8xptmpa5pd"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            :init="settings"
          />
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-10"
          >
            submit
          </button>
        </form>
      </div>
    </div>
    <div class="w-4/12 pr-10 pb-12">
      <h1 class="text-3xl py-3 pb-4 font-bold">Preview</h1>
      <div class="bg-white h-96 w-full"></div>
    </div>
  </div>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue';

const settings = {
	menubar: false,
	plugins: ['link', 'paste', 'lists'],
	toolbar_mode: 'warp',
	skin: 'small',
	icons: 'small',
	branding: false,
	paste_as_text: true
};
</script>

<style scoped>
  label {
    font-size: 1.25rem;
    background-color: #e2e2e2;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    display: flex;
    margin-bottom: 1rem;
  }
</style>
