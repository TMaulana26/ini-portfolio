<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'
import ProjectCard from '@/components/common/ProjectCard.vue'

const store = usePortfolioStore()
</script>

<template>
  <section id="projects" class="space-y-8 py-4">
    <h2 class="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2">
      {{ $t('projects.title') }}
    </h2>
    
    <div 
      v-if="store.projects.length === 0" 
      class="border-2 border-black dark:border-white p-12 text-center bg-white dark:bg-zinc-900 shadow-neo dark:shadow-neo-dark"
    >
      <p class="text-lg font-bold text-zinc-500">
        {{ $t('projects.empty') }}
      </p>
    </div>
    
    <div 
      v-else 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard 
        v-for="project in store.projects" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </section>
</template>
