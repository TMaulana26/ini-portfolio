<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import NeoButton from '@/components/ui/NeoButton.vue'
import { Github, Linkedin } from 'lucide-vue-next'

const store = usePortfolioStore()
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t-4 border-black dark:border-white bg-white dark:bg-zinc-950 py-8 px-8 mt-16 transition-colors duration-150">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
      <!-- Brand & Copyright -->
      <div class="text-center md:text-left space-y-1">
        <p class="text-lg font-black tracking-wider uppercase">
          {{ $t('navbar.logo') }}
        </p>
        <p class="text-xs font-bold text-zinc-500 dark:text-zinc-400">
          {{ $t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>

      <!-- Social Media Icons -->
      <div class="flex items-center gap-3">
        <a 
          :href="store.profile.github" 
          target="_blank" 
          rel="noopener noreferrer"
          :aria-label="$t('footer.github')"
        >
          <NeoButton variant="white" size="sm" class="!p-2.5">
            <Github class="w-5 h-5" />
          </NeoButton>
        </a>

        <a 
          :href="store.profile.linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          :aria-label="$t('footer.linkedin')"
        >
          <NeoButton variant="white" size="sm" class="!p-2.5">
            <Linkedin class="w-5 h-5" />
          </NeoButton>
        </a>
      </div>

    </div>
  </footer>
</template>
