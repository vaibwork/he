# Hubris Engineers — Website

Static, mobile-friendly website for **Hubris Engineers** — precision surveying,
3D digital engineering, and turnkey ELV-ICT solutions.

Built with plain **HTML, CSS and vanilla JavaScript** — no build tools, no
dependencies. It runs anywhere.

---

## 📁 Structure

```
hubris-engineers/
├── index.html          # Home
├── about.html          # About / company
├── services.html       # All services (Surveying, 3D, ELV)
├── software.html       # Technology & Digital Engineering
├── industries.html     # Industries served
├── projects.html       # Selected projects
├── contact.html        # Contact + WhatsApp lead form
├── quote.html          # Request a quote (WhatsApp lead form)
├── blog.html           # Insights
├── css/
│   ├── style.css       # Design system + all components
│   └── responsive.css  # Mobile / tablet rules
├── js/
│   └── main.js         # Nav, scroll reveal, accordion, WhatsApp form
├── assets/
│   ├── images/         # Put your photos / logos here
│   ├── videos/         # Optional background / hero videos
│   └── icons/          # Favicon etc.
└── README.md
```

---

## 🚀 Deploy

This is a static site — pick any of these:

**GitHub Pages**
1. Create a repo, upload all files (keep the folder structure).
2. Settings → Pages → Source: `main` branch, `/root`.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel / Cloudflare Pages**
1. Drag-and-drop the `hubris-engineers` folder into the dashboard, **or** connect the repo.
2. No build command needed. Publish directory = project root.

**Any web host (cPanel / shared hosting)**
1. Upload the contents of `hubris-engineers/` to your `public_html` (or web root).
2. Done — `index.html` loads automatically.

---

## 📲 WhatsApp Lead Form

The **Contact** and **Quote** pages have a lead form. On submit, it builds a
pre-filled message and opens **WhatsApp** (`wa.me`) so the enquiry lands
directly in your chat. Nothing is stored on the site.

**To change the WhatsApp number**, edit one line in `js/main.js`:

```js
const WHATSAPP_NUMBER = "918777249023";  // country code + number, no + or spaces
```

The floating WhatsApp button and the `tel:`/`wa.me` links in the footer use the
same number — search-and-replace `918777249023` / `+91 87772 49023` across the
HTML files if it changes.

---

## ✏️ Customisation

| What | Where |
|------|-------|
| Colours / fonts | CSS variables at top of `css/style.css` (`:root`) |
| Logo | `.brand__mark` in the header (currently the letter "H") — swap for an `<img>` from `assets/images/` |
| Company details | Footer is generated identically on every page — update address/phone/email/GST in the HTML, or regenerate |
| Services / projects / posts | Edit the relevant HTML files directly |
| Favicon | Add `assets/icons/favicon.ico` and link it in each page `<head>` |

> **Note:** All icons are inline SVG and all hero/section graphics are inline
> SVG, so the site needs **no external image files to function**. Add real
> photos in `assets/images/` whenever you're ready and drop them into the
> `.split__media` / `.post-card__img` blocks.

---

## ✅ Features

- Fully responsive (desktop, tablet, mobile) with a hamburger menu
- Sticky header, smooth scroll, scroll-reveal animations, animated counters
- Accordion service breakdown
- WhatsApp lead form (no backend required)
- Floating WhatsApp button on every page
- Accessible, semantic HTML; fast (no frameworks)

---

© Hubris Engineers. GST: 19CLXPS0927A1ZQ
39A Shridhar Roy Road, 2nd Floor, Kolkata 700039 · +91 87772 49023
