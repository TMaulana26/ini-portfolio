# Modul Tugas 7: Optimalisasi SEO & Konfigurasi Metadata Portofolio

## 1. Deskripsi Tugas

Tugas ini berfokus pada penerapan optimalisasi Search Engine Optimization (SEO) dan konfigurasi metadata statis maupun dinamis pada aplikasi frontend Vue.js. Langkah ini bertujuan untuk memastikan website portofolio Taufik Maulana mudah dirayapi oleh Googlebot dan memiliki keterbacaan (_preview_) yang optimal saat dibagikan di media sosial menggunakan domain resmi `mtim.my.id`.

## 2. Kriteria Sukses & Ketentuan Spesifik

- **Pengelolaan Meta Tags Dinamis (Vue UseHead / Unhead):**
  - Mengonfigurasi judul halaman (_title_) yang unik dan deskripsi meta (_meta description_) yang dwibahasa (i18n-ready) agar ramah SEO.
  - Memasang Open Graph (OG) tags (`og:title`, `og:description`, `og:image`, `og:url`) untuk pratinjau kaya saat link dibagikan di LinkedIn atau platform chat.
- **Konfigurasi Domain Utama:**
  - Seluruh tautan kanonis (_canonical URL_) wajib mengarah langsung ke domain target: `https://mtim.my.id`.
- **Berkas SEO Wajib (Public Assets):**
  - **`robots.txt`**: Mengizinkan perayapan penuh ke seluruh halaman publik oleh semua mesin pencari.
  - **`sitemap.xml`**: Menyediakan peta situs terstruktur yang mencantumkan rute utama portfolio untuk mempercepat indeks Google.
- **Aksesibilitas HTML:**
  - Memastikan tag `<html>` memperbarui atribut `lang` secara dinamis sesuai bahasa i18n yang sedang aktif (`id` atau `en`).
  - Menambahkan atribut `alt` pada setiap elemen gambar (seperti gambar profil dan screenshot proyek) untuk aksesibilitas dan optimasi Google Image Search.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Instalasi & Konfigurasi Pustaka SEO (Jika Diperlukan)

- [x] Pastikan pustaka manajemen _head_ (seperti `@unhead/vue` atau `@vueuse/head`) sudah terpasang dan terdaftar di file `main.ts`.

### [x] Pembuatan Berkas Publik Mesin Pencari

- [x] Buat berkas `public/robots.txt` dengan aturan standar:
  ```text
  User-agent: *
  Allow: /
  Sitemap: [https://mtim.my.id/sitemap.xml](https://mtim.my.id/sitemap.xml)
  ```
