# Ritelindo Mini Test — Implementation Source of Truth

> **Status:** LOCKED BASELINE FOR IMPLEMENTATION  
> **Project:** `ritelindo-mini-test`  
> **Position:** Web Developer Intern Technical Mini Test  
> **Company:** Ritelindo Akselera Kolaborasi / Ritelindo Group  
> **Deadline:** 9 October 2026, 23:59 WIB

---

## 0. Purpose of This Document

Dokumen ini adalah **source of truth utama untuk implementasi** setelah tahap Research, Requirement Analysis, Content Architecture, Conversion Strategy, Information Architecture, UI/UX Direction, dan Technical Architecture.

Dokumen ini membedakan:

- **Official brief** — informasi langsung dari brief/email mini test Ritelindo.
- **Public research** — informasi yang ditemukan dari sumber publik/brand terkait.
- **Locked project decision** — keputusan strategi, UX, dan teknis yang telah disepakati untuk mini test.
- **Needs verification** — informasi yang belum cukup kuat untuk dimasukkan sebagai fakta final.

### Rule utama

> **Jangan mengarang data perusahaan, angka, testimonial, spesifikasi, alamat, client relationship, atau business claim.**

Implementasi boleh berkembang secara teknis/visual selama tidak merusak requirement dan locked decisions di bawah.

---

# 1. Project Context

## 1.1 Company

- Nama: **Ritelindo Akselera Kolaborasi**
- Group: **Ritelindo Group**
- Posisi yang dipilih: **Web Developer Intern**
- Sumber lowongan: Instagram → proses lamaran dilanjutkan melalui email
- Status: **CV review passed → Technical Mini Test**
- Logo corporate: logo **Ritelindo Akselera Kolaborasi** yang diberikan user dari materi recruitment.

## 1.2 Mini Test

Ritelindo meminta:

> **1 halaman landing page / Single-Page App / Static Site**

Objek promosi:

> **Paket Rak Minimarket / Rak Toko B2B**

Acquisition channel:

> **Google Ads Search** dengan **high-intent keywords**

Primary conversion:

> **Konsultasi WA Gratis**

## 1.3 Business Goal

Landing page harus bekerja sebagai:

```text
Google Search
    ↓
Google Ads
    ↓
High-intent visitor
    ↓
Landing Page
    ↓
Trust + Value + Fit + Simplicity + Proof
    ↓
WhatsApp Lead
```

Primary KPI konseptual:

> **Klik menuju WhatsApp / lead initiation**, bukan sekadar visual engagement.

---

# 2. Requirement Analysis — LOCKED

## 2.1 Mandatory Functional Requirements

- Single-page landing page / static site
- B2B positioning
- Produk utama: paket rak minimarket / rak toko
- Primary CTA: **Konsultasi WA Gratis**
- CTA jelas dan tersedia di beberapa bagian halaman
- Mobile-first
- Responsive
- Lightweight / fast loading
- Clean component structure
- Semantic HTML
- SEO on-page
- Meta title
- Meta description
- Heading hierarchy H1/H2/H3
- Open Graph tags
- Public GitHub repository
- Live demo

## 2.2 Mandatory Business Content

Value proposition yang diberikan Ritelindo:

1. Free Konsultasi & Layout 3D
2. Free Ongkir Jawa-Bali
3. Free Perakitan Jatim, Jateng & DIY
4. Bisa Custom
5. Produk Langsung dari Pabrik
6. Harga kompetitif
7. Pembelian satuan
8. Paket toko
9. Proyek retail
10. Jasa Interior Toko

## 2.3 Target Audience

Primary audience:

- Pemilik minimarket baru
- Pemilik toko baru
- Pemilik yang membuka cabang
- Pemilik toko yang ingin upgrade menjadi toko modern
- Orang yang membutuhkan rak toko / perlengkapan retail
- Orang yang membutuhkan layout/interior toko

Contoh sektor:

- Minimarket
- Toko kelontong/sembako
- Toko ATK
- Pet shop
- Baby shop
- Apotek
- Toko bahan kue
- Toko fashion
- Toko bahan bangunan

## 2.4 SEO Intent

Keyword contoh langsung dari Ritelindo:

- **Pabrik Rak Minimarket**
- **Paket Setup Toko Retail**

