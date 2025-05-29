import { ref, watchEffect, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'system')

export default function useDarkMode() {
  const applyTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme.value === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.toggle('dark', prefersDark)
    }

    localStorage.setItem('theme', theme.value)
  }

  onMounted(() => {
    applyTheme()
    

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (theme.value === 'system') {
        document.documentElement.classList.toggle('dark', e.matches)
      }
      
    }
    mediaQuery.addEventListener('change', handler)
  })

  watchEffect(() => {
   
    applyTheme()
  })

  const toggleTheme = () => {
    theme.value =
      theme.value === 'light'
        ? 'dark'
        : theme.value === 'dark'
        ? 'system'
        : 'light'
  }

  return { theme, toggleTheme }
}
