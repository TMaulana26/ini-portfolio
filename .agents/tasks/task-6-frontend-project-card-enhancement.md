# Modul Tugas 6: Pembaruan UI Kartu Proyek (Gambar & Tiga Mode Akses)

## 1. Deskripsi Tugas

Tugas ini berfokus pada peningkatan komponen kartu proyek (`ProjectCard.vue`) di Frontend portofolio Anda. Area _header_ kartu proyek yang sebelumnya hanya menampilkan teks kategori bermerek warna solid akan diubah menjadi tampilan gambar _screenshot_ proyek yang sebenarnya. Selain itu, komponen wajib mendukung 3 mode tipe akses untuk menyesuaikan ketersediaan repositori Git dan tautan demo live.

## 2. Kriteria Sukses & Ketentuan Spesifik

- **Tampilan Gambar Asli (Screenshot Render):**
  - Area atas kartu wajib menampilkan gambar proyek asli dari properti `image` atau `screenshotUrl` dengan rasio aspek proporsional dan terbungkus dalam bingkai border tebal bertema Neobrutalism.
  - Untuk menjaga identitas kategori, teks kategori (_FRONTEND_, _FULLSTACK_, _BACKEND_) wajib dipertahankan sebagai elemen label melayang (_badge overlay_) berlatar warna Neobrutalism kontras di atas gambar.
- **Implementasi 3 Mode Akses Kartu:**
  - Properti data proyek wajib diperluas dengan kolom `accessMode` (berisi nilai: `'internal'`, `'standard'`, atau `'coming_soon'`).
  - **Mode Internal:** Khusus proyek internal perusahaan rahasia. Sembunyikan tombol "View Code" dan "Live Demo" sepenuhnya dari layout kartu.
  - **Mode Standar:** Proyek publik normal. Menampilkan kedua tombol ("View Code" dan "Live Demo") secara lengkap.
  - **Mode Coming Soon:** Proyek pribadi/personal yang sedang dikembangkan. Hanya menampilkan tombol "View Code" (tautan ke repositori Git), sedangkan tombol "Live Demo" disembunyikan.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembaruan Skema Tipe & Mock Data

- [x] Buka definisi antarmuka TypeScript proyek (`Project` interface) dan tambahkan properti `image: string` dan `accessMode: 'internal' | 'standard' | 'coming_soon'`.
- [x] Perbarui objek reaktif `projects` di Pinia store/state lokal Anda dengan konfigurasi mode baru:
  - Proyek KAI (ROSCHA, RIMS) diset ke mode `'internal'`.
  - Proyek Lumoshive diset ke mode `'standard'`.
  - Proyek personal (TM-KANA, Headless CMS, Chatbot) diset ke mode yang sesuai (`'standard'` atau `'coming_soon'`).
  - Tambahkan path berkas gambar lokal/URL ke properti `image` pada tiap objek proyek.

### [x] Modifikasi Komponen ProjectCard.vue

- [x] Ganti div latar warna atas kartu menjadi elemen `<img>` yang membaca data `project.image` secara reaktif dengan gaya Neobrutalism (border bawah hitam tebal).
- [x] Posisikan label teks kategori sebagai elemen absolut di sudut atas kartu agar tetap terlihat estetis.
- [x] Implementasikan direktif bersyarat Vue (`v-if` / `v-show`) pada area tombol aksi bawah kartu untuk meregulasi kemunculan tombol berdasarkan nilai `project.accessMode`.

### [x] Pembaruan Unit Testing Komponen

- [x] Perbarui berkas pengujian komponen `ProjectCard.spec.ts`.
- [x] Tambahkan skenario uji untuk memastikan:
  - Tombol aksi kosong sama sekali saat disuplai objek proyek dengan mode `internal`.
  - Tombol "Live Demo" hilang tetapi tombol "View Code" tetap ada saat disuplai objek proyek dengan mode `coming_soon`.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Pastikan tipe data TypeScript aman tanpa eror)
- [x] `npm run test` (Seluruh tes visual kartu proyek wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil terkompilasi tanpa kendala)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

_Belum ada catatan._
