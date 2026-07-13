# Modul Tugas 10 : Migrasi Arsitektur ke Vite-SSG (Static Site Generation)

## 1. Deskripsi Tugas

Tugas ini berfokus pada transformasi mekanisme rendering aplikasi Frontend dari Client-Side Rendering (CSR) menjadi Static Site Generation (SSG) memanfaatkan pustaka `vite-ssg` untuk domain `mtim.my.id`. Langkah ini bertujuan krusial agar seluruh konten teks, komponen portofolio, dan meta deskripsi dwibahasa dapat langsung dibaca oleh bot crawler (seperti Googlebot dan Gemini Bot) dalam bentuk dokumen HTML utuh yang sudah terisi penuh sejak request pertama, menghilangkan masalah pengindeksan halaman kosong (div id="app" kosong).

## 2. Kriteria Sukses & Ketentuan Spesifik Migrasi

- **Prajalan Render Kompilasi (Prerendering Build):**
  - Mengubah fungsi inisialisasi aplikasi pada berkas entri utama agar menggunakan modul `ViteSSG`.
  - Hasil dari perintah kompilasi produksi (`npm run build`) wajib menghasilkan berkas fisik `index.html` yang memuat seluruh teks markup asli portofolio seperti nama lengkap "Taufik Maulana, S.Kom.", linimasa pengalaman industri, dan galeri proyek secara langsung[cite: 1].
- **Hardening Kode Server-Side (Isolasi API Browser):**
  - Aplikasi harus terhindar dari kegagalan kompilasi Node.js akibat referensi objek lingkungan peramban.
  - Semua kode yang mengakses API spesifik browser seperti `window`, `document`, `canvas`, dan `localStorage` (termasuk modul rate-limiting form kontak dan inisialisasi partikel bintang) wajib diisolasi dengan aman di dalam lifecycle hook `onMounted` atau dilindungi menggunakan pemeriksaan kondisi lingkungan (`import.meta.env.SSR`).
- **Hidrasi Reaktif (Client-Side Hydration):**
  - Halaman HTML statis yang dikirimkan harus sukses terhidrasi oleh Vue.js di sisi klien, memastikan sistem penukaran bahasa (i18n), interaksi tombol bertema Neobrutalism, animasi awan melayang, dan pengiriman formulir via Formspree tetap berfungsi secara dinamis dan reaktif setelah pemuatan selesai.

## 3. Daftar Tugas (Checklist Kerja AI)

### [ ] Penyiapan Dependensi & Lingkungan SSG

- [ ] Instal package arsitektur dengan menjalankan perintah: `npm install -D vite-ssg`.
- [ ] Pastikan struktur penulisan daftar rute (`src/router/index.ts` atau `src/router.ts`) mengekspor susunan array rute mentah secara independen tanpa langsung menginstansiasi fungsi `createRouter`, sesuai dengan spesifikasi kebutuhan parameter input `ViteSSG`.

### [ ] Refaktorisasi Berkas Entri Utama (src/main.ts)

- [ ] Hapus atau komentari deklarasi standard `createApp(App).mount('#app')`.
- [ ] Terapkan konfigurasi _wrapper_ `ViteSSG` dengan mengimpor modul komponen utama, modul rute, dan fungsi _setup_ untuk meregistrasikan plugin pendukung seperti Pinia store, i18n localization, dan pustaka manajemen metadata `@unhead/vue`.

### [ ] Penyesuaian Berkas Konfigurasi Vite (vite.config.ts)

- [ ] Perbarui objek konfigurasi utama di dalam `vite.config.ts` untuk menyertakan blok opsi `ssgOptions`.
- [ ] Atur parameter `script: 'async'` untuk mengoptimalkan pengunduhan skrip hidrasi dan `formatting: 'minify'` guna mereduksi ukuran file HTML statis yang diproduksi.

### [ ] Audit Kode Komponen terhadap Objek Browser Global

- [ ] Audit berkas komponen `src/components/ui/BackgroundEffect.vue`. Pastikan logika manipulasi elemen HTML5 Canvas dan inisialisasi konteks grafis rasi bintang dibungkus penuh di dalam blok fungsi `onMounted`.
- [ ] Audit komponen formulir kontak. Pastikan pembacaan stempel waktu (_timestamp_) dari `localStorage` untuk keperluan pembatasan frekuensi klik (_rate limiting_) diproteksi agar tidak dieksekusi selama fase _prerendering_ Node.js berlangsung.

### [ ] Sinkronisasi Metadata dengan useServerHead

- [ ] Optimalkan komponen `src/App.vue` dengan memanfaatkan fungsi `useServerHead` atau `useSeoMeta` agar metadata esensial terinjeksi langsung ke dalam struktur elemen `<head>` pada tingkat server beralih dari injeksi murni client-side.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [ ] `npm run lint` (Memastikan tidak ada kesalahan penulisan tipe data TypeScript pada kode yang direfaktorisasi).
- [ ] `npm run build` (Memastikan proses kompilasi internal `vite-ssg build` berjalan lancar hingga selesai 100% dan membuat direktori `/dist`).
- [ ] **Inspeksi Manual Dokumen:** Buka berkas `dist/index.html` menggunakan editor teks mentah, lalu lakukan pencarian kata kunci (`Ctrl+F`) untuk istilah "Taufik Maulana" dan "PT KAI"[cite: 1]. Validasi sukses dinyatakan jika teks tersebut ditemukan secara fisik tertulis di dalam baris kode HTML statis tersebut, membuktikan aplikasi tidak lagi berupa `div` kosong.

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
