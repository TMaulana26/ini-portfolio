<script setup lang="ts">
import { usePortfolioStore } from "@/stores/portfolio";
import { useI18n } from "vue-i18n";
import NeoCard from "@/components/ui/NeoCard.vue";
import NeoButton from "@/components/ui/NeoButton.vue";
import { Download, MessageSquare } from "lucide-vue-next";

const store = usePortfolioStore();
const { locale } = useI18n();
</script>

<template>
  <NeoCard variant="white" class="relative overflow-hidden">
    <div class="flex flex-col md:flex-row gap-8 items-center py-6">
      <div class="flex-1 space-y-6">
        <div
          class="inline-block border-2 border-black dark:border-white px-3 py-1 bg-neoCyan text-black font-extrabold text-sm uppercase tracking-wider"
        >
          {{ $t("hero.greeting") }} {{ store.profile.name }}
        </div>

        <h1 class="text-4xl sm:text-5xl font-black leading-none">
          {{ locale === "id" ? store.profile.role.id : store.profile.role.en }}
        </h1>

        <p
          class="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-semibold"
        >
          {{ $t("hero.description") }}
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <!-- Download CV Link -->
          <a href="/resume/CV_Taufik_Maulana_ATS_Friendly.pdf" download>
            <NeoButton variant="yellow" class="gap-2">
              <Download class="w-4 h-4" />
              {{ $t("hero.cta_download") }}
            </NeoButton>
          </a>

          <!-- Contact Me Link -->
          <a href="#contact">
            <NeoButton variant="white" class="gap-2">
              <MessageSquare class="w-4 h-4" />
              {{ $t("hero.cta_contact") }}
            </NeoButton>
          </a>
        </div>
      </div>

      <!-- Decorative Neobrutalism Graphic/Avatar -->
      <div
        class="w-48 h-48 sm:w-64 sm:h-64 border-4 border-black dark:border-white bg-neoPink relative shadow-neo dark:shadow-neo-dark shrink-0 overflow-hidden"
      >
        <img
          :src="'/images/hero.jpg'"
          alt="Taufik Maulana"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </NeoCard>
</template>
