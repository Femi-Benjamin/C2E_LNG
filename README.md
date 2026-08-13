# Chirheha 2E Limited (C2E) - Engineering & Asset Integrity Web Application

> **Providing Cutting-Edge Engineering, Asset Integrity & Technical Solutions for Energy & Industrial Infrastructure**

[![Next.js](https://img.shields.io/badge/Next.js-14.1.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-orange?style=flat-square)]()

---

## 🌟 Overview

**Chirheha 2E Limited (C2E)** is a premier indigenous Nigerian engineering services firm providing turnkey asset integrity management, Non-Destructive Testing (NDT) inspection surveys, ASME PCC-2 composite pipeline repairs, Mascoat industrial thermal insulation coatings, GSI automated tank gauging telemetry, and OEM procurement across West Africa.

This repository contains the upgraded web application built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Framer Motion**.

---

## ✨ Key Features & Enhancements

### 🎨 1. Premium Brand Design System
- **Crisp White Theme**: High-contrast, clean corporate aesthetic featuring C2E's signature **Deep Ocean Navy** (`#064F82`) and **Energy Flame Orange** (`#FF8400`) color palette.
- **CAD Blueprint Grid Overlay**: Subtle industrial technical grid patterns (`rgba(6, 79, 130, 0.04)`).

### 📌 2. Bulletproof Sticky Navigation Header
- **Scroll-Activated Sticky Header**: Lock-in navigation bar (`fixed top-0 z-50 bg-white/95 backdrop-blur-xl shadow-xl`) that slides smoothly when scrolling down the page.
- **Floating Glass Nav Container**: Rounded pill link bar with animated flame orange active indicators (`w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse`).

### 📂 3. Services Explorer Accordion with Internal Scroll UI
- **In-Accordion Scroll Container**: Interactive collapsible service divisions matching `c2elng.com`. When opened, content is presented inside a fixed-height internal scroll viewport (`max-h-72 overflow-y-auto custom-accordion-scroll`) with a custom scrollbar and scroll indicator hints.

### 🏢 4. Client & OEM Partner Infinite Marquees
- **Infinite Sliding Brand Marquees**: Built-in SVG logos for esteemed clients (**ExxonMobil**, **DGS Integrated Projects**, **Profogas Nigeria**, **Montego**, **Absolute Project Global Energy**, **Amni Petroleum**, **CandidOil**, **Minim & Tonye**, **Savannah Energy**) and global OEM partners (**Mascoat**, **GSI Gauging Systems Inc**, **Tesla**, **FIXID**).

### 🖼️ 5. Field Execution Gallery & Lightbox
- **Interactive Photo Gallery**: Category filter tabs (*ALL FIELD PHOTOS*, *NDT & INSPECTION*, *COMPOSITE REPAIRS*, *MASCOAT COATINGS*, *GSI GAUGING*).
- **Lightbox Zoom Modal**: Click any high-resolution field photo to view full details and expanded resolution.

### 📍 6. Centered Interactive Google Maps
- **Centered Map Viewport**: Centered Google Maps embed card with live tab selectors for **Eket Operational Head Office**, **Port Harcourt Liaison Base**, and **Lagos Corporate HQ**.
- **Direct Navigation**: One-click Google Maps turn-by-turn directions buttons.

### 💼 7. Careers Portal & Application Intake Modal
- **Active Field Vacancies Matrix**: Certified ASNT Level III Inspector, Composite Repair Engineer, NACE Coating Inspector, and GSI SCADA Engineer job listings.
- **Interactive Resume Intake Modal**: Quick submission form for candidate details, base preference, and credentials.

### 🧮 8. Interactive Project Scope Estimator & RFP Intake Modal
- **Instant Budget Estimator**: Technical team and cost calculation widget based on service, location, and scale.
- **Request Technical Proposal (RFP) Modal**: Instant project intake form.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14.1.3 (App Router) |
| **Language** | TypeScript 5.4.2 |
| **Styling** | Tailwind CSS 3.4.1 + Vanilla CSS Keyframe Utilities |
| **Animations** | Framer Motion 11.0.8 |
| **Icons** | Lucide React |
| **Deployment** | Vercel / Node.js Server |

---

## 📂 Project Structure

```bash
C2E_LNG/
├── public/
│   └── images/               # High-resolution field photography (NDT, Composite, Mascoat, GSI, Careers)
├── src/
│   ├── app/
│   │   ├── about/            # About Us page
│   │   ├── capabilities/     # Our Products / Specialized Capabilities page
│   │   ├── careers/          # C2E Careers & Job Intake Modal page
│   │   ├── contact/          # Contact Us page with Centered Google Maps
│   │   ├── partners/         # Global OEM Partners & Client Marquee page
│   │   ├── projects/         # Field Execution Gallery & Lightbox page
│   │   ├── services/         # Our Services Matrix page
│   │   ├── globals.css       # Design tokens, CAD grid, keyframe animations & scrollbar rules
│   │   ├── layout.tsx        # Root layout with Header & Footer wrappers
│   │   └── page.tsx          # Homepage with Hero, Domain Showcase, Estimator & Accordion
│   └── components/
│       ├── Footer.tsx        # Deep Ocean Navy footer with 3 regional office cards
│       ├── Header.tsx        # Sticky top navigation bar & corporate status bar
│       ├── MarqueeLogos.tsx  # Infinite sliding SVG client & partner logos component
│       ├── RfpModal.tsx      # Request Technical Proposal modal
│       └── ServicesAccordion.tsx # In-scroll services explorer accordion
├── .gitignore                # Excluded build artifacts
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind theme colors (brand-orange, ocean-navy)
└── tsconfig.json             # TypeScript rules
```

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Femi-Benjamin/C2E_LNG.git
cd C2E_LNG
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the live application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📍 Operational Office Directory

- **Operational Head Office (Eket Base)**:
  - *1 Dan Abia Crescent, Off Ikot Udoma Road, Eket, Akwa Ibom State, Nigeria*
  - Phone: `+234 803 516 5167` | Email: `enquiry@c2elng.com`
- **Liaison Office (Port Harcourt Base)**:
  - *20, King Perekule Rd, G.R.A. Phase II, Port Harcourt, Rivers State, Nigeria*
  - Phone: `+234 803 516 5167` | Email: `ph@c2elng.com`
- **Corporate Office (Lagos HQ)**:
  - *3B, Close B, Hillview Zone, Ogudu GRA (Pako Gate), Lagos State, Nigeria*
  - Phone: `+234 803 516 5167` | Email: `info@c2elng.com`

---

## 📄 License

© 2026 **Chirheha 2E Limited (C2E)**. All rights reserved. Registered with NUPRC, NOGICD, and ISO 9001:2015 certified.
