# Mini Project: Form Pendaftaran Workshop

## Identitas Praktikum

* **Mata Kuliah:** Pemrograman Web
* **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
* **Nama:** Nur Muhammad Baha Uddin Naqsabandi
* **NIM:** 312510264
* **Program Studi:** Teknik Informatika
* **Fakultas:** Teknik
* **Instansi:** Universitas Pelita Bangsa
* **Tahun:** 2026

---

## Deskripsi Mini Project

Mini Project ini adalah pengembangan halaman web interaktif berupa **Form Pendaftaran Workshop Web Development**. Aplikasi ini dirancang agar responsif (nyaman digunakan pada perangkat *desktop* maupun *mobile*) dan memiliki 4 fitur interaktif utama menggunakan JavaScript DOM dan *Event Handling*:

1. **Validasi Input Real-Time & Submit:** Validasi nama (minimal 3 karakter), alamat email (menggunakan pola *Regex*), dan kelengkapan pilihan sesi workshop.
2. **Penghitung Karakter & Live Preview:** Menghitung jumlah karakter nama secara *real-time* (`maxlength="50"`) serta menampilkan ringkasan data yang diisi pengguna secara langsung (Event `input` & `change`).
3. **Pesan Notifikasi Dinamis:** Menampilkan pesan kesalahan (*error*) atau pesan sukses langsung pada halaman web.
4. **Tombol Reset Input:** Mengosongkan seluruh kolom form serta memperbarui tampilan *live preview* kembali ke kondisi awal (Event `click`).

---

## Struktur File Proyek

```
Mini_Project_Workshop/
├── index.html     # Menyimpan struktur form dan kartu ringkasan
├── style.css      # Desain responsif dan gaya tampilan notifikasi
├── script.js     # Logika manipulasi DOM, validasi, dan event handler
└── README.md      # Dokumentasi mini project
```

---

## Hasil Tampilan dan Pengujian

Berikut adalah dokumentasi tampilan antarmuka dan hasil pengujian fitur interaktif pada Mini Project Form Pendaftaran Workshop:

### Tampilan Antarmuka dan Hasil Pengujian

* **Screenshot Mini Project:**

  ![Tampilan Form Pendaftaran Workshop](screenshots/mini_project_workshop.png)

  *Keterangan Gambar:* 
  Halaman Form Pendaftaran Workshop menampilkan pengujian fitur interaktif secara keseluruhan:
  * Penghitung karakter nama berjalan saat mengetik.
  * Kartu *Ringkasan Pendaftaran* memperbarui data secara langsung (*Live Preview*).
  * Notifikasi status (gagal/sukses) tampil di bagian atas form.
  * Antarmuka bersih dan responsif.

---

## Cara Menjalankan Proyek

1. Simpan file `index.html`, `style.css`, dan `script.js` ke dalam satu folder kerja.
2. Buat folder `screenshots` dan letakkan foto hasil pengujian aplikasi dengan nama `mini_project_workshop.png`.
3. Buka file `index.html` menggunakan browser modern (Google Chrome, Mozilla Firefox, atau Microsoft Edge).
4. Atau gunakan ekstensi **Live Server** di VS Code untuk menjalankan aplikasi pada server lokal.