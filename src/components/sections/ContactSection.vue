<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import NeoCard from '@/components/ui/NeoCard.vue'
import NeoButton from '@/components/ui/NeoButton.vue'
import { Send, CheckCircle2 } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  message: '',
  fax_number: '', // Honeypot field
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const cooldownSeconds = ref(0)
let cooldownInterval: ReturnType<typeof setInterval> | null = null

// Load API URL from Vite environment variables
const apiUrl = (import.meta.env.VITE_CONTACT_API_URL || '') as string

const sanitizeInput = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

const startCooldownTimer = (seconds: number) => {
  cooldownSeconds.value = seconds
  if (cooldownInterval) clearInterval(cooldownInterval)
  cooldownInterval = setInterval(() => {
    if (cooldownSeconds.value > 1) {
      cooldownSeconds.value -= 1
    } else {
      cooldownSeconds.value = 0
      if (cooldownInterval) {
        clearInterval(cooldownInterval)
        cooldownInterval = null
      }
    }
  }, 1000)
}

const checkCooldown = () => {
  if (typeof localStorage === 'undefined' || !localStorage.getItem) return
  const lastSubmit = localStorage.getItem('portfolio_contact_last_submit')
  if (lastSubmit) {
    const elapsed = Date.now() - parseInt(lastSubmit, 10)
    const remaining = Math.ceil((60000 - elapsed) / 1000)
    if (remaining > 0 && remaining <= 60) {
      startCooldownTimer(remaining)
    }
  }
}

onMounted(() => {
  checkCooldown()
})

onUnmounted(() => {
  if (cooldownInterval) clearInterval(cooldownInterval)
})

const validateForm = (): boolean => {
  let isValid = true
  
  // Validate Name
  if (!form.name.trim()) {
    errors.name = 'contact.errorNameRequired'
    isValid = false
  } else {
    errors.name = ''
  }

  // Validate Email
  if (!form.email.trim()) {
    errors.email = 'contact.errorEmailRequired'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'contact.errorEmailInvalid'
    isValid = false
  } else {
    errors.email = ''
  }

  // Validate Message
  if (!form.message.trim()) {
    errors.message = 'contact.errorMessageRequired'
    isValid = false
  } else {
    errors.message = ''
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  if (cooldownSeconds.value > 0) return

  // Honeypot check: if filled, simulate success silently to mislead bots
  if (form.fax_number) {
    isSuccess.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    form.fax_number = ''
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    return
  }

  // Sanitize script inputs
  form.name = sanitizeInput(form.name)
  form.email = sanitizeInput(form.email)
  form.message = sanitizeInput(form.message)

  isSubmitting.value = true

  const payload = {
    name: form.name,
    email: form.email,
    message: form.message,
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      isSuccess.value = true
      
      // Store submit timestamp for local rate limiting
      if (typeof localStorage !== 'undefined' && localStorage.setItem) {
        localStorage.setItem('portfolio_contact_last_submit', Date.now().toString())
      }
      startCooldownTimer(60)

      // Clear Form fields
      form.name = ''
      form.email = ''
      form.message = ''

      setTimeout(() => {
        isSuccess.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Failed to submit form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="max-w-xl mx-auto py-4">
    <h2 class="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2 mb-8">
      {{ $t('contact.title') }}
    </h2>

    <NeoCard variant="white">
      <!-- Success Alert Card -->
      <div 
        v-if="isSuccess"
        class="border-2 border-black dark:border-white p-4 mb-6 bg-neoGreen text-black font-extrabold flex items-center gap-3 shadow-neo"
      >
        <CheckCircle2 class="w-6 h-6 shrink-0" />
        <span>{{ $t('contact.success') }}</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div class="flex flex-col gap-2">
          <label for="name" class="font-extrabold text-sm uppercase">
            {{ $t('contact.name') }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            :placeholder="$t('contact.placeholderName')"
            class="border-2 border-black dark:border-white rounded-none p-3 font-bold bg-white text-black dark:bg-zinc-800 dark:text-zinc-100 outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-neo-hover dark:focus:shadow-neo-dark-hover transition-all"
            :class="{ 'border-neoPink dark:border-neoPink': errors.name }"
          />
          <p v-if="errors.name" class="text-neoPink font-extrabold text-xs mt-0.5">
            {{ $t(errors.name) }}
          </p>
        </div>

        <!-- Email Field -->
        <div class="flex flex-col gap-2">
          <label for="email" class="font-extrabold text-sm uppercase">
            {{ $t('contact.email') }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="text"
            name="email"
            :placeholder="$t('contact.placeholderEmail')"
            class="border-2 border-black dark:border-white rounded-none p-3 font-bold bg-white text-black dark:bg-zinc-800 dark:text-zinc-100 outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-neo-hover dark:focus:shadow-neo-dark-hover transition-all"
            :class="{ 'border-neoPink dark:border-neoPink': errors.email }"
          />
          <p v-if="errors.email" class="text-neoPink font-extrabold text-xs mt-0.5">
            {{ $t(errors.email) }}
          </p>
        </div>

        <!-- Message Field -->
        <div class="flex flex-col gap-2">
          <label for="message" class="font-extrabold text-sm uppercase">
            {{ $t('contact.message') }}
          </label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="5"
            :placeholder="$t('contact.placeholderMessage')"
            class="border-2 border-black dark:border-white rounded-none p-3 font-bold bg-white text-black dark:bg-zinc-800 dark:text-zinc-100 outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-neo-hover dark:focus:shadow-neo-dark-hover transition-all resize-none"
            :class="{ 'border-neoPink dark:border-neoPink': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-neoPink font-extrabold text-xs mt-0.5">
            {{ $t(errors.message) }}
          </p>
        </div>

        <!-- Honeypot Field (visually hidden) -->
        <div class="hidden" aria-hidden="true">
          <label for="fax_number">{{ $t('contact.faxNumber') }}</label>
          <input
            id="fax_number"
            v-model="form.fax_number"
            type="text"
            name="fax_number"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <NeoButton
            type="submit"
            variant="yellow"
            :disabled="isSubmitting || cooldownSeconds > 0"
            class="w-full gap-2 py-3"
          >
            <Send class="w-4 h-4" />
            <span v-if="cooldownSeconds > 0">
              {{ $t('contact.cooldown', { seconds: cooldownSeconds }) }}
            </span>
            <span v-else>
              {{ isSubmitting ? $t('contact.sending') : $t('contact.submit') }}
            </span>
          </NeoButton>
        </div>
      </form>
    </NeoCard>
  </section>
</template>
