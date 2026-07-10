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
    expect(wrapper.text()).toContain('Fullstack')
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
})
