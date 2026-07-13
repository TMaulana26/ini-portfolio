import { defineStore } from "pinia";
import { ref } from "vue";

export interface MultilingualText {
  id: string;
  en: string;
}

export interface Project {
  id: string;
  title: MultilingualText;
  description: MultilingualText;
  longDescription: MultilingualText;
  techStack: string[];
  category: "Frontend" | "Backend" | "Fullstack";
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  accessMode: "internal" | "standard" | "coming_soon";
}

export interface Profile {
  name: string;
  role: MultilingualText;
  bio: MultilingualText;
  email: string;
  github: string;
  linkedin: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  role: MultilingualText;
  company: string;
  period: MultilingualText;
  description: MultilingualText;
}

export const usePortfolioStore = defineStore("portfolio", () => {
  const profile = ref<Profile>({
    name: "Taufik Maulana",
    role: {
      id: "Pengembang Web | Pengembang Full-Stack",
      en: "Web Developer | Full-Stack Developer",
    },
    bio: {
      id: "Pengembang Web dan Pengembang Full-Stack yang berorientasi pada hasil dengan pengalaman komprehensif dalam merancang, mengembangkan, dan menerapkan aplikasi web skala perusahaan yang kokoh. Sangat mahir dalam membangun arsitektur backend berat menggunakan framework Laravel, mengintegrasikan logika bisnis yang mendalam, dan mengonsumsi API perusahaan SAP, yang dikombinasikan dengan modernisasi frontend menggunakan React.js dan Tailwind CSS.",
      en: "Results-driven Web Developer and Full-Stack Developer with comprehensive experience in designing, developing, and deploying robust enterprise-scale web applications. Highly proficient in building heavy backend architecture using the Laravel framework, integrating deep business logic, and consuming SAP enterprise APIs, combined with modern frontend revamps using React.js and Tailwind CSS.",
    },
    email: "tm052602@gmail.com",
    github: "https://github.com/TMaulana26",
    linkedin: "https://linkedin.com/in/taufik-maulana-b6a58529a/",
    skills: [
      "PHP",
      "Laravel Framework",
      "REST API",
      "SAP API Integration",
      "React.js",
      "Vue.js",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL",
      "GitHub",
      "GitLab",
      "Jira",
      "SonarQube",
      "CodeRabbit",
    ],
  });

  const projects = ref<Project[]>([
    {
      id: "1",
      title: {
        id: "Landing Page Lumoshive Academy",
        en: "Lumoshive Academy Landing Page",
      },
      description: {
        id: "Halaman informasi program pembelajaran Go dan React JS di PT Lumos Inisiatif Indonesia.",
        en: "Information landing page for Go and React JS learning programs at PT Lumos Inisiatif Indonesia.",
      },
      longDescription: {
        id: "Halaman arahan responsif yang dibangun secara kolaboratif bersama tim untuk mempromosikan program pembelajaran intensif. Fokus konten adalah memberikan panduan serta informasi komprehensif bagi calon pengembang untuk menjadi pengembang fullstack yang kompeten.",
        en: "A responsive landing page built collaboratively with a team to promote intensive learning programs. The content focuses on providing comprehensive guidance and information for aspiring developers to become proficient fullstack developers.",
      },
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      category: "Frontend",
      demoUrl: "https://academy.lumoshive.com/",
      featured: false,
      image: "/images/lumoshive-landing.png",
      accessMode: "standard",
    },
    {
      id: "2",
      title: {
        id: "Lumoshive Academy (LMS)",
        en: "Lumoshive Academy LMS",
      },
      description: {
        id: "Sistem Manajemen Pembelajaran (LMS) interaktif dengan fitur laporan harian dan kuis.",
        en: "An interactive Learning Management System (LMS) featuring daily reports and quizzes.",
      },
      longDescription: {
        id: "Platform management pembelajaran lengkap yang menyediakan ekosistem edukasi digital terintegrasi. Memiliki fitur utama seperti daily stand up, daily report, pemutaran video pembelajaran, sistem kuis dan ujian, pemilihan kelas dinamis, serta penerbitan sertifikat digital.",
        en: "A comprehensive learning management platform providing an integrated digital education ecosystem. Features daily stand up, daily report, educational video streaming, quiz and exam engines, dynamic course selection, and digital certificate issuance.",
      },
      techStack: ["PHP", "Laravel Framework", "Bootstrap 5", "JavaScript", "CSS3", "PostgreSQL"],
      category: "Fullstack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
      image: "/images/lumoshive-lms.png",
      accessMode: "internal",
    },
    {
      id: "3",
      title: {
        id: "Lumoshive Account (SSO)",
        en: "Lumoshive Account (SSO)",
      },
      description: {
        id: "Sistem Single Sign-On (SSO) terpusat untuk otentikasi ekosistem aplikasi web Lumoshive.",
        en: "A centralized Single Sign-On (SSO) system for ecosystem web applications authentication.",
      },
      longDescription: {
        id: "Layanan otentikasi satu pintu yang dirancang untuk mengamankan dan mengintegrasikan akses ke seluruh aplikasi web di bawah naungan Lumoshive. Terintegrasi secara mendalam dengan Google Firebase untuk manajemen penyimpanan data pengguna dan pembuatan token keamanan.",
        en: "A single sign-on authentication service designed to secure and integrate access across all Lumoshive web applications. Deeply integrated with Google Firebase for secure user data storage and token generation.",
      },
      techStack: [
        "PHP",
        "Laravel Framework",
        "Bootstrap 5",
        "JavaScript",
        "CSS3",
        "Google Firebase",
        "PostgreSQL",
      ],
      category: "Fullstack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: false,
      image: "/images/lumoshive-sso.png",
      accessMode: "internal",
    },
    {
      id: "4",
      title: {
        id: "PT KAI CMS ROSCHA",
        en: "PT KAI CMS ROSCHA",
      },
      description: {
        id: "Sistem manajemen pemeliharaan aset kereta api PT KAI terintegrasi dengan API SAP.",
        en: "PT KAI railway asset maintenance management system integrated with enterprise SAP APIs.",
      },
      longDescription: {
        id: "Infrastruktur full-stack enterprise berupa CMS untuk sistem pemeliharaan aset kereta api nasional. Mencakup modul manajemen pengguna dan peran, data master material, daftar tugas, lembar pemeriksaan (checksheet), transaksi data master, serta sinkronisasi data real-time dengan API SAP.",
        en: "An enterprise full-stack CMS infrastructure for national railway asset maintenance systems. Features user and role management, material master data, tasklists, checksheets, master data transactions, and real-time synchronization with enterprise SAP APIs.",
      },
      techStack: [
        "PHP",
        "Laravel Framework",
        "Tailwind CSS",
        "JavaScript",
        "SAP API Integration",
        "PostgreSQL",
        "Redis",
      ],
      category: "Fullstack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
      image: "/images/kai-roscha.png",
      accessMode: "internal",
    },
    {
      id: "5",
      title: {
        id: "PT KAI RIMS Website",
        en: "PT KAI RIMS Website",
      },
      description: {
        id: "Pembaruan sistem pemeliharaan inti PT KAI dengan fitur ticketing, work order, dan alur kerja terstruktur.",
        en: "PT KAI core maintenance website upgrade featuring ticketing, work orders, and structured workflow systems.",
      },
      longDescription: {
        id: "Pembaruan arsitektur frontend skala besar untuk sistem pemeliharaan inti PT KAI. Menambahkan sistem notifikasi dan tiket perawatan kereta, pembuatan work order otomatis, implementasi alur kerja (flow system) berurutan antar-unit, transaksi SAP, serta modul pelaporan dengan ekspor Excel dan PDF.",
        en: "A major frontend architectural revamp for PT KAI core maintenance system. Introduces train maintenance notification and ticketing systems, automated work order creation, sequential multi-unit workflow systems, SAP transactions, and reporting modules with Excel/PDF export capabilities.",
      },
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "REST API", "PostgreSQL", "Redis"],
      category: "Frontend",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
      image: "/images/kai-rims.png",
      accessMode: "internal",
    },
    {
      id: "6",
      title: {
        id: "Chatbot HRIS",
        en: "HRIS Chatbot",
      },
      description: {
        id: "Aplikasi HRIS berbasis interaksi chatbot untuk otomatisasi absensi, izin, dan jadwal.",
        en: "A chatbot-driven HRIS application for automated attendance, leaves, and schedules.",
      },
      longDescription: {
        id: "Proyek personal sistem informasi SDM (HRIS) modern di mana seluruh transaksi operasional dijalankan melalui antarmuka chatbot interaktif. Mendukung absensi online, pengajuan izin/cuti/sakit, informasi pegawai, monitoring tugas, jadwal rapat, hingga panel manajemen sistem untuk mengatur perilaku respon cerdas chatbot.",
        en: "A personal modern HRIS project where all operational transactions are executed through an interactive chatbot interface. Supports online attendance, leave/sick applications, employee info, task tracking, meeting schedules, and a system management panel to customize chatbot responses.",
      },
      techStack: [
        "PHP",
        "Laravel Framework",
        "Livewire",
        "Alpine.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      category: "Fullstack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/TMaulana26/chatbot-v1",
      featured: true,
      image: "/images/chatbot-hris.png",
      accessMode: "coming_soon",
    },
    {
      id: "7",
      title: {
        id: "TM-KANA",
        en: "TM-KANA",
      },
      description: {
        id: "Platform edukasi interaktif untuk mempelajari sistem aksara Jepang Hiragana dan Katakana.",
        en: "An interactive educational platform for learning Japanese Hiragana and Katakana writing systems.",
      },
      longDescription: {
        id: "Proyek personal aplikasi web pembelajaran bahasa Jepang yang memfasilitasi pengguna untuk menguasai Hiragana dan Katakana. Dilengkapi modul kuis pintar, latihan menulis karakter, serta sistem pelacakan otomatis yang menyimpan progres belajar pengguna agar dapat dimuat di berbagai perangkat berbeda.",
        en: "A personal Japanese language learning web application facilitating users to master Hiragana and Katakana. Equipped with smart quiz modules, character writing practice, and an automated progress tracking system that can be seamlessly loaded across different devices.",
      },
      techStack: ["Vue.js", "Tailwind CSS", "shadcn-vue", "TypeScript"],
      category: "Frontend",
      demoUrl: "https://tm-kana.my.id",
      githubUrl: "https://github.com/TMaulana26/tm-kana",
      featured: false,
      image: "/images/tm-kana.png",
      accessMode: "coming_soon",
    },
    {
      id: "8",
      title: {
        id: "Headless CMS API (Ini CMS)",
        en: "Headless CMS API (Ini CMS)",
      },
      description: {
        id: "REST API Headless CMS murni berbasis Laravel 11 dengan arsitektur modular tinggi.",
        en: "A pure Headless CMS REST API built with Laravel 11 using a highly modular architecture.",
      },
      longDescription: {
        id: "Proyek personal berupa API Headless CMS modular yang kaya fitur untuk menyuplai aplikasi frontend terpisah. Mengimplementasikan pembatasan hak akses ketat, Spatie Medialibrary untuk manajemen aset, pelaporan statistik dasbor, lokalisasi multi-bahasa via Spatie Translatable, serta modul siap pakai untuk Portfolio, Skill, Blog, dan Kontak.",
        en: "A personal modular Headless CMS API project rich with enterprise features to power decoupled frontend applications. Implements fine-grained RBAC, Spatie Medialibrary for asset handling, dashboard stats, multi-language localization via Spatie Translatable, and ready-to-use modules for Portfolio, Skill, Blog, and Contact.",
      },
      techStack: ["PHP", "Laravel Framework", "REST API", "Spatie Medialibrary", "PostgreSQL"],
      category: "Backend",
      demoUrl: "https://ini-cms.my.id",
      githubUrl: "https://github.com/TMaulana26/be-inicms",
      featured: true,
      image: "/images/headless-cms.png",
      accessMode: "coming_soon",
    },
  ]);

  const timeline = ref<TimelineItem[]>([
    {
      id: "1",
      role: {
        id: "Pengembang Web (Pengembang Front-End & Back-End)",
        en: "Web Developer (Front-End & Back-End Developer)",
      },
      company: "PT FAN Integrasi Teknologi",
      period: {
        id: "Februari 2025 - Sekarang",
        en: "February 2025 - Present",
      },
      description: {
        id: "Memimpin perombakan arsitektur frontend aplikasi inti menggunakan React.js dan Tailwind CSS untuk optimalisasi performa. Membangun klien berkinerja tinggi untuk Website Rolling Stock PT KAI dan Website Checksheet PT KAI di bawah siklus rilis ketat 6 bulan. Merancang infrastruktur full-stack menggunakan Laravel untuk Website CMS Roscha PT KAI dan Sistem Pemeliharaan Rolling Stock PT KAI, serta mengintegrasikan API SAP perusahaan secara real-time. Mengembangkan 9-10 modul kompleks dengan logika backend intensif.",
        en: "Spearheaded the complete frontend architectural overhaul of core web applications using React.js and Tailwind CSS. Engineered high-performance clients for the PT KAI Rolling Stock Website and PT KAI Checksheet Website under strict 6-month release cycles. Architected full-stack enterprise infrastructure using Laravel for the PT KAI CMS Roscha Website and PT KAI Rolling Stock Maintenance System, integrating real-time enterprise SAP APIs. Developed 9-10 highly complex modules featuring intensive backend logic.",
      },
    },
    {
      id: "2",
      role: {
        id: "Pengembang Full-Stack PHP",
        en: "PHP Full-Stack Developer",
      },
      company: "PT Lumos Inisiatif Indonesia",
      period: {
        id: "Oktober 2024 - Januari 2025",
        en: "October 2024 - January 2025",
      },
      description: {
        id: "Merancang, membangun, dan memelihara aplikasi web multi-tier dari konsep awal hingga lingkungan produksi langsung menggunakan PHP Laravel untuk layanan backend yang kokoh. Membangun, mendokumentasikan, dan mengintegrasikan REST API yang dapat diskalakan untuk memastikan komunikasi data JSON yang aman. Mengelola basis kode kolaboratif dan alur kerja deployment menggunakan GitHub dan GitLab.",
        en: "Designed, built, and maintained multi-tier web applications from initial concept to live production environments, utilizing PHP Laravel for robust backend services. Built, documented, and integrated scalable REST APIs ensuring secure JSON data communications. Managed collaborative codebases and deployment workflows using GitHub and GitLab.",
      },
    },
    {
      id: "3",
      role: {
        id: "Magang Pengembang PHP / Pengembang Website",
        en: "Intern PHP Developer/Website Developer",
      },
      company: "PT Lumos Inisiatif Indonesia",
      period: {
        id: "Maret 2024 - Juli 2024",
        en: "March 2024 - July 2024",
      },
      description: {
        id: "Membantu dalam siklus hidup pengembangan web full-stack, menulis kode PHP yang bersih, modular, dan dapat dipelihara di bawah bimbingan langsung pengembang senior. Berpartisipasi aktif dalam sesi debugging, tinjauan kode sejawat, dan optimasi skema database menggunakan MySQL dan PostgreSQL.",
        en: "Assisted in full-stack web development lifecycles, writing clean, modular, and maintainable PHP code under direct mentorship. Participated in active debugging sessions, peer code reviews, and database schema optimizations utilizing MySQL and PostgreSQL.",
      },
    },
    {
      id: "4",
      role: {
        id: "Pembantu TI / Dukungan TI",
        en: "IT Helper/IT Support",
      },
      company: "Aula Kantor Desa Kutaampel",
      period: {
        id: "Juli 2023 - November 2023",
        en: "July 2023 - November 2023",
      },
      description: {
        id: "Menyediakan dukungan TI tier-1 yang komprehensif, memelihara komponen perangkat keras kantor, paket perangkat lunak aktif, dan infrastruktur jaringan lokal (LAN). Membantu dalam manajemen database publik untuk mempercepat alur kerja administrasi digital bagi layanan publik penting.",
        en: "Provided comprehensive tier-1 IT support, maintaining local office hardware components, active software suites, and internal local area network (LAN) infrastructures. Assisted in public database management to accelerate digital administration workflows for critical public services.",
      },
    },
    {
      id: "5",
      role: {
        id: "Staf TI & Magang Penguji Website",
        en: "IT Staff & Website Tester Intern",
      },
      company: "BPPKB Kabupaten Karawang",
      period: {
        id: "September 2022 - Desember 2022",
        en: "September 2022 - December 2022",
      },
      description: {
        id: "Melakukan pengujian fungsional, black-box, dan regresi secara menyeluruh pada platform web aktif untuk mengidentifikasi dan mendokumentasikan bug guna meningkatkan pengalaman pengguna. Mendukung tugas administrasi TI harian, migrasi data struktural, dan resolusi masalah teknis internal.",
        en: "Conducted thorough functional, black-box, and regression testing on active web platforms to identify and report bugs, substantially improving end-user experience. Supported daily IT administrative tasks, structural data migrations, and internal technical query resolutions.",
      },
    },
  ]);

  return {
    profile,
    projects,
    timeline,
  };
});
