# 🚀 Portfolio — Christian Andri Siahaan

> Personal portfolio website built with React, Vite, and Tailwind CSS v4.

**Live:** [christian-siahaan.vercel.app](https://christian-siahaan.vercel.app)

---

## ✨ Features

- 🌙 **Dark Mode** — Dark theme dengan aksen warna Cyan & Emerald
- 🎞️ **Smooth Animations** — Framer Motion untuk scroll & hover animations
- 📱 **Responsive** — Mobile-friendly di semua ukuran layar
- 🖨️ **Print to PDF** — Download portofolio sebagai PDF via `window.print()`
- ⚡ **Fast** — Dibangun dengan Vite untuk performa optimal
- 🧩 **Modular** — Komponen terpisah dengan struktur Clean Architecture

---

## 🗂️ Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navbar + mobile drawer
│   ├── Hero.jsx          # Hero section + typewriter effect
│   ├── Skills.jsx        # Tech stack + level badge
│   ├── Projects.jsx      # Project cards (FE/BE repo + Live Demo)
│   ├── Contact.jsx       # Form kontak + social links
│   └── Footer.jsx        # Footer
├── hooks/
│   ├── useInView.js      # IntersectionObserver untuk scroll animation
│   └── usePdfDownload.js # Logic print PDF
├── App.jsx
├── main.jsx
└── index.css             # Tailwind v4 + custom design system
```

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| React | ^19 | UI Framework |
| Vite | ^7 | Build Tool |
| Tailwind CSS | ^4 | Styling |
| Framer Motion | ^12 | Animasi |
| Lucide React | ^0.469 | Ikon |

---

## ⚙️ Instalasi

### 1. Clone repository

```bash
git clone https://github.com/christian-siahaan26/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

### 4. Build untuk production

```bash
npm run build
```

---

## 📄 Konfigurasi Tailwind v4

Project ini menggunakan **Tailwind CSS v4** dengan beberapa perbedaan dari v3:

**`postcss.config.js`**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**`index.css`** — gunakan `@import` bukan `@tailwind`:
```css
@import "tailwindcss";

@theme {
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 🚀 Deploy ke Vercel

### Cara 1: Via Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Cara 2: Via GitHub (Recommended)
1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repository
4. Biarkan semua setting default → **Deploy**
5. Pergi ke **Settings → Domains**
6. Set custom subdomain: `christian-siahaan`

**Live URL:** `christian-siahaan.vercel.app` ✅

---

## 🎨 Design System

| Token | Nilai | Penggunaan |
|---|---|---|
| Cyan | `#06b6d4` | Highlight, border, hover |
| Emerald | `#10b981` | Gradient, badge |
| Gray 950 | `#030712` | Base background |
| Space Grotesk | — | Heading, UI |
| JetBrains Mono | — | Code, label, nav |

---

## 📱 Responsivitas

| Breakpoint | Layout |
|---|---|
| `< 768px` | Single column, hamburger menu |
| `768px+` | 2 column grid (Skills & Projects) |
| `1024px+` | Full 2-column Hero layout |

---

## 📬 Contact

**Christian Andri Siahaan**

- 🐙 GitHub: [@christian-siahaan26](https://github.com/christian-siahaan26)
- 💼 LinkedIn: [Christian Andri Siahaan](https://www.linkedin.com/in/christian-andri-siahaan)

---

<p align="center">Made with ❤️ in Depok, Indonesia</p>