Prinsip:

> Search intent harus terasa natural. Jangan keyword stuffing.

## 2.5 Evaluation Priorities

Ritelindo menyebut empat poin utama:

1. Kecepatan muat halaman
2. Kerapian struktur kode
3. SEO On-Page
4. Efektivitas layout visual dalam mengonversi pengunjung

Project priority:

```text
Conversion
    ↓
UX / Visual Hierarchy
    ↓
Performance
    ↓
SEO
    ↓
Clean Code
```

## 2.6 Scope Boundaries

Tidak diperlukan untuk mini test:

- Backend
- Authentication
- Database
- CMS
- Admin dashboard
- Complex 3D interaction
- Heavy animation

---

# 3. Content Architecture — LOCKED

Struktur konten utama yang disepakati:

```text
HERO
    ↓
WHY RITELINDO
    ↓
VALUE
    ↓
SERVICES
    ↓
HOW IT WORKS + CTA
    ↓
TRUST / PROOF
    ↓
FAQ
    ↓
FINAL CTA
    ↓
CONTACT / FOOTER
```

## 3.1 Hero

Purpose:

> Memberikan message match, mengenalkan Ritelindo, lalu membantu visitor mulai product discovery.

Content:

- H1
- Brand overview
- Product/store visual
- Search bar
- Popular product/category shortcuts

User mental response:

> “Oh, ini Ritelindo. Aku mau lihat produknya.”

### Mobile order — LOCKED

```text
H1
↓
Brand Overview
↓
Product Image
↓
Search Bar
↓
Popular Categories
```

## 3.2 Why Ritelindo

Purpose:

> Membangun trust lebih awal.

Konsep:

- Rational trust
- Capability
- Factory/direct source
- Custom capability
- Retail solution capability
- Experience/capability claims hanya jika verified

User response:

> “Sepertinya ini sudah terpercaya.”

## 3.3 Value

Purpose:

> Menunjukkan benefit dan alasan memilih Ritelindo setelah trust terbentuk.

UI direction:

- compact labels/highlights
- bukan semuanya giant card
- mudah di-scan

User response:

> “Sepertinya meyakinkan, dan value-nya juga bagus.”

## 3.4 Services

Purpose:

> Menunjukkan apa yang bisa dibantu/dijual Ritelindo.

Potential service content:

- Konsultasi
- Layout 3D
- Rak & Display Toko
- Custom & Produksi
- Interior Toko

UI direction:

- visual service presentation
- gallery dapat digunakan sebagai **visual evidence**, bukan sekadar dekorasi
- alternating editorial layout lebih disukai daripada terlalu banyak small cards

User response:

> “Ini yang saya butuhkan.”

## 3.5 How It Works + CTA

Purpose:

> Menurunkan rasa ribet dan menjelaskan langkah konsultasi sampai setup.

User response:

> “Ternyata mudah dipahami alurnya yaa. Aku mau coba sekarang.”

Process visual direction:

```text
01 Konsultasi
      ↓
02 Kebutuhan / Survey & Perencanaan
      ↓
03 Layout / Custom / Persiapan
      ↓
04 Setup / Pengiriman / Perakitan
```

**Important:** langkah proses di atas adalah UX representation kita. Detail final harus mengikuti fakta yang sudah diverifikasi.

CTA:

> **Konsultasi WA Gratis**

Tidak perlu headline CTA tambahan yang redundant di section ini.

## 3.6 Trust / Proof

Purpose:

> Social proof setelah user sudah tertarik.

Potential content:

- Client feedback
- Partner/client logos
- Portfolio/project proof
- Installation/documentation imagery

Semua hanya jika sumber dan penggunaan material jelas.

## 3.7 FAQ

Purpose:

> Menghilangkan objection/friction sebelum final conversion.

Potential questions:

- Apakah rak bisa custom?
- Apakah tersedia konsultasi dan layout 3D?
- Bagaimana proses pengiriman?
- Apakah tersedia perakitan?
- Apakah bisa pembelian satuan?
- Untuk area mana saja benefit pengiriman/perakitan berlaku?

Pertanyaan dengan jawaban yang belum verified harus ditahan sebagai `needs verification`.

## 3.8 Final CTA

Final decision point:

> **Siap Memulai Setup Toko Anda?**

