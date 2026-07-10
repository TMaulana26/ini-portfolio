# Panduan Kontribusi (Contributing Guidelines)

Terima kasih telah tertarik untuk berkontribusi pada proyek Portofolio Web Neobrutalism ini! Untuk menjaga kualitas kode, konsistensi visual, serta standarisasi multibahasa, seluruh kontributor wajib mengikuti panduan di bawah ini sebelum mengirimkan Pull Request (PR) atau melakukan Commit.

---

## 1. Aturan Gaya Neobrutalism Minimalis

Semua elemen UI baru (seperti kartu, tombol, input, badge) wajib mematuhi utility classes Tailwind berikut:
- **Borders:** Border hitam tebal konsisten `border-2 border-black` (atau `dark:border-white` dalam mode gelap).
- **Shadows:** Bayangan kotak datar keras tanpa blur `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
- **Transitions (Hover/Active):** Ketika elemen ditekan/di-hover, buat efek bayangan mengecil untuk sensasi mekanis: `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`.
- **Colors:** Gunakan palet warna bertema retro neobrutalism yang kontras (seperti `bg-neoPink`, `bg-neoCyan`, `bg-neoYellow`, `bg-neoGreen`) yang dipadukan secara harmonis.

---

## 2. Kepatuhan Prinsip DRY (Don't Repeat Yourself)

Dilarang keras menuliskan struktur HTML dan utility classes Tailwind yang sama secara berulang untuk elemen UI sejenis.
- Jika elemen UI digunakan lebih dari satu kali (misal: kartu proyek, tombol bertema, badge keahlian), Anda **wajib** mengekstraknya atau menggunakannya dari komponen atomik kustom yang sudah disediakan di folder:
  - `src/components/ui/` (Komponen UI dasar: `NeoCard.vue`, `NeoButton.vue`, `NeoBadge.vue`)
  - `src/components/common/` (Komponen umum: `ProjectCard.vue`)
- Manfaatkan properti (*props*) dengan TypeScript interface untuk mengirimkan data dinamis ke dalam komponen reusable tersebut.

---

## 3. Kepatuhan Keras Multibahasa (i18n-Safe)

Proyek ini menggunakan linter ketat `@intlify/vue-i18n/no-raw-text` untuk memastikan aplikasi sepenuhnya siap diterjemahkan.
- **Larangan Teks Mentah (Raw Text):** Dilarang menulis string literal mentah langsung di dalam tag HTML atau template Vue (contoh: `<p>Tentang Saya</p>` adalah pelanggaran).
- **Gunakan Fungsi Lokalisasi:** Selalu gunakan `$t('key.path')` untuk merender teks antarmuka.
- **Daftarkan Kunci Terjemahan:** Seluruh string baru wajib didaftarkan secara berpasangan ke dalam berkas lokalisasi:
  - `src/locales/id.json` (Bahasa Indonesia)
  - `src/locales/en.json` (Bahasa Inggris)
- **Penanganan Emojis & Teks Atribut:** String literal di dalam ekspresi JavaScript (seperti ternary) atau atribut (seperti `aria-label` atau emoji `💻` di template) wajib dibungkus/dikelola menggunakan terjemahan i18n demi menghindari pemblokiran oleh linter.

---

## 4. Alur Kerja Validasi Mandatori (Pre-Commit / Pre-PR)

Sebelum Anda melakukan commit atau membuat Pull Request, Anda **wajib** menjalankan 3 tahapan pengujian ini secara berurutan dan memastikan semuanya lolos tanpa adanya kesalahan:

### Langkah 1: Pemeriksaan Kualitas & Format Kode (Linting)
Jalankan linter untuk memverifikasi kepatuhan i18n dan standar penulisan Vue/TS:
```bash
npm run lint
```
*Status wajib: Bersih dari eror/peringatan linter.*

### Langkah 2: Pengujian Unit & Komponen (Testing)
Pastikan semua skenario tes unit lama dan baru tetap lolos 100% menggunakan Vitest:
```bash
npm run test:unit -- --run
```
*Status wajib: Seluruh test cases wajib lolos (100% passed).*

### Langkah 3: Pengujian Kompilasi (Build)
Pastikan proyek terkompilasi dengan sempurna untuk bundel produksi tanpa kegagalan tipe data TypeScript:
```bash
npm run build
```
*Status wajib: Build berhasil terselesaikan dengan sukses.*
