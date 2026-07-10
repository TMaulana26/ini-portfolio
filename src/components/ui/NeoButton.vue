<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'yellow' | 'cyan' | 'pink' | 'green' | 'orange' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'yellow',
  size: 'md',
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'yellow':
      return 'bg-neoYellow text-black hover:bg-yellow-400'
    case 'cyan':
      return 'bg-neoCyan text-black hover:bg-cyan-400'
    case 'pink':
      return 'bg-neoPink text-white hover:bg-pink-600'
    case 'green':
      return 'bg-neoGreen text-black hover:bg-green-400'
    case 'orange':
      return 'bg-neoOrange text-white hover:bg-orange-600'
    case 'white':
      return 'bg-white text-black hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
    case 'dark':
      return 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200'
    default:
      return 'bg-neoYellow text-black'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs font-semibold'
    case 'md':
      return 'px-5 py-2.5 text-sm font-bold'
    case 'lg':
      return 'px-8 py-4 text-base font-extrabold'
    default:
      return 'px-5 py-2.5 text-sm font-bold'
  }
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="handleClick"
    class="inline-flex items-center justify-center border-2 border-black dark:border-white rounded-none cursor-pointer select-none text-center outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white transition-all duration-150"
    :class="[
      variantClasses,
      sizeClasses,
      disabled 
        ? 'opacity-50 cursor-not-allowed shadow-none translate-x-0 translate-y-0' 
        : 'shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover dark:hover:shadow-neo-dark-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:active:shadow-none'
    ]"
  >
    <slot />
  </button>
</template>
