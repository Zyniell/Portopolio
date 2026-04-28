# 🍲 MealApp - React Portfolio Project

![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square)
![React 19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-Fast-646CFF?style=flat-square&logo=vite)

MealApp adalah aplikasi penemuan resep masakan modern yang dibangun menggunakan ekosistem React terbaru. Aplikasi ini dirancang untuk merepresentasikan praktik-praktik terbaik dalam pengembangan antarmuka web, arsitektur yang modular, pemrosesan data, serta integrasi dengan API eksternal secara mulus.

> **💡 Catatan Portofolio**: Proyek ini mendemonstrasikan keahlian integrasi *frontend* modern (*Clean Code*, Performa, *State Management*, & UI/UX yang dinamis).

---

## 🚀 Fitur Utama

- 🔍 **Pencarian & Penjelajahan Resep**: Fitur reaktif untuk mencari resep makanan secara instan menggunakan sumber dari TheMealDB API.
- 📂 **Katalog Kategori**: Jelajahi berbagai katalog makanan mulai dari pasta, *seafood*, hingga makanan pencuci mulut (*dessert*).
- 📖 **Detail Panduan Resep Integral**: Memuat instruksi lengkap memasak teks demi teks, takaran pasti bahan baku masakan, beserta sisipan video tutorial melalui pemutar YouTube interaktif.
- ❤️ **Manajemen Resep Favorit (*Persisted*)**: Pengguna dapat menyukai / menyimpan resep. Data preferensi secara aman tersimpan di dalam memori lokal browser (*localStorage*), memastikan resep tidak akan hilang setelah *browser* ditutup atau di-refresh.

---

## 🛠️ Stack Teknologi & Infrastruktur

Aplikasi ini menggunakan berbagai komponen terbaik di ekosistem frontend modern untuk performa dan interaktivitas:

*   ⚛️ **[React 19 (Vite.js)](https://vitejs.dev/)**: Mesin utama UI dengan performa kompilasi pembangunan yang sangat cepat.
*   🎨 **[Tailwind CSS v4](https://tailwindcss.com/)**: Metodologi *utility-first* untuk UI *card* responsif, antarmuka bercorak bayangan presisi, dan minimalis.
*   🧭 **[React Router DOM v7](https://reactrouter.com/)**: Pengelolaan navigasi berbasis *Single Page Application* (SPA) dengan penanganan riwayat yang efisien.
*   🔄 **[TanStack React Query v5 & Axios](https://tanstack.com/query/latest)**: Solusi *data-fetching* andalan. Menghindari muatan *request* jaringan berlebihan (*caching*) dan menampilkan status *loading skeleton* halus.
*   🐻 **[Zustand](https://zustand-demo.pmnd.rs/)**: *State Management* statis antar komponen yang sangat ringan dan mudah di-integrasikan untuk penyimpanan status favorit.
*   ✨ **[Lucide React](https://lucide.dev/)**: Implementasi ikon berbasis *vector* modern yang rapi dan terukur (SVG).
*   ⚡ **Utilitas Performa Utama**:
    *   Penggabungan *class class* kompleks via integrasi `tailwind-merge` & `clsx`.
    *   Optimasi *loading* aset gambar menggunakan *tag* bawaan `loading="lazy"`.

---

*Dibuat untuk menonjolkan dan mendemontrasikan pemahaman teknik spesifik dalam Web Development Modern, dengan fokus kuat pada standarisasi struktur kode, efisiensi render antarmuka, dan interaksi User yang mulus.*
