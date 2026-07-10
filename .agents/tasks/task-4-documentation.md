# Modul Tugas 4: Dokumentasi Repositori & Panduan Kontributor

## 1. Deskripsi Tugas

Tugas ini berfokus pada penyusunan dokumen panduan utama repositori di root folder (`README.md` dan `CONTRIBUTING.md`). Tujuannya adalah memastikan pengembang lain yang ingin melakukan _fork_ atau berkontribusi dapat memahami struktur arsitektur portofolio Neobrutalism ini, integrasi i18n-safe, serta alur kerja AI Agents yang digunakan.

## 2. Kriteria Sukses & Ketentuan Spesifik Dokumentasi

- **README.md Utama yang Profesional:** Wajib ditulis menggunakan Markdown yang bersih dan terstruktur rapi. Harus mencakup:
  1. Deskripsi proyek (Portofolio personal berbasis Full-Stack Ready / API Ready dengan gaya Neobrutalism Minimalis).
  2. Daftar Fitur Utama (Responsive Layout, DRY UI Components, Multi-bahasa i18n, Form dengan Validasi, Dynamic Pinia Store).
  3. Langkah instalasi lokal (`npm install`, `npm run dev`, `npm run test`).
- **Dokumentasi Struktur Arsitektur (Developer Guide):**
  - Menjelaskan folder `src/components/ui/` sebagai penyedia komponen atomik utama (`NeoButton`, `NeoCard`, `NeoBadge`) untuk mematuhi prinsip DRY.
  - Menjelaskan folder `src/stores/` yang mengelola data tiruan secara reaktif dan terstruktur sehingga siap ditukar dengan repositori Backend API asli kapan saja.
- **Panduan AI-Driven Workflow:** Menjelaskan fungsi folder `.agents/rules/` dan `.agents/tasks/` agar pengembang lain tahu cara menggunakan asisten AI (seperti Cursor/_antigravity_) dengan disiplin spesifikasi yang sama.
- **Panduan Kontribusi (CONTRIBUTING.md):** Menjelaskan standar kualitas kode sebelum melakukan _Pull Request_ (wajib lolos linter ketat untuk i18n, tes unit komponen, dan kompilasi _build_ tanpa eror).

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembuatan Berkas README.md Utama

- [x] Buat berkas `README.md` di root project.
- [x] Tulis ringkasan visi proyek portofolio dan _tech stack_ yang digunakan.
- [x] Susun panduan instalasi dan instruksi cara menjalankan server lokal serta rangkaian pengujian (testing environment).
- [x] Tambahkan bagian penjelasan mengenai folder arsitektur `.agents/` untuk dokumentasi alur kerja spec-driven.

### [x] Pembuatan Berkas Panduan Kontribusi (CONTRIBUTING.md)

- [x] Buat berkas `CONTRIBUTING.md` di root project.
- [x] Jabarkan aturan baku bagi kontributor baru mengenai kepatuhan penulisan i18n (dilarang menulis _hardcoded string_).
- [x] Jabarkan aturan baku mengenai prinsip DRY (wajib mengekstrak komponen berulang menjadi komponen atomik).
- [x] Tuliskan tiga perintah validasi wajib sebelum melakukan _commit_ atau _Pull Request_.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Memastikan tidak ada berkas dokumentasi baru yang merusak skrip atau linter proyek)
- [x] `npm run test` (Semua skenario tes komponen wajib tetap lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
