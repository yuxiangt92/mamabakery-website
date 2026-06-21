# Little Sprout Bakery Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive single-page static website for an organic/low-sugar kids' birthday bakery in West LA, in the "Soft Organic" (Style A) aesthetic, showing menu+prices, gallery, story, and contact options.

**Architecture:** Plain static site — one `index.html`, an extracted `css/styles.css`, a small `js/main.js` (mobile nav toggle, smooth scroll, mailto form), and a local `images/` folder. No framework, no build step. The committed prototype `prototypes/style-a.html` is the visual source of truth; this plan refactors it into a clean, editable, production structure and adds the missing interactive pieces (mobile nav, working mailto form, real image slots).

**Tech Stack:** HTML5, CSS3 (custom properties, grid/flex), vanilla JavaScript, Google Fonts (Fraunces + Nunito Sans) with system fallbacks.

## Global Constraints

- Aesthetic must match `prototypes/style-a.html`: palette cream `#FBF6EE` / apricot `#E7B58C` / apricot-deep `#D49A6A` / oat `#E9DCC6` / sage `#9DAE8B` / sage-deep `#7C8E6B`, ink `#4A3F35`, ink-soft `#7A6B5C`; headings Fraunces (serif), body Nunito Sans.
- Brand name placeholder: **Little Sprout Bakery**. Must appear in exactly one easy-to-edit place per occurrence (no logic depends on it).
- Selling points to keep visible: **Organic · Low-Sugar · No Artificial Anything · Small-Batch / Made-Fresh**.
- Language: English-primary.
- Contact email placeholder: `hello@littlesproutbakery.com`. Phone placeholder: `(310) 555-0142`. Location: `West Los Angeles · pickup & local delivery`.
- No backend. Contact form submits via `mailto:`. No external services beyond Google Fonts CDN.
- Fully responsive; must render cleanly at 375px, 768px, and 1140px widths.
- All prices shown as "starting at"/ranges (every order is custom).
- Frequent commits — one per task.

---

### Task 1: Project scaffold & shared head/CSS foundation

Stand up the file structure, the HTML document shell (head, fonts, nav + footer), and the full stylesheet foundation (CSS variables, resets, typography, nav, footer, shared `.btn`/`.wrap`/`.tag`/`.sec-head` utilities). This is the skeleton every later section drops into.

**Files:**
- Create: `index.html`
- Create: `css/styles.css`
- Create: `js/main.js` (empty stub with a comment header for now)
- Create: `images/README.md` (instructions for swapping in real photos)

**Interfaces:**
- Produces: CSS custom properties on `:root` (names exactly as in prototype: `--cream, --cream-2, --apricot, --apricot-deep, --oat, --sage, --sage-deep, --ink, --ink-soft, --white, --shadow`); utility classes `.wrap`, `.tag`, `.btn`, `.btn.ghost`, `.sec-head`, `section.pad`; layout landmarks `header > nav.wrap` and `footer`. Later tasks insert `<section>` blocks between header and footer and rely on these utilities.

- [ ] **Step 1: Create the folder structure and image guide**

Create `images/README.md`:

```markdown
# Images

Drop real photos here, then update the matching slot in `index.html`.
Recommended: square-ish JP/WebP, ~1200px on the long edge, optimized < 300KB.

Suggested files (referenced by index.html once you add them):
- hero.jpg — signature birthday cake (hero section)
- about.jpg — the baker / kitchen portrait (Our Story)
- menu-cakes.jpg, menu-cupcakes.jpg, menu-smash.jpg, menu-cookies.jpg — menu cards
- gallery-1.jpg … gallery-8.jpg — gallery grid

Until real photos are added, the site shows soft gradient placeholders with an emoji.
To switch a placeholder to a photo, see the comment marked `<!-- IMAGE SLOT -->` in index.html.
```

Create `js/main.js`:

```javascript
// Little Sprout Bakery — site interactions
// (mobile nav toggle, smooth scroll, mailto contact form)
// Populated in later tasks.
```

