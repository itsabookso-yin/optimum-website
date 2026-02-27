# OPTIMUM Website — Content Management Guide

This guide explains how the website content is organized and how to update text, images, and product data without needing Claude Code or developer tools.

---

## Getting Started

```bash
npm run dev     # Start development server
npm run build   # Build for production
```

Open [http://localhost:3000](http://localhost:3000) with your browser. The site supports three languages:

- http://localhost:3000/en — English
- http://localhost:3000/zh — Chinese (default)
- http://localhost:3000/de — German

---

## 1. UI Text / Translations

All page text (navigation, headings, descriptions, form labels, etc.) lives in **3 JSON files**:

```
src/messages/
├── en.json    ← English
├── zh.json    ← Chinese
└── de.json    ← German
```

Each file has the **same structure** with different language text. For example, to change the homepage hero title:

```json
// en.json
"home": {
  "heroTitle": "Your Expert Partner in Material Handling Solutions",
  ...
}

// de.json
"home": {
  "heroTitle": "Ihr Experte für Fördertechnik-Lösungen",
  ...
}
```

**How to edit:** Open the file in any text editor (VS Code, Notepad, etc.), find the key, change the text between the quotes. Keep the `"key": "value"` format intact.

---

## 2. Product Data

All product information is in one file:

```
src/data/products.ts
```

Each product category looks like this:

```ts
{
  slug: 'dock-loading',            // URL slug (don't change)
  nameEn: 'Dock Loading System',   // English name
  nameZh: '碼頭設備',               // Chinese name
  nameDe: 'Verladebrücken-System', // German name
  descriptionEn: '...',            // English description
  descriptionZh: '...',            // Chinese description
  descriptionDe: '...',            // German description
  thumbnail: '/images/products/dock-loading/15-pw.jpg',  // Category thumbnail
  items: [                         // Products in this category
    {
      id: 'dock-leveler',
      nameEn: 'Dock Leveler',
      nameZh: '月台調整板',
      nameDe: 'Überladebrücke',
      descriptionEn: '...',
      descriptionZh: '...',
      descriptionDe: '...',
      images: ['/images/products/dock-loading/15-pw.jpg'],  // Product images
      features: {
        en: ['Feature 1', 'Feature 2'],
        zh: ['特點一', '特點二'],
        de: ['Merkmal 1', 'Merkmal 2'],
      },
    },
    // ... more items
  ],
}
```

- **To change product text:** Edit the `nameEn`/`nameZh`/`nameDe` and `descriptionEn`/`descriptionZh`/`descriptionDe` values.
- **To add a new product item:** Copy an existing item block, paste it in the `items` array, and update all fields.
- **To remove a product:** Delete the entire `{ ... }` block for that item from the array.

---

## 3. Company Data

```
src/data/company.ts
```

Contains company name, address, phone, fax, email, and motto — each with `en`/`zh`/`de` versions. Edit the text directly.

---

## 4. Images

All images are in:

```
public/images/
├── logo/
│   └── optimum-logo.gif         ← Website logo
├── hero/
│   └── home-hero-main.jpg       ← Homepage hero image
└── products/
    ├── dock-loading/             ← Dock loading product images
    ├── door-system/              ← Door system images
    ├── special-door/
    ├── garage-door/
    ├── lift-system/
    ├── pharmacy-system/
    ├── warehousing/
    ├── vacuum-lift/
    └── platform-lift/
```

- **To replace an image:** Put the new image file in the same folder with the **same filename** — it will automatically appear on the site.
- **To add a new image:**
  1. Put the image file in the appropriate `public/images/products/<category>/` folder
  2. In `src/data/products.ts`, add the path to the product's `images` array:
     ```ts
     images: ['/images/products/dock-loading/new-photo.jpg'],
     ```
     Note: paths start with `/images/...` (no `public` prefix).

---

## 5. Quick Reference Table

| What to change | File to edit |
|---|---|
| Navigation labels, page titles, form text | `src/messages/en.json`, `zh.json`, `de.json` |
| Product names, descriptions, features | `src/data/products.ts` |
| Company name, address, phone, motto | `src/data/company.ts` |
| Product images | Put files in `public/images/products/<category>/` and update path in `products.ts` |
| Logo | Replace `public/images/logo/optimum-logo.gif` |
| Hero image | Replace `public/images/hero/home-hero-main.jpg` |

---

## 6. Important Rules

- **JSON files** (`en.json`, `zh.json`, `de.json`): Don't break the `"key": "value"` format. Keep all commas and quotes. A missing comma or quote will crash the site.
- **TypeScript files** (`.ts`): Keep the same structure. Don't remove commas between items or break the bracket/brace pairing.
- **Images**: JPG, PNG, GIF, and WebP are all supported. Keep file sizes reasonable (under 500KB ideally).
- After editing, the dev server (`npm run dev`) will hot-reload changes. For production, run `npm run build` then deploy.

---

## Tech Stack

- **Next.js 16** with App Router + TypeScript
- **Tailwind CSS 4** + **shadcn/ui** components
- **next-intl** for internationalization (EN / ZH / DE)
- **Nodemailer** / Formspree for contact form emails
