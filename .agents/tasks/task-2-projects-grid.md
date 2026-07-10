# Modul Tugas 2: Pembuatan Galeri Proyek Web (Dinamis & API Ready Grid)

## 1. Deskripsi Tugas

Tugas ini berfokus pada pembuatan seksi Galeri Proyek Web (Projects Grid Section). Seksi ini bertugas merender daftar proyek web Anda secara dinamis dari Pinia store dengan arsitektur yang siap dihubungkan ke Backend API di kemudian hari.

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Kepatuhan Keras Prinsip DRY:** Seluruh kartu proyek wajib dirender menggunakan satu komponen modular tunggal: `src/components/common/ProjectCard.vue`. Komponen ini memanfaatkan kontainer dasar dari `NeoCard.vue` dan tombol dari `NeoButton.vue`.
- **Struktur Data API-Ready:** Data proyek di dalam Pinia store harus memiliki skema terstruktur (seperti ID, nama proyek, gambar, tag _tech stack_, tautan repositori, tautan demo live, serta objek multi-bahasa `description: { id: string, en: string }`).
- **Antarmuka Grid Neobrutalism yang Simple:**
  - Kartu proyek disusun dalam tata letak responsif (1 kolom di mobile, 2 atau 3 kolom di desktop).
  - Setiap kartu harus menampilkan screenshot proyek, judul, deskripsi sesuai bahasa yang aktif (i18n), kumpulan _badges tech stack_ (`NeoBadge`), dan dua tombol aksi (GitHub & Live Demo).
  - Jika data proyek kosong atau dalam status memuat (_loading state_), tampilkan state kosong (_empty state_) atau kerangka pemuat (_skeleton loader_) bertema Neobrutalism yang bersih.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembaruan Berkas Bahasa (i18n JSON)

- [x] Daftarkan kata kunci lokalisasi baru untuk seksi proyek di `src/locales/id.json` dan `src/locales/en.json` (seperti judul seksi, label tombol "Lihat Kode", "Demo Live", dan pesan jika proyek tidak ditemukan).

### [x] Pembuatan Komponen DRY ProjectCard

- [x] Buat berkas komponen `src/components/common/ProjectCard.vue`.
- [x] Definisikan TypeScript interface yang ketat untuk menerima _props_ objek proyek tunggal.
- [x] Integrasikan `NeoCard`, `NeoBadge`, dan `NeoButton` di dalam `ProjectCard.vue`.

### [x] Implementasi Grid & Integrasi State Pinia

- [x] Buat berkas komponen utama seksi proyek `src/components/sections/ProjectsSection.vue`.
- [x] Panggil data proyek dari Pinia store secara komputasi (_computed property_) agar deskripsi proyek otomatis berganti bahasa secara reaktif ketika pengguna mengubah penukar bahasa (_language switcher_).
- [x] Gunakan Tailwind Grid untuk menyusun tata letak kartu yang rapi dan simple.

### [x] Pembuatan Unit & Component Testing

- [x] Buat berkas pengujian komponen `src/components/common/__tests__/ProjectCard.spec.ts`.
- [x] Pastikan pengujian mencakup: verifikasi properti data proyek terender dengan tepat, deskripsi berganti sesuai bahasa aktif, dan tombol mengarah ke tautan URL eksternal yang benar.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Wajib bersih dari eror kode dan eror teks hardcoded i18n)
- [x] `npm run test` (Semua skenario tes komponen wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
