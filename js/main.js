// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('project-search');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      const matches = title.includes(query) || description.includes(query);
      
      // Usa hidden para acessibilidade (melhor que display: none)
      card.setAttribute('aria-hidden', !matches);
      card.style.display = matches ? 'block' : 'none';
    });
  });
});