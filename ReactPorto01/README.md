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

## 📂 Pola Arsitektur (*Clean Code*)

Proyek ini terstruktur ke dalam hierarki modular agar mudah di-skalakan perawatannya:

```text
src/
├── api/          # Base instance panggilan HTTP (Axios interceptors)
├── components/   # Komponen UI modular (UI dasar, Shared Layout, Elemen Meal Card)
├── hooks/        # Custom react hooks untuk pemisahan logika (Fetching Data)
├── layouts/      # Kerangka tampilan struktur bersisian (Navbar, Footer, MainLayout)
├── pages/        # Komponen rute halaman penuh (Home, Detail, Category)
├── store/        # State statis global (Zustand: Favorites)
├── utils/        # Asisten/Fungsi helper pendukung (seperti style-merging)
└── App.jsx       # Entri utama dan konfigurasi routing induk
```

---

## ⚙️ Panduan Instalasi Lokal

Ingin menjalankan MealApp di komputasi lokal Anda? Ikuti langkah-langkah di bawah ini:

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username-anda/MealApp.git
   cd MealApp
   ```

2. **Instal dependencies (NPM atau Yarn):**
   ```bash
   npm install
   # atau
   yarn
   ```

3. **Jalankan *Development Server*:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Kunjungi Aplikasi:** Buka `http://localhost:5173` di *browser* Anda.

---

## 📈 Status & Roadmap Pengembangan

Aplikasi ini sedang berada di fase awal dan tahap pengerjaan yang intensif, berikut penjabaran progres dari *Roadmap Phase*:

- [x] **Fase 1: Inisiasi Dasar**
      Inisialisasi Vite (React JS), instalasi lengkap *Dependencies* (Axios, React Query, Router, Zustand), serta konfigurasi Tailwind v4.
- [ ] **Fase 2: Navigasi & Dasar Aplikasi**
      Konfigurasi API Client (TheMealDB), Setup Routing (BrowserRouter), Main Layout (Navbar/Footer), dan Halaman Placeholder (Home, Category, Detail).
- [ ] **Fase 3: Jantung Logika *Data Fetching* & UI Utama**
      Logika *Custom Hook* (TanStack Query), pembuatan komponen *Meal Card*, implementasi *Search*, dan melengkapi Halaman Detail spesifik (Video Player, Bahan).
- [ ] **Fase 4: Fitur Interaktif & Optimasi**
      Status Favorit (Zustand + *localStorage*), implementasi *Skeleton Loading*, penanganan *Error* pesan informatif, dan validasi *Responsive Design* (Mobile First).

---

*Dibuat untuk menonjolkan dan mendemontrasikan pemahaman teknik spesifik dalam Web Development Modern, dengan fokus kuat pada standarisasi struktur kode, efisiensi render antarmuka, dan interaksi User yang mulus.*
