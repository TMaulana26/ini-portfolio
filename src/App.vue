<script setup lang="ts">
import { watchEffect, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { useDark } from '@vueuse/core'
import BackgroundEffect from '@/components/ui/BackgroundEffect.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import TheFooter from '@/components/sections/TheFooter.vue'

const { t, locale } = useI18n()
const isDark = useDark()

// Dynamically synchronize the HTML lang attribute
watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale.value
  }
})

const title = computed(() => t('seo.title'))
const description = computed(() => t('seo.description'))
const canonicalUrl = 'https://mtim.my.id'

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    // Open Graph
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: 'https://mtim.my.id/images/hero.jpg',
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: 'https://mtim.my.id/images/hero.jpg',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
})
</script>

<template>
  <div class="relative min-h-screen bg-neoBg text-black dark:bg-neoDarkBg dark:text-zinc-100 transition-colors duration-150 font-sans flex flex-col justify-between">
    <!-- Dynamic Background Effect -->
    <BackgroundEffect :is-dark-mode="isDark" />

    <div class="relative z-10 flex-1 flex flex-col justify-between">
      <div>
        <AppNavbar />
        
        <main class="max-w-6xl mx-auto px-4 sm:px-8 mt-8 space-y-12">
          <!-- Hero Section -->
          <HeroSection />
          
          <!-- About & Timeline Section -->
          <TimelineSection />

          <!-- Web Projects Gallery Section -->
          <ProjectsSection />

          <!-- Contact Section -->
          <ContactSection />
        </main>
      </div>

      <!-- Footer Section -->
      <TheFooter />
    </div>
  </div>
</template>
