import { ref, watchEffect } from 'vue'

const isDark = ref(false)

watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})

const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const initDarkMode = () => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

initDarkMode()

export function useDarkMode() {
  return {
    isDark,
    toggleDark
  }
}
