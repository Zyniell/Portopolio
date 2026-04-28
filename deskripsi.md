# MealApp - React Portfolio Project

MealApp adalah aplikasi penemuan resep masakan modern yang dibangun menggunakan ekosistem React terbaru. Aplikasi ini dirancang untuk merepresentasikan praktik-praktik terbaik dalam pengembangan antarmuka web, arsitektur yang modular, pemrosesan data, serta integrasi dengan API eksternal yang mulus.

## 🚀 Fitur Utama

- **Pencarian & Penjelajahan Resep**: Fitur reaktif untuk mencari resep makanan secara instan menggunakan sumber database TheMealDB.
- **Katalog Kategori**: Jelajahi berbagai katalog makanan mulai dari pasta, *seafood*, hingga makanan pencuci mulut (*dessert*).
- **Detail Panduan Resep Integral**: Memuat instruksi lengkap teks memasak, takaran pasti bahan baku masakan, beserta sisipan video tutorial melalui pemutar YouTube interaktif.
- **Manajemen Resep Favorit (*Persisted*)**: Pengguna dapat menyukai / menyimpan resep. Data preferensi Anda dapat tersimpan di memori browser lokal (*localStorage*), memastikan resep tidak akan hilang setelah tab (*browser*) ditutup atau *refresh*.

## 🛠️ Stack Teknologi yang Digunakan

Aplikasi ini mendemonstrasikan keahlian integrasi paket-paket populer *frontend*:

- **React 19 (Vite.js)**: Mesin utama pembuatan *User Interface* dengan performa pembangunan yang sangat cepat.
- **Tailwind CSS v4**: Metodologi desain fungsional *(utility-first)* untuk menghasilkan UI *card* berbayang responsif, gradasi elegan, minimalis, dan sangat interaktif.
- **React Router DOM v7**: Pengelolaan riwayat navigasi dan pergantian halaman yang efisien menggunakan SPA (*Single Page Application*).
- **TanStack React Query v5 & Axios**: Solusi terdepan untuk mengambil data HTTP. Membantu menghindari muatan jaringan berlebihan (*caching*) dan menampilkan status *loading skeleton* dengan mulus.
- **Zustand**: Implementasi sistem global *State Management* (penyimpanan variabel status favorit) yang ringan dan praktis *zero-boilerplate*.
- **Lucide React**: Implementasi set *icon* vektor modern nan rapi (SVG).
- **Utilitas Performa**: Penggabungan respons utilitas CSS menggunakan `tailwind-merge` & `clsx`, serta menunda *render* aset gambar menggunakan `loading="lazy"` native.

## 📁 Pola Arsitektur Folder (*Clean Code*)

Proyek ini telah dikelompokkan sedemikian rupa agar tertata dan *scalable* (mudah diperbesar spesifikasinya di kemudian hari).

- `src/api/` -> Lokasi inisiasi *host* dasar panggilan *client* Axios (base URL, interception).
- `src/components/` -> Kepingan antarmuka ringkas. Memiliki spesifikasi struktur (*UI*, *Meal*, *Shared*).
- `src/hooks/` -> Menyimpan *custom hooks* eksklusif yang memisahkan logika (fetching) dari komponen visual DOM.
- `src/layouts/` -> Penyedia struktur kerangka (Navbar dan Footer bersisian).
- `src/pages/` -> Induk tampilan aplikasi utuh berdasarkan pemetaan pada router alamat web.
- `src/store/` -> Induk repositori keadaan statis non-lokal aplikasi (*favorites*).
- `src/utils/` -> Berfungsi memuat asisten fungsi / pembantu mini, misalnya penggabungan eksekusi *CSS class*.
