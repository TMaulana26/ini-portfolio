# Modul Tugas 8: Otomatisasi CI/CD & Persiapan Produksi Akhir (GitHub Actions - Spesifik Branch `mtim` & Rilis Tag)

## 1. Deskripsi Tugas

Tugas ini difokuskan pada tahap finalisasi arsitektur portofolio menuju status _Production Ready_ dengan menerapkan praktik _Continuous Integration/Continuous Deployment_ (CI/CD) yang ketat. Anda akan merancang dan mengonfigurasi alur kerja (_workflow_) menggunakan GitHub Actions untuk mengotomatiskan proses pengujian, kompilasi kode, dan peluncuran (_deployment_) ke peladen _static hosting_.

Untuk menjaga stabilitas lingkungan produksi, peluncuran ini diatur secara eksklusif agar **hanya terpicu ketika ada perubahan pada branch `mtim` dan saat pembuatan tag rilis terbaru (misalnya `v1.0.0`)**. Pendekatan ini mencegah kode yang belum teruji dari branch pengembangan (seperti `main` atau `dev`) agar tidak terpublikasi secara tidak sengaja ke domain kustom `mtim.my.id`.

## 2. Kriteria Sukses & Ketentuan Spesifik Fitur

- **Pembatasan Pemicu Alur Kerja (Targeted Triggers):**
- Berkas konfigurasi YAML (di bawah `.github/workflows/`) wajib memiliki aturan pematikan (_trigger rules_) yang sangat spesifik.
- Alur kerja tidak boleh berjalan pada branch `main` atau saat _Pull Request_ biasa.
- Alur kerja **wajib** terpicu hanya jika ada aktivitas `push` langsung ke branch `mtim`, atau jika ada `push tags` yang menggunakan konvensi penamaan rilis versi (contoh: `v*.*.*`).

- **Tahapan Pipeline Produksi (Three-Tier Checks):**
- **Tier 1 (Code Quality):** Menjalankan _Linter_ (`npm run lint`) untuk memastikan standarisasi penulisan kode TypeScript dan Vue bersih dari _smells_ dan potensi _runtime error_.
- **Tier 2 (Testing Suite):** Menjalankan seluruh pengujian unit dan komponen (`npm run test`) untuk mengonfirmasi bahwa logika bisnis, filter _access mode_ pada kartu proyek, dan keamanan _honeypot_ pada form kontak tetap berjalan sempurna.
- **Tier 3 (Build & Deploy):** Melakukan proses kompilasi optimasi tinggi (`npm run build`) yang akan menghasilkan bundel aset statis HTML, CSS, JS terkompresi, lalu mendistribusikannya ke platform _hosting_.

- **Konfigurasi Resolusi Domain Kustom (`mtim.my.id`):**
- Untuk lingkungan GitHub Pages, sistem wajib secara otomatis membuat atau menyertakan berkas `CNAME` yang secara eksplisit memuat teks `mtim.my.id` di dalam folder hasil kompilasi (`dist/` atau `public/`). Hal ini mutlak diperlukan agar konfigurasi _routing_ domain tidak tertimpa atau hilang setiap kali aksi peluncuran otomatis dieksekusi.

- **Isolasi Keamanan Variabel Lingkungan:**
- Token otentikasi, kunci API, dan URL Endpoint Formspree (`VITE_CONTACT_API_URL`) dilarang direkam langsung ke dalam berkas repositori (baik di `.env` yang di-_commit_ maupun di dalam skrip YAML terbuka).
- Nilai-nilai sensitif ini wajib disuntikkan secara dinamis saat proses _build_ berlangsung melalui fasilitas enkripsi **GitHub Repository Secrets** (direferensikan sebagai `${{ secrets.VITE_CONTACT_API_URL }}`).

## 3. Daftar Tugas (Checklist Kerja AI)

### [x] Persiapan Repositori & Domain Kustom

- [x] Buat berkas statis bernama `CNAME` di dalam folder `public/`.
- [x] Isi berkas `CNAME` tersebut secara eksklusif dengan teks satu baris: `mtim.my.id`.
- [x] Pastikan saat ini sistem sedang beroperasi atau berfokus pada branch yang bernama `mtim`.

### [x] Penyusunan Arsitektur Workflow YAML

- [x] Buat direktori bersarang `.github/workflows/` di posisi _root_ proyek jika struktur tersebut belum eksis.
- [x] Buat berkas konfigurasi dengan nama `.github/workflows/production-deploy.yml`.
- [x] Tulis blok pemicu (_trigger block_) untuk membatasi eksekusi hanya pada branch `mtim` dan rilis tag:

```yaml
name: Production Deployment (mtim.my.id)

on:
  push:
    branches:
      - mtim
    tags:
      - "v*.*.*"
```

- [x] Tentukan lingkungan pelaksana (_runner environment_) menggunakan `ubuntu-latest`.
- [x] Konfigurasikan aksi `actions/setup-node@v4` untuk menyiapkan Node.js, pastikan untuk mengaktifkan mekanisme _caching_ bawaan (`cache: 'npm'`) guna mempercepat durasi instalasi pada eksekusi berikutnya.

### [x] Injeksi Variabel & Eksekusi Skrip Bertahap

- [x] Di dalam langkah atau _job_ untuk proses kompilasi, petakan variabel rahasia ke dalam _environment_ proses agar Vite dapat menyematkannya ke aplikasi statis:

```yaml
env:
  VITE_CONTACT_API_URL: ${{ secrets.VITE_CONTACT_API_URL }}
```

- [x] Tuliskan urutan perintah terminal eksekusi secara hierarkis:
  - [x] Jalankan `npm ci` untuk instalasi _dependencies_ yang direplikasi persis dengan berkas `package-lock.json`.
  - [x] Jalankan `npm run lint`.
  - [x] Jalankan `npm run test`.
  - [x] Jalankan `npm run build`.

- [x] Konfigurasikan utilitas atau pustaka _deployment_ resmi (seperti `peaceiris/actions-gh-pages` untuk GitHub Pages atau utilitas Vercel CLI) yang bertugas mengekspor direktori `./dist` ke peladen publik.

## 4. Validasi Akhir (Proses Verifikasi Rilis)

- [x] Navigasikan repositori ke halaman _Settings > Secrets and variables > Actions_ dan pastikan `VITE_CONTACT_API_URL` telah diinputkan dengan benar.
- [x] Lakukan _commit_ dari lokal yang ditujukan khusus ke branch `mtim` dan jalankan `git push origin mtim`.
- [x] Untuk menguji peluncuran rilis terbaru, buatlah tag versi baru dengan perintah `git tag v1.0.0` diikuti dengan instruksi `git push origin v1.0.0`.
- [x] Buka tab **Actions** di panel GitHub dan amati instansiasi _workflow_. Pastikan proses berhenti atau diabaikan jika di-_push_ ke branch lain, dan berjalan sukses (indikator warna hijau) ketika tag terbaru diluncurkan di branch `mtim`.
- [x] Validasi hasil akhir dengan mengakses `[https://mtim.my.id](https://mtim.my.id)` melalui peramban web mode penyamaran (_incognito_) untuk memastikan portofolio termuat dengan aset versi terbaru tanpa intervensi _cache_ lokal, dan uji kembali form kontak _serverless_ untuk menjamin variabel lingkungan sukses disuntikkan.
