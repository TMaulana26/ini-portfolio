# Modul Tugas 5: Integrasi Data CV Resmi ke State Aplikasi

## 1. Deskripsi Tugas
Tugas ini berfokus pada migrasi data riwayat profesional, keahlian teknis, dan latar belakang akademis dari berkas CV resmi Taufik Maulana ke dalam Pinia store reaktif (`src/stores/portfolio.ts`). Langkah ini memastikan AI merender data asli dan bukan teks tiruan (Lorem Ipsum) sejak awal proyek.

## 2. Kriteria Sukses & Ketentuan Spesifik Data
- **Struktur Objek i18n-Ready:** Semua string deskripsi panjang wajib dibungkus dalam skema objek multi-bahasa `{ id: string, en: string }` agar mendukung fitur alih bahasa secara instan.
- **Akurasi Data Profil:** Menyuntikkan detail data identitas asli berikut ke dalam state store:
  - Nama: Taufik Maulana, S.Kom.
  - Peran: Web Developer | Full-Stack Developer
  - Kontak: tm052602@gmail.com | +6289648046433
  - Lokasi: Cianjur, Jawa Barat, Indonesia
- **Daftar Keahlian Teknis (Tech Stack):**
  - Backend: PHP, Laravel Framework, REST API, SAP API Integration.
  - Frontend: React.js, Vue.js, JavaScript, jQuery, HTML5, CSS3, Tailwind CSS.
  - Tools: MySQL, PostgreSQL, GitHub, GitLab, Jira, SonarQube, CodeRabbit.
- **Lini Masa Pengalaman Kerja (Timeline Data):**
  1. PT FAN Integrasi Teknologi (Februari 2025 - Sekarang) | Web Developer (Front-End & Back-End)
     * Detail: Pembaruan arsitektur frontend (React.js, Tailwind CSS) untuk PT KAI Rolling Stock Website & PT KAI Checksheet Website. Integrasi SAP API real-time dan full-stack infrastruktur Laravel untuk PT KAI CMS Roscha & PT KAI Rolling Stock Maintenance System. Mengembangkan 9-10 modul kompleks dengan logika intensif.
  2. PT Lumos Inisiatif Indonesia (Oktober 2024 - Januari 2025) | PHP Full-Stack Developer
     * Detail: Membangun aplikasi web multi-tier menggunakan PHP Laravel, integrasi REST API yang aman, dan pengelolaan repositori Git (GitHub/GitLab).
  3. PT Lumos Inisiatif Indonesia (Maret 2024 - Juli 2024) | Intern PHP Developer
     * Detail: Menulis kode PHP modular, debugging, review kode sesama developer, dan optimasi skema database MySQL/PostgreSQL.
  4. Kantor Desa Kutaampel (Juli 2023 - November 2023) | IT Helper / IT Support
     * Detail: Tier-1 IT Support, maintenance hardware/software, jaringan LAN, serta manajemen database pelayanan publik.
  5. BPPKB Kabupaten Karawang (September 2022 - Desember 2022) | IT Staff & Website Tester Intern
     * Detail: Menjalankan functional, black-box, dan regression testing pada platform web aktif, serta melakukan migrasi data.
- **Riwayat Pendidikan:**
  - Universitas Singaperbangsa Karawang (2020 - 2024) | Sarjana Komputer (S.Kom.) dalam Sistem Informasi.

## 3. Daftar Tugas (Checklist Kerja AI)

### [ ] Pembaruan Berkas Translasi (i18n JSON)
- [ ] Daftarkan seluruh string konten CV di atas (termasuk deskripsi detail proyek PT KAI dan PT Lumos) ke dalam file `src/locales/id.json` dan `src/locales/en.json` agar sinkron.

### [ ] Implementasi State di Pinia Store
- [ ] Buka berkas store `src/stores/portfolio.ts`.
- [ ] Deklarasikan state `profile`, `skills`, `experience`, dan `education` menggunakan TypeScript interface yang ketat.
- [ ] Isi nilai bawaan (*initial state*) store menggunakan data CV Taufik Maulana yang sudah terstruktur i18n.

### [ ] Pembuatan Unit Testing Store
- [ ] Buat berkas pengujian `src/stores/__tests__/portfolio.spec.ts`.
- [ ] Pastikan pengujian memverifikasi bahwa store berhasil memuat data profil dengan benar dan fungsi *computed* penukar bahasa mengembalikan string yang tepat saat locale diubah.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)
- [ ] `npm run lint` (Bebas eror)
- [ ] `npm run test` (Semua tes unit store berstatus lolos 100%)
- [ ] `npm run build` (Berhasil terkompilasi sukses)

---
## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)
*Belum ada catatan.*