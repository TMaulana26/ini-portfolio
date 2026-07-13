import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'
import i18n from '@/i18n'
import type { Project } from '@/stores/portfolio'

const mockProject: Project = {
  id: 'test-1',
  title: {
    id: 'Proyek Uji Coba',
    en: 'Test Project',
  },
  description: {
    id: 'Deskripsi uji coba.',
    en: 'Test description.',
  },
  longDescription: {
    id: 'Deskripsi panjang uji coba.',
    en: 'Long test description.',
  },
  techStack: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
  category: 'Fullstack',
  demoUrl: 'https://demo.example.com',
  githubUrl: 'https://github.com/test/project',
  featured: true,
  image: '/images/test-project.png',
  accessMode: 'standard',
}

describe('ProjectCard.vue', () => {
  it('renders project title, description, and badges correctly', () => {
    const wrapper = mount(ProjectCard, {
      global: {
        plugins: [i18n]
      },
      props: {
        project: mockProject
      }
    })
    
    expect(wrapper.text()).toContain('Proyek Uji Coba')
    expect(wrapper.text()).toContain('Deskripsi uji coba.')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('FULLSTACK')
  })

  it('renders action links with correct target and href', () => {
    const wrapper = mount(ProjectCard, {
      global: {
        plugins: [i18n]
      },
      props: {
        project: mockProject
      }
    })
    
    const githubLink = wrapper.find('a[href="https://github.com/test/project"]')
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.attributes('target')).toBe('_blank')

    const demoLink = wrapper.find('a[href="https://demo.example.com"]')
    expect(demoLink.exists()).toBe(true)
    expect(demoLink.attributes('target')).toBe('_blank')
  })

  it('hides all action buttons when project accessMode is internal', () => {
    const internalProject: Project = {
      ...mockProject,
      accessMode: 'internal'
    }
    const wrapper = mount(ProjectCard, {
      global: {
        plugins: [i18n]
      },
      props: {
        project: internalProject
      }
    })
    
    // Links or buttons should be completely hidden
    expect(wrapper.find('a[href="https://github.com/test/project"]').exists()).toBe(false)
    expect(wrapper.find('a[href="https://demo.example.com"]').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('View Code')
    expect(wrapper.text()).not.toContain('Live Demo')
  })

  it('shows View Code link but hides Live Demo link when project accessMode is coming_soon', () => {
    const comingSoonProject: Project = {
      ...mockProject,
      accessMode: 'coming_soon'
    }
    const wrapper = mount(ProjectCard, {
      global: {
        plugins: [i18n]
      },
      props: {
        project: comingSoonProject
      }
    })
    
    // View Code should be visible
    const githubLink = wrapper.find('a[href="https://github.com/test/project"]')
    expect(githubLink.exists()).toBe(true)
    
    // Live Demo should be hidden
    const demoLink = wrapper.find('a[href="https://demo.example.com"]')
    expect(demoLink.exists()).toBe(false)
  })
})