Supporting copy singkat +

> **Konsultasi WA Gratis**

## 3.9 Contact / Footer

Contact dapat ditempatkan sebagai bagian footer/contact block, tidak harus menjadi section besar.

---

# 4. Conversion Strategy — LOCKED

## 4.1 Core Philosophy

Dipilih:

> **Trust First**, bukan Value First.

Alasan:

> User perlu merasa perusahaan kredibel terlebih dahulu; setelah trust terbentuk, value lebih mudah diterima.

Final conversion sequence:

```text
Trust
  ↓
Value
  ↓
Fit
  ↓
Simplicity
  ↓
Proof
  ↓
Action
```

## 4.2 Hero Strategy

Google Ads visitor sudah punya intent. Hero harus cepat memberikan:

- relevansi
- identitas
- produk discovery
- jalur pencarian

Avoid:

- headline generik tanpa konteks
- company history panjang
- visual gimmick

## 4.3 Primary CTA Strategy

Satu primary conversion language:

> **Konsultasi WA Gratis**

CTA boleh muncul di beberapa section, tetapi tidak menggunakan banyak variasi seperti “Hubungi Kami”, “Chat Sekarang”, dll. sebagai competing primary CTA.

## 4.4 WhatsApp UX

CTA mengarah ke satu destination WhatsApp.

Prefilled message dapat digunakan untuk mengurangi friction, misalnya:

> Halo Ritelindo, saya tertarik dengan solusi rak untuk kebutuhan toko saya dan ingin konsultasi gratis.

## 4.5 Mobile Sticky CTA

Keputusan UX:

> Gunakan sticky/fixed **Konsultasi WA Gratis** di mobile jika tidak mengganggu konten.

## 4.6 Conversion Section Roles

```text
Hero          → Relevance / Discovery
Why           → Trust gate
Value         → Offer attractiveness
Services      → Fit
How It Works  → Reduce perceived friction
Proof         → Social reassurance
FAQ           → Objection handling
Final CTA     → Decision / Action
```

---

# 5. Information Architecture — LOCKED

## 5.1 Navbar

Desktop:

- Logo
- Beranda
- Produk
- Layanan
- Kontak
- Optional: ID / EN
- Primary CTA: Konsultasi WA Gratis

### Language switcher

Status:

> **Optional / P2**

Alasan: target utama Indonesia, English content belum tersedia, dan penambahan bahasa tidak boleh mengorbankan core scope.

## 5.2 Page Structure

```text
NAVBAR
    ↓
HERO
    ↓
WHY RITELINDO
    ↓
VALUE
    ↓
SERVICES
    ↓
HOW IT WORKS + CTA
    ↓
TRUST / PROOF
    ↓
FAQ
    ↓
FINAL CTA
    ↓
CONTACT / FOOTER
```

## 5.3 Navigation Behavior

Single-page anchor navigation.

Contoh IDs:

- `#home`
- `#products`
- `#services`
- `#contact`

Tidak perlu React Router.

---

# 6. Heading Hierarchy — LOCKED

## H1

> **Solusi Rak & Display untuk Kebutuhan Retail Modern**

## H2

> **Kenapa Memilih Ritelindo?**

> **Value untuk Setup Toko Anda**

> **Layanan Utama**

> **Bagaimana Proses Konsultasi & Setup Toko?**

> **Apa Kata Klien Kami?**

> **Pertanyaan yang Sering Diajukan**

> **Siap Memulai Setup Toko Anda?**

Notes:

- hanya satu H1
- H2 untuk section utama
- H3 untuk subsection/card grouping bila diperlukan
- CTA seperti “Konsultasi WA Gratis” bukan section heading

## H1/H2 SEO Principle

H1 dan H2 harus tetap readable dan natural. Keyword dimasukkan secara relevan, bukan dipaksakan.

---

# 7. UI/UX Direction — LOCKED

## 7.1 Design Personality

> **Modern Industrial B2B × Retail Professional**

Karakter:

- trustworthy
- industrial
- modern retail
- conversion-focused

Bukan:

- ecommerce catalog-heavy
- overly corporate/formal
- overly playful
- animation-heavy

## 7.2 Visual Principles

