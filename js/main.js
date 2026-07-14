// Mama Bakery — site interactions

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navlinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// i18n — language toggle
const translations = {
  en: {
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.about': 'Our Story',
    'nav.contact': 'Contact',
    'nav.cta': 'Order a Cake',
    'hero.tag': 'West Los Angeles · Made to Order',
    'hero.title': 'Wholesome cakes for your little one\'s <em>big day</em>.',
    'hero.lead': 'Organic, low-sugar birthday cakes & cupcakes — baked by a mama who reads every label so you don\'t have to.',
    'hero.menu': 'See the Menu',
    'hero.ask': 'Ask a Question',
    'val.organic': 'Certified Organic',
    'val.sugar': 'Naturally Low-Sugar',
    'val.noart': 'No Artificial Anything',
    'val.fresh': 'Small-Batch & Fresh',
    'menu.tag': 'The Menu',
    'menu.title': 'Sweet things, thoughtfully made',
    'menu.desc': 'Every order is custom. Prices below are starting points — tell us your theme and we\'ll make it magic.',
    'menu.cake.name': 'Custom Cakes <span class="price">from $58</span>',
    'menu.cake.desc': 'Two-layer organic sponge, naturally sweetened, decorated to your theme.',
    'menu.cake.s6': '6" — serves 6–8',
    'menu.cake.s8': '8" — serves 8–10',
    'menu.cake.fruit': 'Add fresh seasonal fruit',
    'menu.cup.name': 'Cupcakes <span class="price">from $40</span>',
    'menu.cup.desc': 'Fluffy, lightly sweet, topped with organic whipping cream — perfect for parties & favors.',
    'menu.cup.s12': '12 cupcakes',
    'menu.cup.s18': '18 cupcakes',
    'gal.tag': 'Gallery',
    'gal.title': 'A little look at our work',
    'gal.desc': 'A few of our recent cakes & cupcakes — naturally sweetened, made fresh to order.',
    'about.tag': 'Our Story',
    'about.title': 'Started in a mama\'s kitchen',
    'about.p1': 'When my own kids couldn\'t have the sugary cakes at birthday parties, I started baking our own — organic, naturally sweetened, and made with the kind of care only a mom gives.',
    'about.p2': 'I source our ingredients myself, working directly with <strong>organic farms</strong> — choosing produce I\'d happily feed my own family. Nothing else makes it into our kitchen.',
    'about.p3': 'Today I bake those same cakes for families across West LA. Every order is small-batch, made fresh to order, and free of artificial dyes, preservatives, and refined sugar.',
    'about.sig': '— with love, Mama',
    'contact.tag': 'Get in Touch',
    'contact.title': 'Let\'s plan something sweet',
    'contact.desc': 'Tell us about the birthday and we\'ll get back to you within a day.',
    'contact.location': 'West Los Angeles · pickup & local delivery',
    'contact.social': 'Prefer social? Send us a DM — we love seeing your party themes.',
    'form.name': 'Your name',
    'form.name.ph': 'Jane Doe',
    'form.email': 'Email',
    'form.email.ph': 'jane@email.com',
    'form.type': 'What are we celebrating?',
    'form.opt.cake': 'Birthday cake',
    'form.opt.cup': 'Cupcakes',
    'form.opt.other': 'Something else',
    'form.msg': 'Tell us more',
    'form.msg.ph': 'Date, theme, number of guests, any allergies…',
    'form.submit': 'Send Message',
    'footer.tagline': 'Organic · Low-Sugar · Made with love in West Los Angeles',
    'footer.copy': '© 2026 Mama Bakery',
  },
  zh: {
    'nav.menu': '菜单',
    'nav.gallery': '作品展示',
    'nav.about': '我们的故事',
    'nav.contact': '联系我们',
    'nav.cta': '订购蛋糕',
    'hero.tag': '西洛杉矶 · 接单定制',
    'hero.title': '为宝贝的<em>大日子</em>，做一个健康的蛋糕。',
    'hero.lead': '有机、低糖的生日蛋糕和纸杯蛋糕——由一位会仔细阅读每一个配料表的妈妈亲手烘焙。',
    'hero.menu': '查看菜单',
    'hero.ask': '咨询一下',
    'val.organic': '有机认证',
    'val.sugar': '天然低糖',
    'val.noart': '零人工添加',
    'val.fresh': '小批量 · 新鲜制作',
    'menu.tag': '菜单',
    'menu.title': '用心制作的甜蜜',
    'menu.desc': '每一份订单都是定制的。以下价格为起步价——告诉我们你的主题，我们来创造惊喜。',
    'menu.cake.name': '定制蛋糕 <span class="price">$58 起</span>',
    'menu.cake.desc': '双层有机蛋糕，天然甜味，按您的主题装饰。',
    'menu.cake.s6': '6 英寸 — 适合 6–8 人',
    'menu.cake.s8': '8 英寸 — 适合 8–10 人',
    'menu.cake.fruit': '加新鲜时令水果',
    'menu.cup.name': '纸杯蛋糕 <span class="price">$40 起</span>',
    'menu.cup.desc': '蓬松、微甜，搭配有机淡奶油——派对和伴手礼的完美选择。',
    'menu.cup.s12': '12 个纸杯蛋糕',
    'menu.cup.s18': '18 个纸杯蛋糕',
    'gal.tag': '作品展示',
    'gal.title': '看看我们的作品',
    'gal.desc': '我们最近的蛋糕和纸杯蛋糕——天然甜味，新鲜定制。',
    'about.tag': '我们的故事',
    'about.title': '从一位妈妈的厨房开始',
    'about.p1': '当我的孩子们无法吃生日派对上那些高糖蛋糕时，我开始自己烘焙——有机、天然甜味，带着只有妈妈才有的那份用心。',
    'about.p2': '我亲自采购食材，直接与<strong>有机农场</strong>合作——选择我愿意给自己家人吃的食材。其他的，一律不进我的厨房。',
    'about.p3': '如今，我为西洛杉矶的家庭们烘焙同样的蛋糕。每一份订单都是小批量制作、新鲜出炉，不含人工色素、防腐剂和精制糖。',
    'about.sig': '—— 用爱，Mama',
    'contact.tag': '联系我们',
    'contact.title': '一起来策划甜蜜时刻',
    'contact.desc': '告诉我们关于生日派对的想法，我们会在一天内回复您。',
    'contact.location': '西洛杉矶 · 自取或本地配送',
    'contact.social': '喜欢社交媒体？给我们发私信吧——我们喜欢看到你们的派对主题。',
    'form.name': '您的姓名',
    'form.name.ph': '张三',
    'form.email': '邮箱',
    'form.email.ph': 'zhangsan@email.com',
    'form.type': '我们在庆祝什么？',
    'form.opt.cake': '生日蛋糕',
    'form.opt.cup': '纸杯蛋糕',
    'form.opt.other': '其他',
    'form.msg': '更多细节',
    'form.msg.ph': '日期、主题、人数、过敏信息……',
    'form.submit': '发送消息',
    'footer.tagline': '有机 · 低糖 · 用爱烘焙于西洛杉矶',
    'footer.copy': '© 2026 Mama Bakery',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.getElementById('html-root').lang = lang === 'zh' ? 'zh-CN' : 'en';

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.placeholder = dict[key];
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
}

const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  });
}

