import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import i18n from '../i18n'
import { createPinia, setActivePinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('mounts and renders properly with i18n and pinia', () => {
    const head = createHead()
    const wrapper = mount(App, {
      global: {
        plugins: [i18n, head]
      }
    })
    expect(wrapper.text()).toContain('MTIM')
    expect(wrapper.text()).toContain('Taufik Maulana')
  })
})
