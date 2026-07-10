<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'yellow' | 'cyan' | 'pink' | 'green' | 'orange' | 'white' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'white',
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'yellow':
      return 'bg-neoYellow text-black'
    case 'cyan':
      return 'bg-neoCyan text-black'
    case 'pink':
      return 'bg-neoPink text-white'
    case 'green':
      return 'bg-neoGreen text-black'
    case 'orange':
      return 'bg-neoOrange text-white'
    case 'white':
      return 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-100'
    case 'dark':
      return 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
    default:
      return 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-100'
  }
})
</script>

<template>
  <span
    class="inline-block border-2 border-black dark:border-white px-2.5 py-1 text-xs font-extrabold select-none"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>
