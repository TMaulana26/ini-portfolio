---
trigger: always_on
---

# Aturan Penulisan Kode (Coding Style, Clean Code & Testing Guide)

## 1. Aturan Gaya Neobrutalism Minimalis

Setiap komponen kartu (_card_), tombol (_button_), dan input wajib mematuhi utility classes berikut untuk menjaga konsistensi visual:

- Gunakan border hitam tebal yang konsisten: `border-2 border-black`.
- Gunakan efek bayangan keras tanpa blur: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
- Saat tombol ditekan (_active_) atau di-hover, bayangan mengecil/menghilang untuk mensimulasikan efek mekanis: `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`.
- Warna latar belakang utama website wajib simple (misal: Slate super terang atau Putih Tulang) agar kontras dengan komponen teks.
- Wajib mendefinisikan utilitas varian dark mode (contoh: dark:bg-zinc-900 dark:text-zinc-100). Komponen kartu tetap mempertahankan border tegas yang kontras dalam mode gelap.

## 2. Prinsip Clean Code & Best Practices

- **Prinsip DRY (Don't Repeat Yourself) & Reusabilitas:** Dilarang keras menuliskan struktur HTML dan utilitas kelas Tailwind yang sama secara berulang untuk elemen sejenis.
  - Jika sebuah elemen UI digunakan lebih dari satu kali (contoh: kartu proyek, tombol aksi bertema neobrutalism, komponen _badge/tag_ teknologi), AI **wajib** mengekstraknya menjadi komponen Vue yang atomik dan _reusable_ di dalam folder `src/components/ui/` atau `src/components/common/`.
  - Manfaatkan _props_ untuk mengirimkan data dinamis ke dalam komponen _reusable_ tersebut.
- **Multi-Bahasa (i18n Mandatory):** Dilarang keras menulis teks (string) mentah langsung di dalam tag HTML/Template. Semua teks antarmuka wajib menggunakan fungsi lokalisasi `$t('key.path')`.
- **Pemisahan Logika API:** Logika _fetching_ data dari BE wajib diisolasi di dalam Pinia Store atau _services layer_. Komponen Vue hanya bertugas merender data yang disediakan store.

## 3. Komponen Vue 3 & TypeScript

- **Struktur Berkas:** Selalu gunakan format struktur: Script, Template, Style.
- **Penamaan:** Berkas komponen wajib menggunakan PascalCase (contoh: `ProjectCard.vue`, `BaseButton.vue`).
- **Props & Emits:** Wajib didefinisikan menggunakan TypeScript interfaces untuk menjamin type-safety.

## 4. Aturan Pengujian (Testing Rules)

- **Unit Testing (Utils & Stores):** Wajib mencakup kasus sukses dan penanganan eror dari store/API mock.
- **Component Testing (UI):** Komponen atomik hasil ekstensi aturan DRY (seperti tombol custom atau kartu) wajib diuji interaksinya secara terisolasi dengan mock i18n terpasang.
