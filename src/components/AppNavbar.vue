<script setup lang="ts">
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import LanguageToggle from '@/components/ui/LanguageToggle.vue'
</script>

<template>
  <nav class="sticky top-0 z-50 bg-neoBg dark:bg-neoDarkBg border-b-4 border-black dark:border-white py-4 px-8 transition-colors duration-150">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <a href="#" class="text-xl font-extrabold tracking-wider border-2 border-black dark:border-white px-3 py-1 bg-neoYellow dark:bg-zinc-800 text-black dark:text-zinc-100 shadow-neo-hover dark:shadow-neo-dark-hover">
        {{ $t('navbar.logo') }}
      </a>
      
      <div class="flex items-center gap-6">
        <div class="flex gap-4 font-bold text-sm">
          <a href="#about" class="hover:underline transition-all">
            {{ $t('navbar.about') }}
          </a>
          <a href="#projects" class="hover:underline transition-all">
            {{ $t('navbar.projects') }}
          </a>
          <a href="#contact" class="hover:underline transition-all">
            {{ $t('navbar.contact') }}
          </a>
        </div>
        
        <div class="h-6 w-[2px] bg-black dark:bg-white"></div>
        
        <div class="flex gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>
