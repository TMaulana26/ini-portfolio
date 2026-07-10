# Modul Tugas 0: Inisialisasi Proyek, Konfigurasi Tema Neobrutalism & Komponen DRY

## 1. Deskripsi Tugas

Tugas ini berfokus pada penyiapan struktur dasar repositori portofolio, konfigurasi utilitas desain Neobrutalism pada Tailwind, setup sistem multi-bahasa (i18n) beserta linter-nya, serta pembuatan komponen UI atomik yang _reusable_ untuk mematuhi prinsip DRY.

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Setup Dasar & Arsitektur:** Proyek terkonfigurasi dengan Vue 3 (Composition API, `<script setup>`), TypeScript, Tailwind CSS, shadcn-vue, dan Pinia.
- **Konfigurasi Tema Neobrutalism:**
  - Modifikasi `tailwind.config.js` untuk menambahkan warna latar belakang utama yang simple (misal: Slate super terang atau Putih Tulang `FDFBF7`) dan ekstensi utilitas bayangan keras (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`).
  - Konfigurasi `darkMode: 'class'` di `tailwind.config.js` dan pembuatan satu state atau fungsi pembantu penukar tema di Pinia store.
- **Setup i18n & Linter Pengaman:**
  - Konfigurasi `vue-i18n` dengan berkas bahasa awal di `src/locales/id.json` dan `src/locales/en.json`.
  - Integrasikan `@intlify/eslint-plugin-vue-i18n` atau rules ESLint sejenis untuk memastikan `npm run lint` akan otomatis menghasilkan eror jika ada teks mentah (_hardcoded string_) yang tertinggal di template HTML tanpa menggunakan `$t()`.
- **Ekstraksi Komponen Atomik (Aturan DRY):**
  - Buat komponen `NeoButton.vue` yang memiliki properti warna/ukuran serta efek mekanis saat di-hover/ditekan sesuai aturan `write.md`.
  - Buat komponen `NeoCard.vue` sebagai kontainer utama dengan border hitam tebal dan _hard shadow_.
  - Buat komponen `NeoBadge.vue` untuk pembungkus teks keahlian (_tech stack_).
- **Mock Data Ready (Pinia Store):**
  - Buat Pinia store `src/stores/portfolio.ts` yang menampung _mock data_ array proyek web. Struktur objek data ini harus dirancang rapi (menyediakan opsi judul/deskripsi dalam bentuk objek multi-bahasa) agar siap dihubungkan ke API backend di masa depan.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Inisialisasi & Konfigurasi Tooling Dasar

- [x] Jalankan inisialisasi awal proyek Vue 3 + Vite + TypeScript.
- [x] Konfigurasikan Tailwind CSS dengan variabel warna global dan bayangan Neobrutalism.
- [x] Pasang library shadcn-vue dan setup folder komponen.
- [x] Konfigurasikan Vitest untuk pengujian unit & komponen.

### [x] Setup Pengaman Multi-Bahasa (i18n)

- [x] Konfigurasikan instansi `vue-i18n` di `src/main.ts` atau `src/i18n.ts`.
- [x] Buat berkas lokalisasi awal `src/locales/id.json` dan `src/locales/en.json`.
- [x] Perbarui konfigurasi ESLint proyek untuk mengaktifkan aturan larangan teks _hardcoded_ di template.

### [x] Pembuatan Komponen Atomik (DRY UI Elements)

- [x] Buat berkas komponen `src/components/ui/NeoButton.vue` dengan TypeScript interface untuk props.
- [x] Buat berkas komponen `src/components/ui/NeoCard.vue`.
- [x] Buat berkas komponen `src/components/ui/NeoBadge.vue`.
- [x] Buat komponen `ThemeToggle.vue` (menggunakan tombol atomik NeoButton.vue) untuk memicu perubahan kelas `.dark` pada elemen HTML root.
- [x] Pastikan komponen atomik awal (NeoCard, NeoButton, NeoBadge) sudah langsung memiliki varian kelas `dark: ` di dalam kodenya.

### [x] Pembuatan Komponen Switcher (Theme & Language)

- [x] Buat komponen tombol penukar tema (Theme Toggle Switcher) menggunakan gaya Neobrutalism untuk berpindah antara Light Mode dan Dark Mode.
- [x] Buat komponen tombol penukar bahasa (Language Toggle Switcher) menggunakan gaya Neobrutalism untuk berpindah antara Light Mode dan Dark Mode.

### [x] Inisialisasi State & Mock Data API

- [x] Buat berkas `src/stores/portfolio.ts` menggunakan Pinia untuk menyimpan data profil dan array proyek web (gunakan data tiruan/mock dengan struktur API ready).

### [x] Pembuatan Unit & Component Testing

- [x] Buat berkas pengujian `src/components/ui/__tests__/NeoButton.spec.ts` untuk memastikan efek transisi klik dan mock i18n berjalan sukses.
- [x] Buat berkas pengujian unit untuk memverifikasi inisialisasi awal data di Pinia store.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Wajib bersih dari eror kode dan eror teks hardcoded i18n)
- [x] `npm run test` (Semua tes unit komponen atomik wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
