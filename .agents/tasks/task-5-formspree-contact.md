# Modul Tugas 5: Integrasi Formspree Serverless untuk Formulir Kontak

## 1. Deskripsi Tugas

Tugas ini berfokus pada pengalihan arsitektur pengiriman pesan ke endpoint serverless Formspree sekaligus menerapkan lapisan keamanan ketat di sisi klien (_frontend security hardening_). Sistem wajib menangani ancaman injeksi skrip (XSS), serangan bot/spam otomatis, dan mitigasi percobaan pengiriman massal (_brute force / rate limiting_).

## 2. Kriteria Sukses & Ketentuan Spesifik Keamanan

- **Proteksi Injeksi Skrip (Anti-XSS / Script Injection):**
  - Sistem wajib melakukan pembersihan teks (_input sanitization_) sebelum data dikirim ke API atau dirender ulang ke elemen HTML.
  - Hapus atau konversikan karakter khusus HTML (seperti `<`, `>`, `&`, `"`, `'`) menggunakan fungsi enkoder teks atau pustaka sanitasi ringan guna mencegah eksekusi kode JavaScript berbahaya.
- **Proteksi Spam Otomatis (Honeypot Technique):**
  - Wajib menambahkan sebuah _field_ input jebakan (_honeypot field_) dengan nama samaran (contoh: `_gotcha` atau `fax_number`).
  - Input jebakan ini wajib disembunyikan secara visual dari pengguna asli menggunakan CSS (`display: none` atau `opacity: 0; absolute`).
  - **Logika Blokir:** Jika bot otomatis mengisi field jebakan ini, proses submit wajib dihentikan seketika di sisi klien tanpa mengirim request ke Formspree (simulasikan seolah-olah sukses agar bot terkecoh).
- **Mitigasi Brute Force & Pembatasan Frekuensi (Rate Limiting Lokal):**
  - Implementasikan pelacak waktu pengiriman lokal menggunakan `localStorage`.
  - Jika pengguna berhasil mengirimkan pesan, kunci formulir selama 60 detik (tampilkan hitung mundur pada tombol) sebelum mereka diizinkan mengirim pesan baru lagi.
- **Keamanan Endpoint URL:** URL unik Formspree wajib dibaca secara aman dari environment variable Vite (`import.meta.env.VITE_CONTACT_API_URL`). Dilarang keras menuliskan URL secara langsung (_hardcoded_) di dalam komponen.
- **Payload & Atribut HTML:** Setiap elemen input asli wajib memiliki atribut `name` yang tepat (`name="name"`, `name="email"`, `name="message"`) agar payload data dapat dibaca secara akurat oleh sistem Formspree[cite: 2, 4].

## 3. Daftar Tugas (Checklist Kerja AI)

### [ ] Konfigurasi Environment & Variabel

- [ ] Periksa kembali berkas `.env` di root proyek Frontend untuk memastikan `VITE_CONTACT_API_URL` sudah terisi dengan benar.

### [ ] Implementasi Lapisan Keamanan pada ContactSection.vue

- [ ] **Honeypot:** Tambahkan elemen input tersembunyi ke dalam form. Berikan gaya Neobrutalism yang disembunyikan secara penuh lewat Tailwind utilitas (`sr-only` atau `hidden`).
- [ ] **Sanitization:** Buat fungsi pembantu `sanitizeInput(text: string): string` untuk mengubah karakter tag HTML menjadi entitas aman (HTML Entities) pada model state `name`, `email`, dan `message`.
- [ ] **Rate Limiter:** Tambahkan logika pengecekan stempel waktu (_timestamp_) terakhir kali formulir sukses dikirim menggunakan `localStorage` untuk mencegah spam klik bertubi-tubi.

### [ ] Penyesuaian Fungsi Kirim (Submit Handler)

- [ ] Evaluasi input _honeypot_ saat form di-submit; jika terisi, batalkan request jaringan secara senyap.
- [ ] Terapkan fungsi pembersihan data ke objek payload sebelum dilempar ke perintah `fetch` POST Formspree.
- [ ] Aktifkan _loading state_ pada tombol aksi `NeoButton` selama proses request berjalan[cite: 2, 4].

### [ ] Pembaruan Unit & Security Testing

- [ ] Perbarui berkas pengujian `src/components/sections/__tests__/ContactSection.spec.ts`[cite: 2, 4].
- [ ] Tambahkan skenario uji keamanan:
  - Pastikan form membatalkan pengiriman saat field _honeypot_ terisi data.
  - Pastikan karakter skrip berbahaya seperti `<script>alert(1)</script>` berhasil dibersihkan atau diubah menjadi teks mentah yang aman sebelum dikirim.
  - Pastikan pengiriman berturut-turut dalam waktu kurang dari 60 detik diblokir oleh sistem _rate limiter_.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [ ] `npm run lint` (Wajib bersih dari eror)
- [ ] `npm run test` (Semua skenario tes komponen dan keamanan wajib lolos 100%)
- [ ] `npm run build` (Proyek berhasil terkompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
