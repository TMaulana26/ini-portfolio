---
trigger: always_on
---

# Spesifikasi Tech Stack & Arsitektur

## Teknologi Utama

- **Framework:** Vue.js 3 (Composition API dengan struktur `<script setup>`).
- **Styling:** Tailwind CSS (Implementasi gaya Neobrutalism: border tegas `border-2 border-black`, bayangan kotak keras `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, dan warna latar yang clean). Mendukung fitur Dark Mode menggunakan strategi kelas (.dark) yang terintegrasi dengan shadcn-vue.
- **Komponen UI:** shadcn-vue (Disesuaikan agar selaras dengan tema neobrutalism).
- **Internasionalisasi (i18n):** `vue-i18n` untuk mendukung bahasa Indonesia dan English.
- **State & Data Fetching:** Pinia untuk manajemen state global dan Axios/Fetch untuk pengambilan data dinamis dari BE.
- **Testing Framework:** Vitest dan Vue Test Utils untuk Unit & Integration Testing.