if (currentLang !== 'en') setLang(currentLang);

// Gallery — center-focused coverflow carousel + click-to-enlarge lightbox
(function gallery() {
  const track = document.getElementById('carTrack');
  const lb = document.getElementById('lightbox');
  if (!track || !lb) return;

  const carousel = track.closest('.gal-carousel');
  const slides = Array.from(track.querySelectorAll('.car-slide'));
  let active = 0;

  const centerOf = (s) => s.offsetLeft + s.offsetWidth / 2;

  // Leading/trailing space so the first & last slide can reach the centre
  function pad() {
    if (!slides.length) return;
    const p = Math.max(0, (track.clientWidth - slides[0].offsetWidth) / 2);
    track.style.paddingLeft = track.style.paddingRight = p + 'px';
  }
  function refresh() {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(centerOf(s) - mid);
      if (d < bd) { bd = d; best = i; }
    });
    active = best;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === best));
  }
  function goTo(i, smooth = true) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: centerOf(slides[i]) - track.clientWidth / 2, behavior: smooth ? 'smooth' : 'auto' });
  }

  let raf;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(refresh);
  }, { passive: true });
  window.addEventListener('resize', () => { pad(); goTo(active, false); refresh(); });

  carousel.querySelector('.car-prev').addEventListener('click', () => goTo(active - 1));
  carousel.querySelector('.car-next').addEventListener('click', () => goTo(active + 1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
  });

  // Click a side photo to bring it to centre; click the centre one to enlarge
  slides.forEach((s, i) => s.addEventListener('click', () => {
    if (i === active) open(i); else goTo(i);
  }));

  pad();
  requestAnimationFrame(() => { goTo(0, false); refresh(); });

  // Lightbox
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  let idx = 0;

  function show(i) {
    idx = (i + slides.length) % slides.length;
    const img = slides[idx].querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
  }
  function open(i) {
    show(i);
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.hidden = true;
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
    goTo(idx); // keep the carousel in sync with what was last viewed
  }

  lb.querySelectorAll('[data-lb-close]').forEach((el) => el.addEventListener('click', close));
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => show(idx - 1));
  lb.querySelector('[data-lb-next]').addEventListener('click', () => show(idx + 1));
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });

  // Swipe within the lightbox on touch devices
  let startX = null;
  lb.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) show(dx < 0 ? idx + 1 : idx - 1);
    startX = null;
  }, { passive: true });
})();