- [ ] **Step 2: Create `index.html` document shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Little Sprout Bakery — organic, low-sugar birthday cakes & cupcakes for kids in West Los Angeles. Made fresh, naturally sweetened, no artificial anything." />
<title>Little Sprout Bakery · Organic Birthday Cakes for Kids · West LA</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="css/styles.css" />
</head>
<body>
<header>
  <nav class="wrap">
    <a class="brand" href="#top"><span class="leaf"></span> Little Sprout</a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
    <div class="navlinks" id="navlinks">
      <a href="#menu">Menu</a><a href="#gallery">Gallery</a><a href="#about">Our Story</a><a href="#contact">Contact</a>
    </div>
    <a class="btn nav-cta" href="#contact">Order a Cake</a>
  </nav>
</header>

<main id="top">
  <!-- Sections inserted by later tasks: hero, values, menu, gallery, about, contact -->
</main>

<footer>
  <div class="wrap">
    <a class="brand" href="#top"><span class="leaf"></span> Little Sprout Bakery</a>
    <p>Organic · Low-Sugar · Made with love in West Los Angeles</p>
    <p class="fineprint">© 2026 Little Sprout Bakery</p>
  </div>
</footer>
<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create `css/styles.css` foundation**

Copy the foundational styles from the prototype, plus the mobile-nav rules the prototype lacked. Write this complete block:

```css
:root{
  --cream:#FBF6EE; --cream-2:#F4EADB; --apricot:#E7B58C; --apricot-deep:#D49A6A;
  --oat:#E9DCC6; --sage:#9DAE8B; --sage-deep:#7C8E6B; --ink:#4A3F35; --ink-soft:#7A6B5C;
  --white:#fff; --shadow:0 18px 40px -22px rgba(74,63,53,.45);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Nunito Sans',sans-serif;color:var(--ink);background:var(--cream);line-height:1.7;-webkit-font-smoothing:antialiased}
h1,h2,h3,.serif{font-family:'Fraunces',serif;font-weight:500;line-height:1.15;letter-spacing:-.01em}
.wrap{max-width:1140px;margin:0 auto;padding:0 28px}
a{color:inherit;text-decoration:none}
.tag{display:inline-block;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:var(--sage-deep);font-weight:700}
img{max-width:100%;display:block}

/* NAV */
header{position:sticky;top:0;z-index:50;background:rgba(251,246,238,.82);backdrop-filter:blur(10px);border-bottom:1px solid var(--oat)}
nav{display:flex;align-items:center;justify-content:space-between;height:76px;gap:18px}
.brand{font-family:'Fraunces',serif;font-size:1.45rem;font-weight:600;display:flex;align-items:center;gap:10px}
.brand .leaf{width:30px;height:30px;border-radius:50% 50% 50% 0;background:linear-gradient(135deg,var(--sage),var(--sage-deep));display:inline-block;transform:rotate(-30deg);flex-shrink:0}
.navlinks{display:flex;gap:34px;font-size:.96rem;margin-left:auto}
.navlinks a{position:relative;padding:4px 0;color:var(--ink-soft);transition:color .2s}
.navlinks a:hover{color:var(--ink)}
.btn{display:inline-block;background:var(--apricot-deep);color:#fff;padding:12px 26px;border-radius:999px;font-weight:700;font-size:.92rem;transition:transform .2s,box-shadow .2s;box-shadow:0 8px 20px -8px var(--apricot-deep)}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px -8px var(--apricot-deep)}
.btn.ghost{background:transparent;color:var(--ink);border:1.5px solid var(--apricot);box-shadow:none}
.nav-toggle{display:none;background:none;border:none;font-size:1.6rem;color:var(--ink);cursor:pointer;line-height:1}
@media(max-width:760px){
  .navlinks{display:none;position:absolute;top:76px;left:0;right:0;flex-direction:column;gap:0;background:var(--cream);border-bottom:1px solid var(--oat);margin-left:0;padding:8px 0}
  .navlinks.open{display:flex}
  .navlinks a{padding:14px 28px;border-top:1px solid var(--oat)}
  .nav-toggle{display:block;margin-left:auto}
  .nav-cta{display:none}
}

/* SHARED SECTION SCAFFOLD */
section.pad{padding:84px 0}
.sec-head{text-align:center;max-width:620px;margin:0 auto 48px}
.sec-head h2{font-size:clamp(2rem,3.6vw,2.8rem);margin:12px 0}
.sec-head p{color:var(--ink-soft)}

/* FOOTER */
footer{background:var(--ink);color:#E9DCC6;padding:46px 0;text-align:center}
footer .brand{justify-content:center;color:#fff;margin-bottom:12px}
footer p{color:rgba(233,220,198,.7);font-size:.9rem}
footer .fineprint{margin-top:8px}
```

