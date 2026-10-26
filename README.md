# Crosell: crochet flower shop

A static website: plain HTML, CSS and JavaScript, with no backend and no build step.
Orders are sent to your WhatsApp as a pre-filled message.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page (shop, custom orders, gallery, FAQ) |
| `how-to-order.html` | How to order page |
| `order.html` | Place your order page (delivery form; pincode fills city & state) |
| `styles.css` | Design: colors and fonts are at the top in `:root` |
| `script.js` | **Your shop settings and products** (top of the file) |
| `images/` | Product photos (JPEG, about 1100px tall) |

## Edit your shop

Open `script.js` and change the `SHOP` block:

- `name`: your shop name (also change it in the `<title>` and `og:title` tags in `index.html`)
- `whatsapp`: your number with country code, digits only (e.g. `919876543210` for +91 98765 43210)
- `instagram`, `email`
- `currency` / `locale`

Then edit `PRODUCTS`: prices, descriptions and photos. To add a product, copy one `{ ... }` block, give it a new `id`, and put its photos in `images/`.

## Preview locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173

## Deploy (free)

**Netlify Drop:** go to https://app.netlify.com/drop, sign in, and drag this whole folder onto the page.
To update the site later, open your site in Netlify → **Deploys**, then drag the folder again.
