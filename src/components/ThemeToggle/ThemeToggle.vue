<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-24 left-6 md:bottom-24 md:left-16 rounded-full 
           w-12 h-12 md:w-16 md:h-16 
           bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] 
           text-[var(--color-black)] dark:text-[var(--button-text-light)] flex items-center justify-center gap-2 shadow-lg z-50"
  >
    <Sun v-if="theme === 'light'" class="w-6 h-6 md:w-7 md:h-7" />
    <Moon v-else-if="theme === 'dark'" class="w-6 h-6 md:w-7 md:h-7" />
    <Monitor v-else class="w-6 h-6 md:w-7 md:h-7" />
  </button>
</template>

<script setup>
import { Sun, Moon, Monitor } from 'lucide-vue-next' 
import useDarkMode from '../../composables/useDarkMode' 

const { theme, toggleTheme } = useDarkMode()
</script>

