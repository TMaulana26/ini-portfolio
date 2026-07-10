# Aturan Alur Kerja & Validasi Kode

## 1. Aturan Pembaruan Dokumen Tugas (Tasks Update)

Setiap kali AI selesai mengimplementasikan sebuah fitur atau halaman yang diminta:

- AI **wajib** memperbarui file `.md` yang relevan di folder `.agents/tasks/`.
- Ubah status kotak centang tugas dari belum selesai `[ ]` menjadi selesai `[x]`.

## 2. Validasi Kode Otomatis (Sanity Check & Automated Testing)

Sebelum AI menyatakan bahwa tugas telah "Selesai" dan siap diserahkan kepada pengguna, AI wajib menjalankan validasi berikut secara berurutan di terminal:

1. **Validasi Kualitas Kode & i18n:**
   - Jalankan `npm run lint`.
   - **Pemeriksaan Kepatuhan i18n:** AI wajib memeriksa secara mandiri bahwa tidak ada kunci teks baru di dalam kode yang menghasilkan nilai kosong (_missing translation_) di berkas `src/locales/*.json`. Pastikan semua objek kunci bahasa Indonesia (`id.json`) dan bahasa Inggris (`en.json`) sinkron 100%. Jika ada teks baru di UI, berkas JSON **harus** sudah diperbarui terlebih dahulu.
2. **Validasi Pengujian (Testing):** Jalankan `npm run test`. Semua skenario tes komponen dan store wajib lolos 100%.
3. **Validasi Kecocokan Build:** Jalankan `npm run build`. AI wajib memastikan proyek dapat terkompilasi dengan sukses tanpa ada eror TypeScript atau eror bundler.

> **PENTING:** Jika salah satu dari ketiga perintah di atas menghasilkan eror, ada tes yang gagal, atau ditemukan teks hardcoded/translasinya tertinggal di JSON, AI dilarang menandai tugas sebagai selesai. AI harus memperbaiki file bahasa atau kodenya terlebih dahulu sampai statusnya sukses.
