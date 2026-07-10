# Portfolio Web Neobrutalism (Vue 3 + TypeScript + Tailwind)

Your Name's personal developer portfolio, designed with a striking, minimal, and premium **Neobrutalism Aesthetic** (using thick black borders, hard flat drop shadows, and high contrast colors). Built using Vue 3 (Composition API) and fully internationalized for Indonesian (ID) and English (EN) languages.

---

## 🚀 Fitur Utama

- **Aset & Estetika Premium Neobrutalism:** Visual modern dengan border tegas `border-2 border-black` dan bayangan kotak datar `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
- **Komponen Atomik DRY:** Menggunakan komponen kustom reusable (`NeoCard`, `NeoButton`, `NeoBadge`) untuk mempertahankan konsistensi visual di seluruh antarmuka.
- **Multibahasa Penuh (i18n):** Mendukung Bahasa Indonesia (ID) dan English (EN) secara dinamis tanpa ada string teks mentah (*hardcoded text*) di dalam template kode.
- **Dinamis & API-Ready:** Data profil, keahlian, riwayat karier (linimasa), dan galeri proyek diisolasi di dalam Pinia Store, sehingga siap diintegrasikan dengan backend API nyata kapan saja.
- **Formulir Kontak Validatif:** Formulir kirim pesan dengan validasi reaktif sisi klien beserta penanganan pesan kesalahan multibahasa.
- **Dukungan Dark Mode:** Beralih tema gelap/terang secara reaktif yang terintegrasi dengan kelas Tailwind CSS dan `shadcn-vue`.

---

## 🛠️ Tech Stack & Arsitektur Kode

### Framework & Library
- **Core:** Vue 3 (Composition API dengan `<script setup>`)
- **Styling:** Tailwind CSS v3 (dengan aturan tema Neobrutalism kustom)
- **State Management:** Pinia
- **Internasionalisasi:** `vue-i18n` (v10+)
- **Icons:** `lucide-vue-next`
- **Testing:** Vitest & Vue Test Utils

### Struktur Direktori Utama
```text
├── .agents/                   # Aturan proyek (rules) & daftar tugas AI (spec-driven)
├── public/                    # Aset publik statis (contoh: dummy resume PDF)
├── src/
│   ├── assets/                # CSS global & style tokens Tailwind
│   ├── components/            # Komponen Vue
│   │   ├── common/            # Komponen umum (seperti ProjectCard)
│   │   ├── sections/          # Komponen layout per seksi (Contact, Footer, dll)
│   │   └── ui/                # Komponen atomik utama DRY (NeoCard, NeoButton, dll)
│   ├── locales/               # Berkas JSON lokalisasi bahasa (id.json & en.json)
│   ├── stores/                # Pinia global store (portofolio data & profil)
│   ├── App.vue                # Layout utama aplikasi
│   ├── main.ts                # Entrypoint aplikasi
│   └── i18n.ts                # Konfigurasi defensif vue-i18n
```

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
Pastikan Anda telah menginstal **Node.js** (LTS) dan **npm** di sistem Anda.

### 1. Instalasi Dependensi
Jalankan perintah berikut di root folder untuk menginstal modul pendukung:
```bash
npm install
```

### 2. Jalankan Dev Server
Jalankan server lokal untuk melihat hasil langsung di browser:
```bash
npm run dev
```
Buka peramban dan akses alamat `http://localhost:5173`.

### 3. Jalankan Pengujian Unit & Komponen (Test Suite)
Jalankan rangkaian tes otomatis untuk memverifikasi fungsionalitas komponen dan store:
```bash
npm run test:unit
```
Untuk menjalankan tes sekali jalan (*single run*):
```bash
npm run test:unit -- --run
```

### 4. Kompilasi Bundel Produksi (Build)
Lakukan kompilasi kode dan optimasi bundle untuk rilis produksi:
```bash
npm run build
```
Hasil build akan berada di direktori `dist/`.

---

## 🤖 AI-Driven Workflow (.agents)

Proyek ini dikembangkan menggunakan paradigma *Spec-Driven Development* dibantu oleh AI Agent. Seluruh pedoman visual, penulisan kode, serta tugas dikelola secara transparan dalam folder `.agents/`:
- **Aturan Proyek (`.agents/rules/`):** Menyimpan spesifikasi teknis stack (`tech-stack.md`) dan standar penulisan kode serta pengujian (`write.md`).
- **Instruksi Tugas (`.agents/tasks/`):** Menyimpan daftar tugas modular berurutan (dari Task 0 hingga Task 4) yang diselesaikan dan divalidasi satu per satu secara disiplin.
