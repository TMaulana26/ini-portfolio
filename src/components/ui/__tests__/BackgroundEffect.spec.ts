import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BackgroundEffect from '../BackgroundEffect.vue'

describe('BackgroundEffect Component', () => {
  it('renders canvas element when isDarkMode is true', () => {
    const wrapper = mount(BackgroundEffect, {
      props: {
        isDarkMode: true
      }
    })

    expect(wrapper.find('canvas').exists()).toBe(true)
    expect(wrapper.find('.animate-float-cloud').exists()).toBe(false)
  })

  it('renders cloud elements when isDarkMode is false', () => {
    const wrapper = mount(BackgroundEffect, {
      props: {
        isDarkMode: false
      }
    })

    expect(wrapper.find('canvas').exists()).toBe(false)
    expect(wrapper.findAll('.animate-float-cloud').length).toBeGreaterThan(0)
  })
})
