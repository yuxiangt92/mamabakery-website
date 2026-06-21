# Mama Bakery — Website

Single-page static website (Soft Organic style) for an organic, low-sugar kids'
birthday bakery in West Los Angeles. No build step — open `index.html` in a browser.

## Structure
- `index.html` — all page content (text, menu, prices, links).
- `css/styles.css` — all styling (colors/fonts live in the `:root` block at the top).
- `js/main.js` — mobile nav + contact form (mailto).
- `images/` — your photos (see `images/README.md`).

## Editing content
- **Text / menu / prices:** edit directly in `index.html`. Prices are plain text in
  the `.m-list .row` blocks of the Menu section.
- **Brand name / email / phone / socials:** search `index.html` for `Mama Bakery`,
  `hello@mamabakery.com`, `3105550142`, and the social `href="https://..."`
  links and replace. Also update `BAKERY_EMAIL` in `js/main.js`.
- **Photos:** add files to `images/`, then replace the matching `<!-- IMAGE SLOT -->`
  placeholder in `index.html` with `<img src="images/your-file.jpg" alt="description">`.

## Going live (later)
This is a static site (HTML/CSS/JS only). When ready to publish, ask for a hosting
recommendation — at that point a server-side contact form can replace the mailto flow.
