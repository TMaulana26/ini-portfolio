<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'
import NeoButton from './NeoButton.vue'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <NeoButton
    variant="white"
    size="sm"
    @click="toggleDark()"
    :aria-label="$t('common.themeToggle')"
    :title="$t('common.themeToggle')"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-neoYellow" />
    <Moon v-else class="w-5 h-5 text-zinc-900" />
  </NeoButton>
</template>
