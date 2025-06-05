<script setup>

import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="relative h-screen w-full max-w-[1545px] overflow-hidden">
    <AppHeader />
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full max-w-[800px] h-full max-h-[550px] bg-bg-w dark:bg-d-bg-d rounded-xl shadow-lg m-4 sm:m-8 md:m-16 p-6 sm:p-8 overflow-auto">
        <form class="flex flex-col gap-6 h-full justify-between">
          <div>
            <h2 class="text-2xl font-semibold text-d-bg dark:text-bg mb-2">Sazinies ar mani</h2>
            <p class="text-sm text-d-bg/80 dark:text-bg/80">
              Ja vēlies uzzināt vairāk par manu digitālo pieredzi, projektos izmantotajām tehnoloģijām vai sadarbības iespējām —
              droši sazinies. Digitālie rīki un vide ir bijusi centrāla daļa manā studiju un profesionālajā ceļā.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="firstName" class="text-sm font-medium text-d-bg dark:text-bg mb-1">Vārds</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-bg dark:bg-d-bg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div class="flex flex-col">
              <label for="lastName" class="text-sm font-medium text-d-bg dark:text-bg mb-1">Uzvārds</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-bg dark:bg-d-bg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label for="email" class="text-sm font-medium text-d-bg dark:text-bg mb-1">E-pasts</label>
            <input
              type="email"
              id="email"
              name="email"
              class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-bg dark:bg-d-bg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="flex flex-col flex-grow">
            <label for="message" class="text-sm font-medium text-d-bg dark:text-bg mb-1">Ziņojums</label>
            <textarea
              id="message"
              name="message"
              class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-bg dark:bg-d-bg text-sm resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors duration-200"
            >
              Nosūtīt
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
