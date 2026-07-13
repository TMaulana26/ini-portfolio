<script setup lang="ts">
import { usePortfolioStore } from "@/stores/portfolio";
import { useI18n } from "vue-i18n";
import NeoCard from "@/components/ui/NeoCard.vue";
import NeoBadge from "@/components/ui/NeoBadge.vue";

const store = usePortfolioStore();
const { locale } = useI18n();
</script>

<template>
  <section id="about" class="space-y-8 py-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- About & Skills Area (1/3 width on wide screens) -->
      <div class="space-y-6">
        <h2 class="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2">
          {{ $t("about.title") }}
        </h2>
        <p class="text-base text-zinc-700 dark:text-zinc-300 font-semibold leading-relaxed">
          {{ locale === "id" ? store.profile.bio.id : store.profile.bio.en }}
        </p>

        <div class="space-y-3">
          <h3 class="text-lg font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {{ $t("about.skills") }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <NeoBadge v-for="skill in store.profile.skills" :key="skill" variant="cyan">
              {{ skill }}
            </NeoBadge>
          </div>
        </div>
      </div>

      <!-- Career Timeline Area (2/3 width on wide screens) -->
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2">
          {{ $t("about.experience") }}
        </h2>

        <div
          class="relative pl-6 sm:pl-8 border-l-4 border-black dark:border-white space-y-8 ml-2 py-2"
        >
          <div v-for="item in store.timeline" :key="item.id" class="relative">
            <!-- Custom Neobrutalism timeline dot node -->
            <div
              class="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full border-4 border-black dark:border-white bg-neoYellow dark:bg-zinc-800 shadow-neo-hover dark:shadow-neo-dark-hover"
            ></div>

            <NeoCard variant="white">
              <template #header>
                <div
                  class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                >
                  <div>
                    <h3 class="text-xl font-extrabold">
                      {{ locale === "id" ? item.role.id : item.role.en }}
                    </h3>
                    <p class="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                      {{ item.company }}
                    </p>
                  </div>
                  <NeoBadge variant="pink">
                    {{ locale === "id" ? item.period.id : item.period.en }}
                  </NeoBadge>
                </div>
              </template>

              <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {{ locale === "id" ? item.description.id : item.description.en }}
              </p>
            </NeoCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
