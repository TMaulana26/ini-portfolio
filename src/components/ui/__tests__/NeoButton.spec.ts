import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NeoButton from '../NeoButton.vue'
import i18n from '@/i18n'

describe('NeoButton.vue', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(NeoButton, {
      global: {
        plugins: [i18n]
      },
      slots: {
        default: 'Click Me'
      }
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('applies correct variant and size classes', () => {
    const wrapper = mount(NeoButton, {
      global: {
        plugins: [i18n]
      },
      props: {
        variant: 'cyan',
        size: 'sm'
      }
    })
    expect(wrapper.classes()).toContain('bg-neoCyan')
    expect(wrapper.classes()).toContain('px-3')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(NeoButton, {
      global: {
        plugins: [i18n]
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(NeoButton, {
      global: {
        plugins: [i18n]
      },
      props: {
        disabled: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
    expect(wrapper.classes()).toContain('opacity-50')
  })
})
