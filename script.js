document.addEventListener('DOMContentLoaded', function () {
  // Injecter le header
  fetch('partials/header.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
      activerLienActif();
    });

  // Injecter le footer
  fetch('partials/footer.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });

  // Fonction pour surligner le lien actif
  function activerLienActif() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      if (link.href.includes(currentPath)) {
        link.style.color = 'var(--clr-accent)';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // ✅ ouvre/ferme le menu
  });
});


