<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps<{
  isDarkMode: boolean;
}>();

// Canvas elements reference
const starryCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number | null = null;

// Star particle interface
interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  decreasing: boolean;
}

const stars = ref<Star[]>([]);

// Create star particles based on window dimensions
const generateStars = (width: number, height: number) => {
  const count = Math.floor((width * height) / 8000); // Density ratio
  const tempStars: Star[] = [];
  for (let i = 0; i < count; i++) {
    tempStars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1, // Size between 1px and 3px
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005, // Subtle speed
      decreasing: Math.random() > 0.5,
    });
  }
  stars.value = tempStars;
};

// Update star opacities and draw them
const drawStarryNight = () => {
  if (!starryCanvas.value || !ctx) return;

  const canvas = starryCanvas.value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each star
  stars.value.forEach((star) => {
    // Fluctuating alpha for twinkling effect
    if (star.decreasing) {
      star.alpha -= star.speed;
      if (star.alpha <= 0.2) {
        star.alpha = 0.2;
        star.decreasing = false;
      }
    } else {
      star.alpha += star.speed;
      if (star.alpha >= 1) {
        star.alpha = 1;
        star.decreasing = true;
      }
    }

    ctx!.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx!.beginPath();
    ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx!.fill();
  });

  animationFrameId = requestAnimationFrame(drawStarryNight);
};

// Handle window resizing
const handleResize = () => {
  if (!starryCanvas.value) return;
  const canvas = starryCanvas.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateStars(canvas.width, canvas.height);
};

// Stop the canvas rendering loop to conserve CPU/GPU
const stopStarryNight = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (ctx && starryCanvas.value) {
    ctx.clearRect(0, 0, starryCanvas.value.width, starryCanvas.value.height);
  }
};

// Initialize the starry night canvas loop
const initStarryNight = () => {
  stopStarryNight();
  if (!starryCanvas.value) return;

  const canvas = starryCanvas.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  generateStars(canvas.width, canvas.height);
  drawStarryNight();
};

// Watch for theme toggles to start or stop canvas calculations
watch(
  () => props.isDarkMode,
  (newValue) => {
    if (typeof window === 'undefined') return;
    if (newValue) {
      // Small timeout to allow canvas element to render in DOM under v-if
      setTimeout(() => {
        initStarryNight();
        window.addEventListener("resize", handleResize);
      }, 50);
    } else {
      stopStarryNight();
      window.removeEventListener("resize", handleResize);
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (props.isDarkMode) {
    initStarryNight();
    window.addEventListener("resize", handleResize);
  }
});

onUnmounted(() => {
  stopStarryNight();
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", handleResize);
  }
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
    <!-- Starry Night Background Effect for Dark Mode -->
    <canvas
      v-if="isDarkMode"
      ref="starryCanvas"
      class="absolute inset-0 w-full h-full block bg-transparent"
    ></canvas>

    <!-- Clouded Sky Background Effect for Light Mode -->
    <div v-else class="absolute inset-0 w-full h-full bg-transparent overflow-hidden">
      <!-- Cloud 1 -->
      <div
        class="absolute top-[10%] animate-float-cloud"
        style="animation-duration: 80s; animation-delay: 0s"
      >
        <div class="relative w-128 h-48 transform scale-50 md:scale-75 origin-top-left">
          <img
            :src="'/images/clouds.svg'"
            class="w-full h-full object-contain select-none"
            alt="cloud"
          />
        </div>
      </div>

      <!-- Cloud 2 -->
      <div
        class="absolute top-[28%] animate-float-cloud"
        style="animation-duration: 110s; animation-delay: -30s"
      >
        <div class="relative w-128 h-48 transform scale-75 md:scale-100 origin-top-left">
          <img
            :src="'/images/clouds.svg'"
            class="w-full h-full object-contain select-none"
            style="transform: scaleX(-1)"
            alt="cloud"
          />
        </div>
      </div>

      <!-- Cloud 3 -->
      <div
        class="absolute top-[55%] animate-float-cloud"
        style="animation-duration: 95s; animation-delay: -60s"
      >
        <div class="relative w-128 h-48 transform scale-60 md:scale-90 origin-top-left">
          <img
            :src="'/images/clouds.svg'"
            class="w-full h-full object-contain select-none"
            alt="cloud"
          />
        </div>
      </div>

      <!-- Cloud 4 -->
      <div
        class="absolute top-[78%] animate-float-cloud"
        style="animation-duration: 130s; animation-delay: -90s"
      >
        <div class="relative w-128 h-48 transform scale-80 md:scale-110 origin-top-left">
          <img
            :src="'/images/clouds.svg'"
            class="w-full h-full object-contain select-none"
            style="transform: scaleX(-1)"
            alt="cloud"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float-left-loop {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-float-cloud {
  animation: float-left-loop linear infinite;
  will-change: transform;
}
</style>
