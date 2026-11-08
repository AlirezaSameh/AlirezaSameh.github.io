const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
const themeButton = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') document.documentElement.dataset.theme = 'light';
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
