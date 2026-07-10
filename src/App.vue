<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import TheFooter from '@/components/sections/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-neoBg text-black dark:bg-neoDarkBg dark:text-zinc-100 transition-colors duration-150 font-sans flex flex-col justify-between">
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
</template>
