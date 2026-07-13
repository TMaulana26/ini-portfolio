<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/stores/portfolio'
import NeoCard from '@/components/ui/NeoCard.vue'
import NeoBadge from '@/components/ui/NeoBadge.vue'
import NeoButton from '@/components/ui/NeoButton.vue'
import { Github, ExternalLink } from 'lucide-vue-next'

const props = defineProps<{
  project: Project
}>()

const { locale } = useI18n()

const localizedTitle = computed(() => {
  return locale.value === 'id' ? props.project.title.id : props.project.title.en
})

const localizedDescription = computed(() => {
  return locale.value === 'id' ? props.project.description.id : props.project.description.en
})

// Assign a consistent neobrutalism color based on project category
const headerBgClass = computed(() => {
  switch (props.project.category) {
    case 'Fullstack':
      return 'bg-neoPink text-white'
    case 'Frontend':
      return 'bg-neoCyan text-black'
    case 'Backend':
      return 'bg-neoYellow text-black'
    default:
      return 'bg-neoGreen text-black'
  }
})

// Map the project category to a Neobrutalist NeoBadge variant
const categoryBadgeVariant = computed(() => {
  switch (props.project.category) {
    case 'Fullstack':
      return 'pink'
    case 'Frontend':
      return 'cyan'
    case 'Backend':
      return 'yellow'
    default:
      return 'green'
  }
})
</script>

<template>
  <NeoCard variant="white" class="flex flex-col h-full overflow-hidden !p-0">
    <!-- Card Cover/Screenshot or Mockup Pattern -->
    <div 
      class="h-48 border-b-2 border-black dark:border-white relative overflow-hidden select-none"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="localizedTitle"
        class="w-full h-full object-cover object-center"
      />
      <div 
        v-else
        class="w-full h-full flex items-center justify-center"
        :class="headerBgClass"
      >
        <span class="text-4xl font-black uppercase tracking-widest italic select-none">
          {{ project.category }}
        </span>
      </div>
      <!-- Floating Category Badge Overlay -->
      <NeoBadge 
        :variant="categoryBadgeVariant" 
        class="absolute top-3 right-3 shadow-neo border-2 border-black dark:border-white"
      >
        {{ project.category.toUpperCase() }}
      </NeoBadge>
    </div>

    <!-- Card Content -->
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div class="space-y-4">
        <h3 class="text-xl font-black uppercase tracking-tight">
          {{ localizedTitle }}
        </h3>
        
        <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-3">
          {{ localizedDescription }}
        </p>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-1.5 pt-2">
          <NeoBadge 
            v-for="tech in project.techStack" 
            :key="tech" 
            variant="white"
          >
            {{ tech }}
          </NeoBadge>
        </div>
      </div>

      <!-- Action Buttons -->
      <div 
        v-if="project.accessMode !== 'internal'"
        class="flex items-center gap-3 pt-6 border-t-2 border-black dark:border-white/20 mt-6"
      >
        <a 
          v-if="project.githubUrl && (project.accessMode === 'standard' || project.accessMode === 'coming_soon')" 
          :href="project.githubUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1"
        >
          <NeoButton variant="white" size="sm" class="w-full gap-2">
            <Github class="w-4 h-4" />
            {{ $t('projects.viewCode') }}
          </NeoButton>
        </a>
        
        <a 
          v-if="project.demoUrl && project.accessMode === 'standard'" 
          :href="project.demoUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1"
        >
          <NeoButton variant="yellow" size="sm" class="w-full gap-2">
            <ExternalLink class="w-4 h-4" />
            {{ $t('projects.liveDemo') }}
          </NeoButton>
        </a>
      </div>
    </div>
  </NeoCard>
</template>
