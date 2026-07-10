import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TimelineSection from '../TimelineSection.vue'
import i18n from '@/i18n'
import { createPinia, setActivePinia } from 'pinia'

describe('TimelineSection.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders about section and skills badges correctly', () => {
    const wrapper = mount(TimelineSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Tentang Saya')
    expect(wrapper.text()).toContain('Keahlian Teknis')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('TypeScript')
  })

  it('renders career experience items in chronological order', () => {
    const wrapper = mount(TimelineSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Junior Web Developer')
    expect(wrapper.text()).toContain('Teknologi Jaya')
    expect(wrapper.text()).toContain('Agustus 2024 - Januari 2025')
    
    expect(wrapper.text()).toContain('Fullstack Web Developer')
    expect(wrapper.text()).toContain('Karya Kreatif Mandiri')
    expect(wrapper.text()).toContain('Februari 2025 - Sekarang')
  })
})
