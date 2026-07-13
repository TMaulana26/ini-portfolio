# Modul Tugas 9: Implementasi Efek Latar Belakang Dinamis (Starry Night & Clouded Sky)

## 1. Deskripsi Tugas

Tugas ini berfokus pada pembuatan komponen latar belakang global interaktif yang merespons perubahan tema aplikasi (Light/Dark Mode). Latar belakang akan menampilkan efek _Clouded Sky_ (Awan melayang bergaya Neobrutalism) saat mode terang, dan efek _Starry Night_ (Bintang berkedip lambat berbasis HTML5 Canvas) saat mode gelap, tanpa mengorbankan performa _rendering_ halaman.

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Estetika Neobrutalism Latar Belakang:**
  - **Light Mode (Clouded Sky):** Menggunakan bentuk awan 2D datar berwarna putih dengan border hitam tebal (minimal 3px - 4px) dan bayangan keras (_hard shadow_) khas Neobrutalism. Awan bergerak melayang secara kontinu dari kanan ke kiri menggunakan animasi CSS berkecepatan lambat agar tidak mengganggu keterbacaan teks.
  - **Dark Mode (Starry Night):** Menggunakan elemen HTML5 Canvas untuk menggambar partikel bintang (titik bulat kecil berdiameter 1px - 3px) dengan sebaran acak secara efisien. Bintang memiliki efek berkedip (_twinkling_) berbasis animasi matriks waktu yang halus.
- **Optimasi Performa & Aksesibilitas:**
  - Seluruh kontainer latar belakang wajib menggunakan properti CSS `pointer-events: none` dan `z-index` negatif paling bawah untuk memastikan tidak menghalangi interaksi klik, seleksi teks, atau navigasi pada elemen portofolio utama.
  - Siklus rendering Canvas wajib dihentikan sepenuhnya saat beralih ke Light Mode guna menghemat penggunaan CPU/GPU pada peramban.

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Pembuatan Komponen Latar Belakang Global

- [x] Buat berkas komponen baru `src/components/ui/BackgroundEffect.vue`.
- [x] Hubungkan komponen dengan state deteksi tema gelap (`isDarkMode` atau sejenisnya) yang bersumber dari store atau utilitas tema aplikasi Anda.
- [x] Implementasikan struktur HTML berupa elemen `<canvas>` bersyarat (`v-if="isDarkMode"`) dan kontainer awan (`v-else`).

### [x] Logika Animasi & Desain CSS

- [x] Tulis fungsi inisialisasi Canvas untuk menggambar partikel bintang, lengkap dengan logika `requestAnimationFrame` untuk memanipulasi nilai opasitas (_alpha_) partikel secara berkala.
- [x] Tambahkan pemantau reaktif (`watch`) terhadap perubahan tema untuk menginisialisasi ulang sistem bintang saat masuk ke mode gelap, atau membersihkan memori saat keluar.
- [x] Tulis kode CSS scoped untuk merepresentasikan awan Neobrutalism menggunakan kombinasi border tebal, bayangan solid, dan `@keyframes` pergeseran posisi horizontal (`transform: translateX`).

### [x] Integrasi ke Struktur Aplikasi Utama

- [x] Buka berkas komponen utama `src/App.vue`.
- [x] Impor dan pasang komponen `<BackgroundEffect :is-dark-mode="isDark" />` tepat di dalam _wrapper_ paling luar.
- [x] Pastikan komponen-komponen seksi portofolio lainnya (Hero, Projects, Contact) tidak memiliki latar belakang warna solid bawaan (`bg-transparent`) agar efek dekorasi tembus ke belakang.

### [x] Pembuatan Uji Komponen (Unit Testing)

- [x] Buat berkas pengujian `src/components/ui/__tests__/BackgroundEffect.spec.ts`.
- [x] Pastikan pengujian memverifikasi bahwa elemen `<canvas>` terpasang saat parameter mode gelap bernilai positif, dan elemen awan muncul saat mode terang aktif.

## 4. Validasi Akhir (Wajib Dijalankan Berurutan)

- [x] `npm run lint` (Wajib bersih dari eror sintaks)
- [x] `npm run test` (Seluruh tes reaktivitas komponen wajib lolos 100%)
- [x] `npm run build` (Proyek berhasil dikompilasi dengan sukses)

---

## Catatan Teknis (Diisi oleh AI jika ada perubahan skema)

Latar belakang membagi efek menjadi dua bagian:
1. Mode Terang: Animasi awan CSS scoped horizontal drift berkecepatan lambat (will-change: transform untuk optimasi rendering) dengan border 3px dan bayangan solid khas Neobrutalisme.
2. Mode Gelap: HTML5 Canvas untuk menggambar bintang (partikel bulat 1px - 3px) berkedip. Loop dibersihkan dan dihentikan sepenuhnya saat berpindah ke mode terang atau komponen di-unmount.

