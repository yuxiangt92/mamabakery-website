// Mama Bakery — site interactions

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
const BAKERY_EMAIL = 'hello@mamabakery.com';
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
