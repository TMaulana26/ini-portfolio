import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface MultilingualText {
  id: string
  en: string
}

export interface Project {
  id: string
  title: MultilingualText
  description: MultilingualText
  longDescription: MultilingualText
  techStack: string[]
  category: 'Frontend' | 'Backend' | 'Fullstack'
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Profile {
  name: string
  role: MultilingualText
  bio: MultilingualText
  email: string
  github: string
  linkedin: string
  skills: string[]
}

export interface TimelineItem {
  id: string
  role: MultilingualText
  company: string
  period: MultilingualText
  description: MultilingualText
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const profile = ref<Profile>({
    name: 'Your Name',
    role: {
      id: 'Pengembang Web Fullstack & Desainer UI/UX',
      en: 'Full-Stack Web Developer & UI/UX Designer',
    },
    bio: {
      id: 'Saya adalah seorang pengembang web profesional yang berfokus pada pembangunan aplikasi web berkinerja tinggi, responsif, dan ramah pengguna dengan desain visual yang unik dan premium.',
      en: 'I am a professional web developer focused on building high-performance, responsive, and user-friendly web applications with unique and premium visual designs.',
    },
    email: 'yourname@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    skills: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Vitest'],
  })

  const projects = ref<Project[]>([
    {
      id: '1',
      title: {
        id: 'Platform E-Commerce Retro',
        en: 'Retro E-Commerce Platform',
      },
      description: {
        id: 'Toko online bertema retro dengan keranjang belanja real-time, integrasi pembayaran, dan panel admin.',
        en: 'A retro-themed online shop featuring real-time shopping cart, payment integration, and admin dashboard.',
      },
      longDescription: {
        id: 'Platform e-commerce lengkap dengan arsitektur modern namun dibalut dengan estetika desain Neobrutalism retro. Dilengkapi manajemen inventaris otomatis, ulasan produk dinamis, dan integrasi gerbang pembayaran simulasi.',
        en: 'A complete e-commerce platform built with modern architecture but wrapped in a retro Neobrutalism design aesthetic. Features automated inventory management, dynamic product reviews, and mock payment gateway integration.',
      },
      techStack: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      category: 'Fullstack',
      demoUrl: 'https://retro-shop.example.com',
      githubUrl: 'https://github.com/example/retro-shop',
      featured: true,
    },
    {
      id: '2',
      title: {
        id: 'Aplikasi Kanban Kolaboratif',
        en: 'Collaborative Kanban Application',
      },
      description: {
        id: 'Papan manajemen tugas visual dengan kolaborasi instan, drag-and-drop, dan pelacakan waktu.',
        en: 'A visual task management board with instant collaboration, drag-and-drop, and time tracking.',
      },
      longDescription: {
        id: 'Aplikasi manajemen tugas tim terinspirasi dari Trello dengan pembaruan instan menggunakan WebSocket. Mendukung pembuatan kolom kustom, label warna neobrutalism, prioritas tugas, dan ekspor riwayat aktivitas.',
        en: 'A team task management application inspired by Trello with instant updates using WebSockets. Supports custom columns, neobrutalism color-coded labels, task prioritization, and activity log exports.',
      },
      techStack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Express', 'Socket.io'],
      category: 'Fullstack',
      demoUrl: 'https://kanban.example.com',
      githubUrl: 'https://github.com/example/kanban-app',
      featured: true,
    },
    {
      id: '3',
      title: {
        id: 'Dasbor Analitik Cuaca',
        en: 'Weather Analytics Dashboard',
      },
      description: {
        id: 'Dasbor pemantau cuaca interaktif dengan grafik perbandingan suhu dan prakiraan cuaca mingguan.',
        en: 'An interactive weather monitoring dashboard featuring temperature comparison charts and weekly forecasts.',
      },
      longDescription: {
        id: 'Aplikasi frontend yang mengambil data cuaca global secara dinamis dari API cuaca publik. Menampilkan data cuaca historis dalam bentuk grafik interaktif yang indah serta prakiraan cuaca 7 hari ke depan.',
        en: 'A frontend application that dynamically fetches global weather data from a public weather API. Displays historical weather data in beautiful interactive charts along with a 7-day forecast.',
      },
      techStack: ['Vue.js', 'Tailwind CSS', 'Chart.js', 'OpenWeather API'],
      category: 'Frontend',
      demoUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com/example/weather-dashboard',
      featured: false,
    },
  ])

  const timeline = ref<TimelineItem[]>([
    {
      id: '1',
      role: {
        id: 'Junior Web Developer',
        en: 'Junior Web Developer',
      },
      company: 'Teknologi Jaya',
      period: {
        id: 'Agustus 2024 - Januari 2025',
        en: 'August 2024 - January 2025',
      },
      description: {
        id: 'Membantu pengembangan modul frontend aplikasi web internal perusahaan menggunakan Vue.js dan Tailwind CSS, serta memperbaiki bug-bug kritis.',
        en: 'Assisted in the development of frontend modules for internal corporate web applications using Vue.js and Tailwind CSS, and resolved critical bugs.',
      },
    },
    {
      id: '2',
      role: {
        id: 'Fullstack Web Developer',
        en: 'Fullstack Web Developer',
      },
      company: 'Karya Kreatif Mandiri',
      period: {
        id: 'Februari 2025 - Sekarang',
        en: 'February 2025 - Present',
      },
      description: {
        id: 'Memimpin perancangan dan migrasi arsitektur monolitik ke microservices, membangun API endpoints tangguh dengan Node.js, dan mengembangkan layout antarmuka responsif.',
        en: 'Led the design and migration from monolithic to microservices architecture, built resilient API endpoints using Node.js, and developed responsive user interface layouts.',
      },
    },
  ])

  return {
    profile,
    projects,
    timeline,
  }
})