- [ ] **Step 4: Verify the shell renders**

Run: `open index.html` (macOS)
Expected: Cream page with a sticky header (leaf + "Little Sprout" brand, nav links, apricot "Order a Cake" button) and a dark footer. Empty middle. No console errors. At ≤760px width the nav links collapse and a ☰ button appears (clicking does nothing yet — wired in Task 5).

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js images/README.md
git commit -m "feat: scaffold static site shell, nav, footer, and CSS foundation"
```

---

### Task 2: Hero section + values strip

Add the two top-of-page sections: the hero (headline, tagline, CTAs, image slot, floating organic badge) and the four-item values strip.

**Files:**
- Modify: `index.html` (insert inside `<main id="top">`)
- Modify: `css/styles.css` (append hero + values rules)

**Interfaces:**
- Consumes: `.wrap`, `.tag`, `.btn`, `.btn.ghost` from Task 1.
- Produces: `<section class="hero">` and `<div class="values">` as the first children of `<main>`. The hero image slot uses the `<!-- IMAGE SLOT -->` convention later sections reuse.

- [ ] **Step 1: Insert hero + values HTML** (replace the `<!-- Sections inserted... -->` comment in `<main>`)

```html
<!-- HERO -->
<section class="hero wrap">
  <div class="hero-grid">
    <div>
      <span class="tag">West Los Angeles · Made to Order</span>
      <h1>Wholesome cakes for your little one's <em>big day</em>.</h1>
      <p class="lead">Organic, low-sugar birthday cakes &amp; cupcakes — baked by a mama who reads every label so you don't have to.</p>
      <div class="hero-cta">
        <a class="btn" href="#menu">See the Menu</a>
        <a class="btn ghost" href="#contact">Ask a Question</a>
      </div>
    </div>
    <!-- IMAGE SLOT: replace .hero-img contents with <img src="images/hero.jpg" alt="..."> -->
    <div class="hero-img">
      <div class="cake">🎂</div>
      <div class="ph">Hero photo — signature birthday cake</div>
      <div class="float-badge">🌿 <span><b>100% Organic</b><br>flour, fruit &amp; dairy</span></div>
    </div>
  </div>
</section>

<!-- VALUES -->
<div class="values">
  <div class="wrap">
    <div class="value"><span class="ic">🌾</span> Certified Organic</div>
    <div class="value"><span class="ic">🍯</span> Naturally Low-Sugar</div>
    <div class="value"><span class="ic">🚫</span> No Artificial Anything</div>
    <div class="value"><span class="ic">👩‍🍳</span> Small-Batch &amp; Fresh</div>
  </div>
