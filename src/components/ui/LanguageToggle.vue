<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NeoButton from './NeoButton.vue'

const { locale } = useI18n()

const toggleLanguage = () => {
  const nextLocale = locale.value === 'id' ? 'en' : 'id'
  locale.value = nextLocale
  localStorage.setItem('lang', nextLocale)
}

const langLabel = computed(() => {
  return locale.value === 'id' ? 'EN' : 'ID'
})
</script>

<template>
  <NeoButton
    variant="white"
    size="sm"
    @click="toggleLanguage"
    :aria-label="$t('common.langToggle')"
    :title="$t('common.langToggle')"
  >
    <span class="text-sm font-extrabold uppercase">
      {{ langLabel }}
    </span>
  </NeoButton>
</template>
