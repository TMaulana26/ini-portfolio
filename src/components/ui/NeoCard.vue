<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'white' | 'yellow' | 'cyan' | 'pink' | 'green' | 'orange' | 'dark'
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'white',
  clickable: false,
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'white':
      return 'bg-white text-black dark:bg-zinc-900 dark:text-zinc-100'
    case 'yellow':
      return 'bg-neoYellow text-black dark:bg-yellow-600 dark:text-black'
    case 'cyan':
      return 'bg-neoCyan text-black dark:bg-cyan-700 dark:text-white'
    case 'pink':
      return 'bg-neoPink text-white dark:bg-pink-800 dark:text-white'
    case 'green':
      return 'bg-neoGreen text-black dark:bg-green-700 dark:text-white'
    case 'orange':
      return 'bg-neoOrange text-white dark:bg-orange-800 dark:text-white'
    case 'dark':
      return 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
    default:
      return 'bg-white text-black dark:bg-zinc-900 dark:text-zinc-100'
  }
})
</script>

<template>
  <div
    class="border-2 border-black dark:border-white rounded-none p-6 transition-all duration-150"
    :class="[
      variantClasses,
      clickable
        ? 'cursor-pointer shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover dark:hover:shadow-neo-dark-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:active:shadow-none'
        : 'shadow-neo dark:shadow-neo-dark'
    ]"
  >
    <div v-if="$slots.header" class="border-b-2 border-black dark:border-white pb-4 mb-4">
      <slot name="header" />
    </div>
    
    <div>
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="border-t-2 border-black dark:border-white pt-4 mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>
