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
    
    expect(wrapper.text().toLowerCase()).toContain('tentang saya')
    expect(wrapper.text().toLowerCase()).toContain('keahlian teknis')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('PHP')
  })

  it('renders career experience items in chronological order', () => {
    const wrapper = mount(TimelineSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Pengembang Web (Pengembang Front-End & Back-End)')
    expect(wrapper.text()).toContain('PT FAN Integrasi Teknologi')
    expect(wrapper.text()).toContain('Februari 2025 - Sekarang')
    
    expect(wrapper.text()).toContain('Pengembang Full-Stack PHP')
    expect(wrapper.text()).toContain('PT Lumos Inisiatif Indonesia')
    expect(wrapper.text()).toContain('Oktober 2024 - Januari 2025')
  })
})