</div>
```

- [ ] **Step 2: Append hero + values CSS to `css/styles.css`**

```css
/* HERO */
.hero{padding:72px 0 60px}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.hero h1{font-size:clamp(2.6rem,5vw,4rem);margin:18px 0 20px}
.hero h1 em{font-style:italic;color:var(--apricot-deep)}
.hero p.lead{font-size:1.12rem;color:var(--ink-soft);max-width:30ch;margin-bottom:30px}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.hero-img{position:relative;aspect-ratio:4/4.4;border-radius:30px;overflow:hidden;box-shadow:var(--shadow);
  background:
    radial-gradient(circle at 30% 30%, #fff7ee 0 18%, transparent 19%),
    linear-gradient(150deg,var(--oat),var(--apricot) 60%,var(--apricot-deep))}
.hero-img img{width:100%;height:100%;object-fit:cover}
.hero-img .ph{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:22px;font-size:.78rem;color:rgba(74,63,53,.55);letter-spacing:.12em;text-transform:uppercase}
.hero-img .cake{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:8rem;filter:drop-shadow(0 14px 18px rgba(0,0,0,.18))}
.float-badge{position:absolute;bottom:24px;left:-22px;background:#fff;border-radius:18px;padding:14px 18px;box-shadow:var(--shadow);font-size:.84rem;display:flex;align-items:center;gap:10px}
.float-badge b{font-family:'Fraunces',serif}
@media(max-width:860px){.hero-grid{grid-template-columns:1fr;gap:34px}.float-badge{left:14px}}

/* VALUES */
.values{background:var(--cream-2);border-top:1px solid var(--oat);border-bottom:1px solid var(--oat)}
.values .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:18px;padding-top:26px;padding-bottom:26px}
.value{display:flex;align-items:center;gap:12px;font-weight:600;color:var(--ink-soft)}
.value .ic{width:42px;height:42px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:1.2rem;box-shadow:0 6px 14px -8px rgba(0,0,0,.25)}
```

- [ ] **Step 3: Verify hero + values**

Run: `open index.html`
Expected: Two-column hero (text left, gradient image card with 🎂 and a white "100% Organic" badge floating bottom-left) followed by a tan strip with four value items. At 375px the hero stacks to one column and the values wrap. CTAs scroll to #menu / #contact (targets exist after later tasks; for now #contact scrolls to footer area).

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add hero section and values strip"
```

---

### Task 3: Menu section with prices

Add the four-card menu, each card carrying a description and a multi-row price list.

**Files:**
- Modify: `index.html` (append section inside `<main>`, after values)
- Modify: `css/styles.css` (append menu rules)

**Interfaces:**
- Consumes: `.wrap`, `.tag`, `.sec-head`, `section.pad`.
- Produces: `<section class="pad" id="menu">` — the `#menu` scroll target used by nav and hero CTA.

- [ ] **Step 1: Insert menu HTML**

```html
<!-- MENU -->
<section class="pad" id="menu">
  <div class="wrap">
    <div class="sec-head">
      <span class="tag">The Menu</span>
      <h2>Sweet things, thoughtfully made</h2>
      <p>Every order is custom. Prices below are starting points — tell us your theme and we'll make it magic.</p>
    </div>
    <div class="menu-grid">
      <div class="m-card">
        <div class="m-thumb m1">🎂</div>
        <div class="m-body">
          <h3>Custom Birthday Cakes <span class="price">from $48</span></h3>
          <p>Two-layer organic sponge with your choice of natural fruit or vanilla-bean filling.</p>
          <div class="m-list">
            <div class="row"><span>6" — serves 6–8</span><b>$48</b></div>
            <div class="row"><span>8" — serves 12–16</span><b>$68</b></div>
            <div class="row"><span>Two-tier — serves 25+</span><b>$120</b></div>
          </div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-thumb m2">🧁</div>
        <div class="m-body">
          <h3>Cupcakes <span class="price">from $36/dozen</span></h3>
          <p>Fluffy, lightly sweet, topped with whipped honey-buttercream. Mini sizes available.</p>
          <div class="m-list">
            <div class="row"><span>Standard — per dozen</span><b>$36</b></div>
            <div class="row"><span>Mini — per dozen</span><b>$28</b></div>
            <div class="row"><span>Themed toppers</span><b>+$8</b></div>
          </div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-thumb m3">🍰</div>
        <div class="m-body">
          <h3>Smash Cakes <span class="price">$35</span></h3>
          <p>The perfect refined-sugar-free first-birthday cake for tiny hands and big messes.</p>
          <div class="m-list">
            <div class="row"><span>4" smash cake</span><b>$35</b></div>
            <div class="row"><span>+ matching 6" family cake</span><b>$70</b></div>
          </div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-thumb m4">🍪</div>
        <div class="m-body">
          <h3>Cookies &amp; Treats <span class="price">from $24/dozen</span></h3>
          <p>Oat-almond cookies and fruit-sweetened treats — great for party favors.</p>
          <div class="m-list">
            <div class="row"><span>Soft cookies — dozen</span><b>$24</b></div>
            <div class="row"><span>Decorated sugar cookies</span><b>$42</b></div>
            <div class="row"><span>Favor boxes (each)</span><b>$6</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

Note: `.m-thumb` blocks are `<!-- IMAGE SLOT -->`s — to use a photo, replace the emoji with `<img src="images/menu-cakes.jpg" alt="...">`.

- [ ] **Step 2: Append menu CSS**

```css
/* MENU */
.menu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:26px}
.m-card{background:#fff;border-radius:24px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .25s}
.m-card:hover{transform:translateY(-6px)}
.m-thumb{aspect-ratio:16/10;position:relative;display:grid;place-items:center;font-size:4rem}
.m-thumb img{width:100%;height:100%;object-fit:cover}
.m1{background:linear-gradient(140deg,#F6DCC4,#E7B58C)}
.m2{background:linear-gradient(140deg,#EAE2CC,#C9D3B4)}
.m3{background:linear-gradient(140deg,#F3D9D2,#E9B6A8)}
.m4{background:linear-gradient(140deg,#E7DECb,#D9C39A)}
.m-body{padding:22px 24px 26px;flex:1;display:flex;flex-direction:column}
.m-body h3{font-size:1.4rem;display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.price{font-family:'Nunito Sans';font-weight:700;color:var(--apricot-deep);font-size:1.05rem;white-space:nowrap}
.m-body p{color:var(--ink-soft);font-size:.96rem;margin-top:8px}
.m-list{margin-top:14px;display:flex;flex-direction:column;gap:7px;font-size:.92rem}
.m-list .row{display:flex;justify-content:space-between;border-bottom:1px dashed var(--oat);padding-bottom:6px;color:var(--ink-soft)}
.m-list .row b{color:var(--ink)}
@media(max-width:760px){.menu-grid{grid-template-columns:1fr}}
```

- [ ] **Step 3: Verify menu**

Run: `open index.html`
Expected: "The Menu" heading, then a 2×2 grid of white cards (1 column at 375px). Each card: gradient thumb with emoji, title with apricot price on the right, description, and a dashed-divider price list. Nav "Menu" link and hero "See the Menu" button scroll here.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add menu section with per-item price lists"
```

---

### Task 4: Gallery + About sections

Add the gallery image grid and the "Our Story" about section.

**Files:**
- Modify: `index.html` (append after menu)
- Modify: `css/styles.css` (append gallery + about rules)

**Interfaces:**
- Consumes: `.wrap`, `.tag`, `.sec-head`, `section.pad`.
- Produces: `<section ... id="gallery">` and `<section ... id="about">` scroll targets.

- [ ] **Step 1: Insert gallery + about HTML**

```html
<!-- GALLERY -->
<section class="pad gal" id="gallery">
  <div class="wrap">
    <div class="sec-head">
      <span class="tag">Gallery</span>
      <h2>A little look at our work</h2>
      <p>Replace these with your real photos — the layout stays the same.</p>
    </div>
    <!-- IMAGE SLOTS: replace each emoji with <img src="images/gallery-N.jpg" alt="..."> -->
    <div class="gal-grid">
      <div class="g">🎂</div><div class="g">🧁</div><div class="g">🍓</div><div class="g">🍰</div>
      <div class="g">🌸</div><div class="g">🫐</div><div class="g">🍪</div><div class="g">🎉</div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section class="pad" id="about">
  <div class="wrap">
    <div class="about-grid">
      <!-- IMAGE SLOT: replace .about-img contents with <img src="images/about.jpg" alt="..."> -->
      <div class="about-img">👩‍🍳</div>
      <div>
        <span class="tag">Our Story</span>
        <h2>Started in a mama's kitchen</h2>
        <p>When my own kids couldn't have the sugary cakes at birthday parties, I started baking our own — organic, naturally sweetened, and made with the kind of care only a mom gives.</p>
        <p>Today I bake those same cakes for families across West LA. Every order is small-batch, made fresh to order, and free of artificial dyes, preservatives, and refined sugar.</p>
        <p class="sig">— with love, Mama</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append gallery + about CSS**

```css
/* GALLERY */
.gal{background:var(--cream-2)}
.gal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.g{aspect-ratio:1;border-radius:18px;display:grid;place-items:center;font-size:2.6rem;color:rgba(255,255,255,.85);box-shadow:var(--shadow);overflow:hidden}
.g img{width:100%;height:100%;object-fit:cover}
.g:nth-child(1){background:linear-gradient(135deg,#E7B58C,#D49A6A)}
.g:nth-child(2){background:linear-gradient(135deg,#C9D3B4,#9DAE8B)}
.g:nth-child(3){background:linear-gradient(135deg,#F3D9D2,#E9B6A8)}
.g:nth-child(4){background:linear-gradient(135deg,#E9DCC6,#D9C39A)}
.g:nth-child(5){background:linear-gradient(135deg,#D9C39A,#E7B58C)}
.g:nth-child(6){background:linear-gradient(135deg,#9DAE8B,#7C8E6B)}
.g:nth-child(7){background:linear-gradient(135deg,#E9B6A8,#D49A6A)}
.g:nth-child(8){background:linear-gradient(135deg,#C9D3B4,#E9DCC6)}
@media(max-width:760px){.gal-grid{grid-template-columns:repeat(2,1fr)}}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;align-items:center}
.about-img{aspect-ratio:1;border-radius:28px;background:linear-gradient(150deg,var(--oat),var(--sage));display:grid;place-items:center;font-size:6rem;box-shadow:var(--shadow);overflow:hidden}
.about-img img{width:100%;height:100%;object-fit:cover}
.about-grid h2{font-size:clamp(1.9rem,3.4vw,2.6rem);margin-bottom:18px}
.about-grid p{color:var(--ink-soft);margin-bottom:16px}
.sig{font-family:'Fraunces',serif;font-style:italic;font-size:1.5rem;color:var(--apricot-deep)}
@media(max-width:760px){.about-grid{grid-template-columns:1fr}}
```

- [ ] **Step 3: Verify gallery + about**

Run: `open index.html`
Expected: Tan "Gallery" section with a 4×2 rounded-tile grid (2 columns at 375px), then a white "Our Story" section with a square image card left and text right (stacks at 375px), ending with an italic "— with love, Mama". Nav "Gallery"/"Our Story" links scroll to each.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add gallery grid and Our Story section"
```

---

### Task 5: Contact section + interactive JS (mobile nav, mailto form)

Add the contact section (info, socials, message form) and wire up all JavaScript: mobile nav toggle and the mailto form submission. This task delivers the site's interactivity end-to-end.

**Files:**
- Modify: `index.html` (append contact section after about)
- Modify: `css/styles.css` (append contact rules)
- Modify: `js/main.js` (implement nav toggle + mailto form)

**Interfaces:**
- Consumes: `.wrap`, `.tag`, `.sec-head`, `section.pad`, `.btn`; the `#navlinks` element and `.nav-toggle` button from Task 1.
- Produces: `<section ... id="contact">` with `<form id="contact-form">`; JS behaviors `mobile nav toggle` and `mailto submit`.

- [ ] **Step 1: Insert contact HTML**

```html
<!-- CONTACT -->
<section class="pad contact" id="contact">
  <div class="wrap">
    <div class="sec-head">
      <span class="tag">Get in Touch</span>
      <h2>Let's plan something sweet</h2>
      <p>Tell us about the birthday and we'll get back to you within a day.</p>
    </div>
    <div class="c-grid">
      <div class="c-info">
        <div class="line"><span class="ic">📧</span> <a href="mailto:hello@littlesproutbakery.com">hello@littlesproutbakery.com</a></div>
        <div class="line"><span class="ic">📱</span> <a href="tel:+13105550142">(310) 555-0142</a> · text friendly</div>
        <div class="line"><span class="ic">📍</span> West Los Angeles · pickup &amp; local delivery</div>
        <p>Prefer social? Send us a DM — we love seeing your party themes.</p>
        <div class="socials">
          <a href="https://instagram.com/" title="Instagram" target="_blank" rel="noopener">📷</a>
          <a href="https://tiktok.com/" title="TikTok" target="_blank" rel="noopener">🎵</a>
          <a href="https://facebook.com/" title="Facebook" target="_blank" rel="noopener">📘</a>
          <a href="https://pinterest.com/" title="Pinterest" target="_blank" rel="noopener">📌</a>
        </div>
      </div>
      <form id="contact-form">
        <label for="cf-name">Your name</label>
        <input id="cf-name" name="name" type="text" placeholder="Jane Doe" required />
        <label for="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" placeholder="jane@email.com" required />
        <label for="cf-type">What are we celebrating?</label>
        <select id="cf-type" name="type"><option>Birthday cake</option><option>Cupcakes</option><option>Smash cake</option><option>Cookies / favors</option><option>Something else</option></select>
        <label for="cf-msg">Tell us more</label>
        <textarea id="cf-msg" name="message" placeholder="Date, theme, number of guests, any allergies…"></textarea>
        <button class="btn" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append contact CSS**

```css
/* CONTACT */
.contact{background:linear-gradient(160deg,var(--apricot) -10%,var(--apricot-deep));color:#fff}
.contact .sec-head h2,.contact .sec-head p{color:#fff}
.contact .tag{color:rgba(255,255,255,.85)}
.c-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:start}
.c-info p{margin-bottom:18px;color:rgba(255,255,255,.92)}
.c-info .line{display:flex;align-items:center;gap:14px;margin-bottom:16px;font-weight:600}
.c-info .line a{color:#fff}
.c-info .line a:hover{text-decoration:underline}
.c-info .line .ic{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.18);display:grid;place-items:center;font-size:1.15rem;flex-shrink:0}
.socials{display:flex;gap:14px;margin-top:26px}
.socials a{width:46px;height:46px;border-radius:14px;background:rgba(255,255,255,.16);display:grid;place-items:center;font-size:1.15rem;transition:background .2s,transform .2s}
.socials a:hover{background:rgba(255,255,255,.3);transform:translateY(-3px)}
form{background:#fff;border-radius:24px;padding:30px;box-shadow:var(--shadow)}
form label{display:block;font-size:.85rem;font-weight:700;color:var(--ink);margin:0 0 7px}
form input,form textarea,form select{width:100%;padding:13px 16px;border:1.5px solid var(--oat);border-radius:14px;font-family:inherit;font-size:.95rem;margin-bottom:18px;background:var(--cream);color:var(--ink)}
form input:focus,form textarea:focus,form select:focus{outline:none;border-color:var(--apricot-deep)}
form textarea{resize:vertical;min-height:110px}
form .btn{width:100%;border:none;cursor:pointer;font-family:inherit;font-size:1rem}
@media(max-width:760px){.c-grid{grid-template-columns:1fr}}
```

- [ ] **Step 3: Implement `js/main.js`**

```javascript
// Little Sprout Bakery — site interactions

// 1) Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navlinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  // Close the menu after tapping a link (mobile)
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// 2) Contact form -> mailto (no backend in v1)
const BAKERY_EMAIL = 'hello@littlesproutbakery.com';
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const type = (data.get('type') || '').toString();
    const message = (data.get('message') || '').toString().trim();

    const subject = `Cake inquiry — ${type} — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Celebrating: ${type}\n\n` +
      `${message}\n`;

    const href =
      `mailto:${BAKERY_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  });
}
```

- [ ] **Step 4: Verify contact + interactivity**

Run: `open index.html`
Expected:
- Apricot-gradient contact section: left column shows clickable email (mailto), phone (tel), location, and four social tiles; right column shows a white form card.
- Filling the form and clicking "Send Message" opens the default mail client with a pre-filled email to `hello@littlesproutbakery.com` (subject + body populated). No page navigation/error.
- At ≤760px: tapping ☰ opens the nav dropdown; tapping a link scrolls and closes it.
- All nav links (Menu, Gallery, Our Story, Contact) scroll to their sections smoothly.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: add contact section with mailto form and mobile nav toggle"
```

---

### Task 6: Final responsive pass, editing guide, and full-page verification

Verify the whole page across breakpoints, fix any layout issues found, and add a top-level README so the owner can edit content and (later) deploy.

**Files:**
- Create: `README.md`
- Modify: `index.html` / `css/styles.css` (only if verification surfaces issues)

**Interfaces:**
- Consumes: the finished page from Tasks 1–5.
- Produces: project `README.md`. No new code interfaces.

- [ ] **Step 1: Create top-level `README.md`**

```markdown
# Little Sprout Bakery — Website

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
- **Brand name / email / phone / socials:** search `index.html` for `Little Sprout`,
  `hello@littlesproutbakery.com`, `3105550142`, and the social `href="https://..."`
  links and replace. Also update `BAKERY_EMAIL` in `js/main.js`.
- **Photos:** add files to `images/`, then replace the matching `<!-- IMAGE SLOT -->`
  placeholder in `index.html` with `<img src="images/your-file.jpg" alt="description">`.

## Going live (later)
This is a static site (HTML/CSS/JS only). When ready to publish, ask for a hosting
recommendation — at that point a server-side contact form can replace the mailto flow.
```

- [ ] **Step 2: Responsive verification at three widths**

Run: `open index.html`, then use the browser's responsive/device toolbar (or resize) to check **375px, 768px, 1140px**.
Expected at each width, top to bottom — header, hero, values, menu, gallery, about, contact, footer:
- No horizontal scrollbar; no text overflowing its container; no overlapping elements.
- 375px: hero/about stack to 1 column; menu 1 column; gallery 2 columns; ☰ menu works; nav CTA hidden.
- 768px: gallery 4 columns; values wrap reasonably; nav still collapsed (breakpoint 760px → desktop nav at 768px shows links).
- 1140px: full two-column hero/about, 2×2 menu, content centered within `.wrap`.

Fix any issue found in `css/styles.css` (e.g., add `flex-wrap`/adjust a breakpoint) and re-open to confirm.

- [ ] **Step 3: Link & function smoke test**

Run: `open index.html`
Verify each: brand logo → scrolls to top; each nav link → correct section; "Order a Cake" & hero CTAs → #contact / #menu; email link opens mailto; phone link is `tel:`; social tiles open in a new tab; form submit opens pre-filled mail client. Confirm browser console shows zero errors.

- [ ] **Step 4: Commit**

```bash
git add README.md index.html css/styles.css
git commit -m "docs: add README and finalize responsive verification"
```

---

## Self-Review Notes

- **Spec coverage:** Header/nav (T1), Hero (T2), Values strip (T2), Menu+prices (T3), Gallery (T4), About (T5→T4), Contact w/ email+phone+social+form (T5), Footer (T1), responsive + editability + image slots (T1/T6), mailto contact approach (T5), README/editing guide (T6). All spec §4 sections and §6 contact approach covered.
- **Type/name consistency:** scroll-target IDs (`#menu`, `#gallery`, `#about`, `#contact`, `#top`), `#navlinks`, `.nav-toggle`, `#contact-form`, and `BAKERY_EMAIL` are defined once and referenced consistently across tasks.
- **No placeholders:** every code step contains complete, paste-ready content.
