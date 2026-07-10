import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'
import i18n from '@/i18n'
import { createPinia, setActivePinia } from 'pinia'

describe('ContactSection.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  it('renders labels and inputs correctly', () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    expect(wrapper.text()).toContain('Hubungi Saya')
    expect(wrapper.text()).toContain('Nama Lengkap')
    expect(wrapper.text()).toContain('Alamat Email')
    expect(wrapper.text()).toContain('Pesan Anda')
  })

  it('shows validation errors when fields are empty', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.text()).toContain('Nama lengkap wajib diisi.')
    expect(wrapper.text()).toContain('Alamat email wajib diisi.')
    expect(wrapper.text()).toContain('Pesan wajib diisi.')
  })

  it('shows email format error when email is invalid', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('invalid-email')
    await wrapper.find('textarea#message').setValue('Hello world')
    
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.text()).toContain('Format alamat email tidak valid.')
  })

  it('submits successfully when form is valid', async () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    
    await wrapper.find('input#name').setValue('Ahmad')
    await wrapper.find('input#email').setValue('ahmad@example.com')
    await wrapper.find('textarea#message').setValue('Hello world')
    
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.text()).toContain('Mengirim...')
    
    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain('Pesan Anda telah berhasil dikirim! Terima kasih.')
  })
})