1. **Trust over decoration**
2. **Product discovery is important**
3. **One primary conversion**
4. **Real proof over invented claims**
5. **Visual hierarchy over content density**
6. **Performance over effects**
7. **Mobile is first-class**

## 7.3 Hero UI Direction

Desktop:

- H1 + brand overview
- search
- popular categories
- supporting product/store visual

Mobile:

```text
H1
↓
Brand Overview
↓
Product Image
↓
Search
↓
Popular Categories
```

Search bar must be **functional client-side search**, not decorative.

## 7.4 Why + Value Direction

Why:

- trust cards / rational trust
- capability

Value:

- compact highlights / editorial labels
- scan-friendly
- avoid oversized card grid for every benefit

Visual relationship:

> **Why Us? + What You Get?**

## 7.5 Services Direction

Prefer:

- visual service sections
- real imagery
- editorial/alternating layout

Gallery should support understanding of service, not act as decoration.

## 7.6 How It Works Direction

This is a major visual highlight.

Desktop:

> Horizontal timeline

Mobile:

> Vertical timeline

After process steps:

> **Konsultasi WA Gratis**

without an additional redundant CTA headline.

## 7.7 Trust/Proof Direction

Use:

- client/partner logos
- testimonial
- portfolio
- real project imagery

Avoid fake or unsupported social proof.

## 7.8 FAQ Direction

Prefer semantic accordion using `<details>/<summary>` when suitable.

Benefits:

- accessibility
- small JS footprint
- simple implementation

## 7.9 Final CTA

One final decision block:

> **Siap Memulai Setup Toko Anda?**

Then:

> **Konsultasi WA Gratis**

The separate “Siap Memulai Toko Anda?” CTA block before the footer was intentionally removed as redundant.

---

# 8. Technical Architecture — LOCKED

## 8.1 Stack

```text
React
TypeScript
Vite
Tailwind CSS
ESLint
Git / GitHub
Vercel
```

## 8.2 Runtime Architecture

Static single-page application:

```text
Browser
  ↓
Static Assets
  ↓
React Application
  ↓
Local Product / Content Data
  ↓
WhatsApp
```

No backend/database/auth/CMS required.

## 8.3 Application Structure

```text
App
└── HomePage
    ├── Navbar
    ├── Hero
    │   ├── SearchBar
    │   └── ProductCategories
    ├── WhyRitelindo
    ├── ValueProposition
    ├── Services
    ├── HowItWorks
    ├── TrustProof
    ├── FAQ
    ├── FinalCTA
    └── Footer
```

## 8.4 Proposed Folder Structure

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Accordion.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── WhyRitelindo.tsx
│       ├── ValueProposition.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── TrustProof.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
│
├── data/
│   ├── products.ts
│   ├── services.ts
│   ├── benefits.ts
│   ├── process.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── config/
│   └── site.ts
│
├── pages/
│   └── HomePage.tsx
│
├── styles/
│   ├── globals.css
│   └── tokens.css
│
├── App.tsx
└── main.tsx
```

## 8.5 Data Architecture

Research source:

> Ritelindo Data Sheet / Source of Truth

Runtime rule:

```text
Research
  ↓
Source of Truth
  ↓
Verified / Approved Content
  ↓
src/data/
  ↓
Components
```

Do not directly copy uncertain research into UI.

## 8.6 Site Configuration

Centralize global business values in `src/config/site.ts`:

- company name
- website URL
- WhatsApp
- phone
- email
- address
- social links

No duplicated contact literals throughout components.

## 8.7 Search Architecture

Client-side only.

```text
Hero Search
  ↓
searchQuery state
  ↓
products dataset
  ↓
filteredProducts
  ↓
Product UI
```

No API or backend required.

## 8.8 State Management

Use React local state only for the small interactive needs:

- `searchQuery`
- `mobileMenuOpen`
- FAQ accordion state if not using native `<details>`

No Redux/Zustand/Jotai/etc. unless a real requirement appears.

## 8.9 Semantic HTML

Use:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`
- proper headings
- semantic links/buttons

Avoid `<div>` for everything.

## 8.10 SEO Architecture

Primary metadata can live in `index.html` because there is only one static page.

Required:

