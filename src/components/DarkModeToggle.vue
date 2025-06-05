<script setup>
import SunIcon from '@/assets/light_icon.svg'
import MoonIcon from '@/assets/dark_icon.svg'
import { useDarkMode } from '@/composables/useDarkMode.js'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <button
    @click="toggleDark"
    class="relative w-20 h-10 rounded-full flex items-center px-1 transition-colors duration-300"
    :class="isDark ? 'bg-bg' : 'bg-d-bg'"
  >
    <component :is="SunIcon"
               class="absolute left-2 w-4 h-4 text-gray-400 pointer-events-none"
    />
    <component :is="MoonIcon"
               class="absolute right-2 w-4 h-4 text-gray-400 pointer-events-none"
    />
    <div
      class="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
      :class="[
        'bg-blue-600',
        isDark ? 'translate-x-[40px]' : 'translate-x-0'
      ]"
    >
      <component
        :is="isDark ? MoonIcon : SunIcon"
        class="w-4 h-4 text-white"
      />
    </div>
  </button>
</template>

<style scoped>

</style>
