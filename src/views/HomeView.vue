<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'

const x = ref(0)
const y = ref(0)
const container = ref(null)

function handleMouse(e) {
  if (!container.value) return
  const bounds = container.value.getBoundingClientRect()
  const centerX = bounds.width / 3
  const centerY = bounds.height / 3
  const offsetX = (e.clientX - centerX) * -0.03
  const offsetY = (e.clientY - centerY) * -0.03

  x.value = offsetX
  y.value = offsetY
}

</script>

<template>
  <div class="relative h-screen w-full max-w-[1545px] overflow-hidden flex flex-col items-center justify-end" ref="container" @mousemove="handleMouse">
    <AppHeader />
    <div
      class="absolute w-[500px] sm:w-[600px] md:w-[650px] lg:w-[700px] aspect-square bottom-0 rounded-full bg-bg-w dark:bg-d-bg-d transition-transform duration-50 z-0"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    ></div>

    <div class="xl:absolute xl:bottom-[300px] xl:left-[100px] text-d-bg dark:text-bg select-none z-10">
      <h1 class="font-semibold text-2xl lg:text-4xl">Mana digitālā pieredze<br>Latvijas Universitātē</h1>
      <p class="text-sm md:text-md lg:text-lg">Studiju kurss DatZB021 : Tīmekļa dizaina pamati</p>
    </div>

    <img
      src="@/assets/portrait.png"
      alt="You"
      class="relative select-none z-10 w-[400px] md:w-[500px] xl:w-[600px] h-auto object-contain z-0 pointer-events-none"
    />
  </div>
</template>
