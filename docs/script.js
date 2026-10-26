const yearNode = document.getElementById('year');
yearNode.textContent = new Date().getFullYear();

const langButtons = document.querySelectorAll('[data-lang]');
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach((el) => {
    const value = el.dataset[lang];
    if (value) el.textContent = value;
  });
  langButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
}
langButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage = 'es';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'es'; } catch (_) {}
setLanguage(savedLanguage);

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  try { localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch (_) {}
});
try {
  if (localStorage.getItem('portfolio-theme') === 'light') document.body.classList.add('light');
} catch (_) {}

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
