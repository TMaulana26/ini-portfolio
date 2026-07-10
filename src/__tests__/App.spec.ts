import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import i18n from '../i18n'
import { createPinia, setActivePinia } from 'pinia'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('mounts and renders properly with i18n and pinia', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.text()).toContain('YOURNAME.DEV')
    expect(wrapper.text()).toContain('Your Name')
  })
})
