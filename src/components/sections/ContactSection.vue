<script setup lang="ts">
import { ref, reactive } from 'vue'
import NeoCard from '@/components/ui/NeoCard.vue'
import NeoButton from '@/components/ui/NeoButton.vue'
import { Send, CheckCircle2 } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

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

const handleSubmit = () => {
  if (!validateForm()) return

  isSubmitting.value = true
  
  // Simulate API post
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    
    // Clear form
    form.name = ''
    form.email = ''
    form.message = ''
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 1500)
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
            rows="5"
            :placeholder="$t('contact.placeholderMessage')"
            class="border-2 border-black dark:border-white rounded-none p-3 font-bold bg-white text-black dark:bg-zinc-800 dark:text-zinc-100 outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-neo-hover dark:focus:shadow-neo-dark-hover transition-all resize-none"
            :class="{ 'border-neoPink dark:border-neoPink': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-neoPink font-extrabold text-xs mt-0.5">
            {{ $t(errors.message) }}
          </p>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <NeoButton
            type="submit"
            variant="yellow"
            :disabled="isSubmitting"
            class="w-full gap-2 py-3"
          >
            <Send class="w-4 h-4" />
            {{ isSubmitting ? $t('contact.sending') : $t('contact.submit') }}
          </NeoButton>
        </div>
      </form>
    </NeoCard>
  </section>
</template>
