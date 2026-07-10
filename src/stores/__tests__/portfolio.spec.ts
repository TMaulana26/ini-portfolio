import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePortfolioStore } from '../portfolio'

describe('Portfolio Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with profile data', () => {
    const store = usePortfolioStore()
    expect(store.profile.name).toBe('Your Name')
    expect(store.profile.skills).toContain('Vue.js')
    expect(store.profile.email).toBe('yourname@example.com')
  })

  it('initializes with projects data', () => {
    const store = usePortfolioStore()
    expect(store.projects.length).toBeGreaterThan(0)
    const firstProject = store.projects[0]
    expect(firstProject).toBeDefined()
    expect(firstProject?.title.en).toBe('Retro E-Commerce Platform')
    expect(firstProject?.techStack).toContain('Vue.js')
  })
})