// Contact form — submit to Formspree via fetch, show inline status
(function contactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  const T = {
    ok: { en: "Thank you! We'll get back to you within a day.", zh: '谢谢！我们会在一天内回复您。' },
    err: { en: 'Something went wrong — please try again, or email us directly.', zh: '发送失败，请再试一次，或直接邮件联系我们。' },
    net: { en: 'Network error — please try again.', zh: '网络错误，请稍后再试。' },
  };
  T.soon = {
    en: 'Our online form is coming soon — for now please reach us on Instagram or by email 🌸',
    zh: '在线表单即将开放，目前请通过 Instagram 私信或邮件联系我们 🌸',
  };
  // Until a real Formspree endpoint is set, don't POST — show a friendly note.
  const notConfigured = form.action.includes('YOUR_FORM_ID');

  const t = (k) => T[k][currentLang] || T[k].en;
  function show(msg, ok) {
    status.textContent = msg;
    status.classList.toggle('ok', ok);
    status.classList.toggle('err', !ok);
    status.hidden = false;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (notConfigured) { show(t('soon'), true); return; }
    const btn = form.querySelector('button[type="submit"]');
    status.hidden = true;
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        show(t('ok'), true);
      } else {
        const data = await res.json().catch(() => ({}));
        show(data.errors ? data.errors.map((x) => x.message).join(', ') : t('err'), false);
      }
    } catch {
      show(t('net'), false);
    } finally {
      btn.disabled = false;
    }
  });
})();

// Menu — compact horizontal image sliders (arrows, dots, native swipe)
(function menuSliders() {
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const track = slider.querySelector('.m-track');
    const dotsWrap = slider.querySelector('.m-dots');
    const imgs = Array.from(track.querySelectorAll('img'));
    if (imgs.length < 2) {
      slider.querySelectorAll('.m-arrow').forEach((a) => (a.style.display = 'none'));
      return;
    }
    let cur = 0;

    const dots = imgs.map((_, i) => {
      const d = document.createElement('button');
      d.type = 'button';
      d.className = 'm-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Photo ' + (i + 1));
      d.addEventListener('click', () => go(i));
      dotsWrap.appendChild(d);
      return d;
    });

    function paint() {
      dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    }
    function go(i) {
      cur = (i + imgs.length) % imgs.length;
      track.scrollTo({ left: cur * track.clientWidth, behavior: 'smooth' });
      paint();
    }

    slider.querySelector('.m-prev').addEventListener('click', () => go(cur - 1));
    slider.querySelector('.m-next').addEventListener('click', () => go(cur + 1));
    track.addEventListener('scroll', () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== cur) { cur = i; paint(); }
    }, { passive: true });
  });
})();
