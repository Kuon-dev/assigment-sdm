<template>
  <!--
    This component uses @tailwindcss/forms

    yarn add @tailwindcss/forms
    npm install @tailwindcss/forms

    plugins: [require('@tailwindcss/forms')]
  -->

  <section class="h-screen bg-img bg-cover">
    <div class="min-h-screen bg-opacity-50 bg-black bg-cover">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div class="mt-8">
              <a href="" class="text-2xl font-bold text-cyan-300">
                0151 475 4450
              </a>

              <address class="mt-2 not-italic text-white">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" class="space-y-4">
              <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                <div>
                  <input
                    class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <input
                  class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                  placeholder="Country"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <input
                  class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  required
                />
              </div>

              <div>
                <input
                  class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Rent Date</label>
                  <input
                    class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                    type="date"
                    id="email"
                    required
                  />
                </div>

                <div>
                  <label>Return Date</label>
                  <input
                    class="w-full rounded-lg border-[1px] border-gray-200 p-3 text-sm"
                    type="date"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm border"
                  placeholder="Your Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto bg-sky-500"
                >
                  <span class="font-medium"> Submit Registration </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  .bg-img {
    background-image: url('./menu-img-tecdive.jpg');
  }

  p {
    color: white;
  }
</style>