- `<title>`
- meta description
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`

No React Helmet required for this scope.

## 8.11 Asset Architecture

```text
src/assets/images/
├── hero/
├── products/
├── services/
├── portfolio/
└── trust/
```

Priorities:

1. Real product photo
2. Real store/install photo
3. Real consultation/layout imagery
4. Brand imagery
5. Decorative graphics

Optimize images to WebP/AVIF where appropriate.

## 8.12 CSS / Token Philosophy

Use:

> Tailwind CSS + CSS variables for important brand/design tokens.

Token categories:

- colors
- typography
- spacing
- radius
- shadows
- container width
- motion

Do not scatter arbitrary values unnecessarily.

## 8.13 Dependency Philosophy

Keep runtime dependencies minimal.

Avoid heavy animation/UI libraries unless a real requirement appears.

## 8.14 Performance Architecture

Performance from the beginning:

- minimal JS
- minimal dependencies
- optimized images
- lazy-load below-fold images
- no heavy video background
- no WebGL / unnecessary 3D
- no heavy parallax
- semantic HTML
- static deployment

## 8.15 Responsive Architecture

Mobile-first.

Conceptual breakpoints:

```text
default → mobile
md      → tablet
lg      → desktop
xl      → wide
```

Responsive behavior should be designed, not merely scaled down.

## 8.16 Deployment

```text
GitHub
  ↓
Vercel
  ↓
Static CDN
  ↓
Visitor
```

---

# 9. Content / Data Safety Rules

## Approved for use from official brief

- Core CTA
- Core benefits
- Target audience
- Product/object context
- Search-intent examples
- Technical requirements
- Evaluation criteria

## Public research only / use with context

- STORACK product information
- STORACK contact information
- STORACK public metrics/claims
- Public product specifications
- Public client/partner references
- Public ISO/quality claims

Do not automatically treat public STORACK information as identical to corporate Ritelindo claims unless relationship/context is verified.

## Needs Verification before final use

- Final campaign-specific WhatsApp number
- Exact package contents
- Exact prices
- Full brand guideline
- Official HEX colors / fonts
- Full service process/SOP
- Exact shipping/assembly terms
- Final approved testimonials
- Final approved client logos
- Final approved portfolio imagery
- Exact English copy, if ID/EN switch is implemented

---

# 10. Implementation Priorities

## P0 — Must ship

- Hero
- Search/product discovery
- Why Ritelindo
- Value
- Services
- How It Works
- CTA
- Trust/Proof
- FAQ
- Final CTA
- Footer
- Mobile-first responsive layout
- SEO metadata
- Open Graph
- Performance baseline
- Public GitHub
- Live deployment

## P1 — High value

- Functional client-side search
- Sticky mobile WhatsApp CTA
- Real product imagery
- Trust/logo section
- Testimonial
- Image optimization
- Accessibility pass

## P2 — Nice to have

- Subtle reveal animations
- Microinteractions
- Optional ID/EN switch
- Advanced polish

---

# 11. Locked Conversion Contract

The landing page should continuously support this mental journey:

```text
"Oh, ini Ritelindo."
        ↓
"Aku bisa melihat produknya."
        ↓
"Sepertinya perusahaan ini terpercaya."
        ↓
"Value-nya juga menarik."
        ↓
"Mereka punya layanan yang saya butuhkan."
        ↓
"Ternyata prosesnya mudah."
        ↓
"Orang lain juga mempercayai mereka."
        ↓
"Pertanyaan saya terjawab."
        ↓
"Saya mau konsultasi."
```

Primary action at the end:

> **Konsultasi WA Gratis**

---

# 12. Implementation Principle

> **Build the simplest system that fully satisfies the brief.**

Do not over-engineer the project merely to demonstrate architecture.

Do not sacrifice:

- clarity
- speed
- SEO
- maintainability
- conversion

for unnecessary technical complexity.

---

# 13. Current Project Status

```text
01 Research & Source of Truth       ✅
02 Requirement Analysis             🔒
03 Content Architecture             🔒
04 Conversion Strategy              🔒
05 Information Architecture         🔒
06 UI/UX Direction                  🔒
07 Technical Architecture           🔒
08 Implementation                   ← CURRENT
09 SEO
10 Performance
11 Responsive Testing
12 Deployment
13 Final QA
14 Submission
```

Small details are allowed to evolve during implementation **as long as the locked business, conversion, IA, UX, and technical principles remain intact**.
