# Modul Tugas 1: Pembuatan Hero Section, About, & Linimasa Karier

## 1. Deskripsi Tugas

Tugas ini berfokus pada pembuatan antarmuka bagian atas website portofolio: Hero Section (sambutan identitas) dan About Section (keahlian teknis dan linimasa perjalanan karier profesional sejak Agustus 2024).

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Kepatuhan Keras Prinsip DRY:** Pembangunan UI wajib menggunakan komponen atomik `NeoButton.vue`, `NeoCard.vue`, dan `NeoBadge.vue` yang telah dibuat pada tugas 0. Dilarang menulis ulang utilitas kelas border/bayangan tebal secara manual di halaman ini.
- **Kepatuhan Keras i18n:** Seluruh judul, sub-judul, isi teks biografi, dan detail teks linimasa karier wajib mengambil key dari berkas lokalisasi (`id.json` dan `en.json`).
- **Hero Section (Simple & Bold):**
  - Menampilkan nama Anda dan _headline_ tegas sebagai Full-Stack Web Developer.
  - Terdapat tombol unduh CV/Resume dan tombol _smooth scroll_ menuju seksi kontak.
  - Menyediakan komponen _Language Switcher dropdown_ (ID/EN) yang bersih di area navigasi atas menggunakan gaya Neobrutalism.
- **About & Timeline Section:**
  - **Grid Keahlian:** Menampilkan deretan `NeoBadge.vue` yang tersusun rapi untuk mengelompokkan keahlian backend (Laravel, API) dan frontend (Vue, Tailwind, shadcn-vue).
  - **Linimasa Karier (Timeline):** Menampilkan baris urutan riwayat profesional yang tegas. Data wajib diambil secara reaktif dari Pinia store (mencakup data awal mulai Agustus 2024 hingga peran baru Anda sejak Februari 2025).

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembaruan Berkas Bahasa (i18n JSON)

- [x] Daftarkan semua kebutuhan string teks halaman utama (kalimat hero, biografi singkat, label tombol, nama bulan/tahun lini masa) ke dalam `src/locales/id.json` dan `src/locales/en.json`.

### [x] Pembuatan Komponen Navigasi & Pemilih Bahasa

- [x] Buat area header/navigasi minimalis yang menampung logo/nama dan dropdown penukar bahasa aktif.

### [x] Implementasi UI Hero Section

- [x] Susun layout Hero menggunakan komponen kontainer `NeoCard.vue`.
- [x] Pasang tombol aksi menggunakan `NeoButton.vue` dan hubungkan tombol unduh resume dengan berkas aset statis PDF dummy.

### [x] Implementasi UI About & Rekam Jejak (Timeline)

- [x] Render data keahlian dari Pinia store ke dalam grid komponen `NeoBadge.vue`.
- [x] Bangun komponen visual linier (garis vertikal/horizontal tegas khas Neobrutalism) untuk merender array riwayat karier dari store secara urut waktu (_chronological_).

### [x] Pembuatan Integration & UI Testing

- [x] Buat berkas pengujian komponen `src/components/__tests__/HeroSection.spec.ts` dan `TimelineSection.spec.ts`.
- [x] Pastikan pengujian memverifikasi bahwa teks berubah secara instan saat _locale_ i18n diganti dan komponen atomik dirender dengan properti yang tepat.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Wajib bersih dari eror kode dan eror teks hardcoded i18n)
- [x] `npm run test` (Semua tes unit dan komponen wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
