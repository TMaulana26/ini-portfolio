import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import i18n from '../i18n'
import { createPinia, setActivePinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

describe('SEO & i18n Lang Synchronization', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    document.documentElement.lang = ''
  })

  it('updates HTML lang attribute dynamically when i18n locale switches', async () => {
    const head = createHead()
    mount(App, {
      global: {
        plugins: [i18n, head]
      }
    })

    // Initially, locale is 'id' (Indonesian default)
    expect(document.documentElement.lang).toBe('id')

    // Switch locale to 'en'
    i18n.global.locale.value = 'en'
    
    // Allow Vue to trigger watchEffect microtasks
    await Promise.resolve()
    
    expect(document.documentElement.lang).toBe('en')

    // Restore locale to default 'id'
    i18n.global.locale.value = 'id'
    await Promise.resolve()
    expect(document.documentElement.lang).toBe('id')
  })
})
