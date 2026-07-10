# Modul Tugas 3: Pembuatan Formulir Kontak & Kaki Halaman (Contact Form & Footer)

## 1. Deskripsi Tugas

Tugas ini berfokus pada pembuatan seksi Formulir Kontak (Contact Form Section) dengan validasi input yang aman dan translatif, serta pembuatan Kaki Halaman (Footer Section) sebagai tempat penempatan tautan media sosial profesional.

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Kepatuhan Keras Prinsip DRY & Gaya Neobrutalism:**
  - Pembuatan form wajib menggunakan kontainer `NeoCard.vue` dan tombol aksi `NeoButton.vue`.
  - Elemen input teks (`<input>` dan `<textarea>`) wajib didesain konsisten dengan gaya Neobrutalism: border hitam tebal `border-2 border-black`, bayangan tegas saat fokus, dan latar belakang yang bersih.
- **Formulir Kontak dengan Validasi Translatif:**
  - Menyediakan input untuk: Nama, Email, dan Pesan.
  - **Validasi Sisi Klien (Client-side Validation):** Sistem wajib memeriksa bahwa semua field telah diisi dan email memiliki format yang valid sebelum form diizinkan untuk dikirim.
  - Pesan eror yang muncul di bawah input wajib bersifat dinamis dan mengambil dari file lokalisasi i18n (contoh: teks "Email wajib diisi" atau "Format email tidak valid" berubah otomatis sesuai bahasa aktif).
  - Tampilkan efek umpan balik visual sukses (seperti Toast/Alert dari shadcn-vue) saat simulasi pengiriman form berhasil.
- **Footer Media Sosial yang Simple:**
  - Menampilkan teks hak cipta (_copyright_) yang dinamis menggunakan tahun saat ini.
  - Menyediakan jajaran tombol ikonik (menggunakan `NeoButton` versi kecil atau ikon dari lucide-vue) yang mengarah langsung secara aman (`target="_blank" rel="noopener noreferrer"`) ke GitHub dan LinkedIn Anda.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembaruan Berkas Bahasa (i18n JSON)

- [x] Daftarkan kata kunci teks formulir kontak di `src/locales/id.json` landmarks dan `src/locales/en.json` (termasuk placeholder input, label, pesan eror validasi, dan notifikasi sukses kirim pesan).

### [x] Implementasi UI Formulir Kontak Neobrutalism

- [x] Buat komponen berkas `src/components/sections/ContactSection.vue`.
- [x] Susun elemen form input dan textarea menggunakan utility classes Tailwind yang mematuhi batas ketebalan border hitam proyek.
- [x] Hubungkan input form ke objek state reaktif lokal menggunakan `v-model`.

### [x] Logika Validasi & Simulasi Pengiriman

- [x] Buat fungsi pemvalidasi input berbasis TypeScript untuk memeriksa keabsahan email dan keterisian data.
- [x] Hubungkan event submit form dengan fungsi simulasi pengiriman yang menampilkan status loading pada `NeoButton` dan memicu alert sukses.

### [x] Pembuatan UI Footer & Social Links

- [x] Buat komponen berkas `src/components/sections/TheFooter.vue`.
- [x] Susun layout kaki halaman yang minimalis dengan penempatan link GitHub dan LinkedIn profesional Anda.

### [x] Pembuatan Unit & Component Testing

- [x] Buat berkas pengujian komponen `src/components/sections/__tests__/ContactSection.spec.ts`.
- [x] Pastikan pengujian mencakup skenario: form memicu pesan eror jika email salah, form berhasil memicu status sukses jika semua input valid, dan semua pesan eror mematuhi bahasa i18n yang aktif.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Wajib bersih dari eror kode dan eror teks hardcoded i18n)
- [x] `npm run test` (Semua skenario tes komponen wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
