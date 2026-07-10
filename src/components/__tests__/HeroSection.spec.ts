import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'
import i18n from '@/i18n'
import { createPinia, setActivePinia } from 'pinia'

describe('HeroSection.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders greeting and developer role correctly', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Halo, Saya Your Name')
    expect(wrapper.text()).toContain('Pengembang Web Fullstack & Desainer UI/UX')
  })

  it('renders CV download button and contact button correctly', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    const downloadLink = wrapper.find('a[download]')
    expect(downloadLink.exists()).toBe(true)
    expect(downloadLink.attributes('href')).toBe('/dummy-resume.pdf')

    const contactLink = wrapper.find('a[href="#contact"]')
    expect(contactLink.exists()).toBe(true)
  })
})
