# Mama Bakery — Website

Single-page static website (Soft Organic style) for an organic, low-sugar kids'
birthday bakery in West Los Angeles. No build step — open `index.html` in a browser.

## Structure
- `index.html` — all page content (text, menu, prices, links).
- `css/styles.css` — all styling (colors/fonts live in the `:root` block at the top).
- `js/main.js` — mobile nav toggle.
- `thanks.html` — the "message received" page shown after the contact form is sent.
- `images/` — your photos (see `images/README.md`).

## Editing content
- **Text / menu / prices:** edit directly in `index.html`. Prices are plain text in
  the `.m-list .row` blocks of the Menu section.
- **Brand name / email / phone / socials:** search `index.html` for `Mama Bakery`,
  `hello@mamabakery.com`, `+13105550142` (tel: link) and `(310) 555-0142` (display text),
  and the social `href="https://..."` links and replace.
- **Photos:** add files to `images/`, then replace the matching `<!-- IMAGE SLOT -->`
  placeholder in `index.html` with `<img src="images/your-file.jpg" alt="description">`.

## Contact form (Netlify Forms)
The contact form is wired for **Netlify Forms** — it works automatically once the
site is deployed on Netlify (no backend code, no API keys):
- The `<form name="contact" data-netlify="true" ...>` is auto-detected by Netlify on deploy.
- A hidden `bot-field` honeypot filters spam.
- After submitting, visitors see `thanks.html`.
- **Read submissions:** Netlify dashboard → your site → **Forms** → `contact`.
- **Get emailed on new messages:** Netlify → **Forms → Settings & notifications →
  Add notification → Email notification**, and enter your email.
- Note: the form only records submissions when the site is hosted on Netlify.
  Opening `index.html` locally won't capture entries (it'll just open `thanks.html`).

## Going live
Static site (HTML/CSS/JS only). Deploy by dragging the project folder into
Netlify (app.netlify.com → Add new site → Deploy manually). Add a custom domain
later under Domain settings. HTTPS is automatic.
