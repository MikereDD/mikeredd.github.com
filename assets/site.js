const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'copied';
    } catch {
      button.textContent = 'copy failed';
    }
    setTimeout(() => { button.textContent = original; }, 1400);
  });
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}

const hero = document.querySelector('.hero');
const terminal = document.querySelector('.terminal-window');
if (hero && terminal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    terminal.style.transform = `perspective(1200px) rotateY(${x * -10 - 7}deg) rotateX(${y * 6 + 3}deg) translate3d(${x * 10}px, ${y * 10}px, 0)`;
  });
  hero.addEventListener('pointerleave', () => {
    terminal.style.transform = '';
  });
}
