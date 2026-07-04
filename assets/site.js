document.getElementById('year').textContent = new Date().getFullYear();

for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      const old = button.textContent;
      button.textContent = 'copied';
      setTimeout(() => { button.textContent = old; }, 1400);
    } catch {
      button.textContent = 'copy failed';
      setTimeout(() => { button.textContent = 'copy'; }, 1400);
    }
  });
}
