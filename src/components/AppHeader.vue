<script setup>
import { ref } from 'vue'
import Logo from '@/assets/alens-requisites-logo.svg'
import ModeToggle from "@/components/DarkModeToggle.vue"
import Menu from '@/assets/menu_icon.svg'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
</script>

<template>
  <header>
    <!-- Left side -->
    <div class="absolute left-[25px] sm:left-[50px] xl:left-[75px] top-[75px]">
      <Logo class="h-14 w-auto text-d-bg dark:text-bg mb-16" />

      <!-- Desktop nav -->
      <nav
        class="hidden xl:flex flex-col gap-4 uppercase text-d-bg dark:text-bg text-sm z-10 select-none"
      >
        <RouterLink v-if="route.path !== '/'" to="/" class="transition-all duration-100 hover:pl-2">Sākums</RouterLink>
        <RouterLink v-if="route.path !== '/professionally'" to="/professionally" class="transition-all duration-100 hover:pl-2">Profesionāli</RouterLink>
        <RouterLink v-if="route.path !== '/studies'" to="/studies" class="transition-all duration-100 hover:pl-2">Studijas</RouterLink>
        <RouterLink v-if="route.path !== '/hobby'" to="/hobby" class="transition-all duration-100 hover:pl-2">Hobiji</RouterLink>
      </nav>
    </div>

    <!-- Right side -->
    <div class="absolute right-[25px] sm:right-[50px] xl:right-[75px] top-[75px] flex items-center gap-4">
      <!-- Desktop nav -->
      <nav
        class="hidden xl:flex flex-row h-14 items-center gap-8 uppercase text-d-bg dark:text-bg text-sm select-none z-10"
      >
        <RouterLink v-if="route.path !== '/contact'" to="/contact" class="hover:underline">Sazināties</RouterLink>
        <ModeToggle />
      </nav>

      <!-- Mobile menu icon -->
      <button
        class="xl:hidden z-50"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle Menu"
      >
        <Menu
          class="w-8 transition-transform duration-300 text-d-bg dark:text-bg"
          :class="mobileMenuOpen ? 'rotate-90' : 'hover:rotate-90'"
        />
      </button>
    </div>

    <!-- Mobile full-screen nav overlay -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-bg dark:bg-d-bg flex flex-col justify-center items-center gap-8 uppercase text-d-bg dark:text-bg text-xl z-40"
      >
        <RouterLink @click="mobileMenuOpen = false" to="/professionally">Profesionāli</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/studies">Studijas</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/hobby">Hobiji</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/contact">Sazināties</RouterLink>
        <ModeToggle />
      </div>
    </transition>
  </header>
</template>

<style lang="postcss">
:global(.slide-enter-from) {
  @apply opacity-0 translate-x-10;
}
:global(.slide-enter-active) {
  @apply transition-all duration-300 ease-out;
}
:global(.slide-enter-to) {
  @apply opacity-100 translate-x-0;
}
:global(.slide-leave-from) {
  @apply opacity-100 translate-x-0;
}
:global(.slide-leave-active) {
  @apply transition-all duration-200 ease-in;
}
:global(.slide-leave-to) {
  @apply opacity-0 -translate-x-10;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
