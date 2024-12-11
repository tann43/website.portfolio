function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.background = '#00ffff';
        card.style.color = '#ffffff';
    });

    card.addEventListener('mouseup', () => {
        card.style.background = '#ffffff';
        card.style.color = '#00ffff';
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = '#00ffff';
        card.style.color = '#00ffff';
    });

    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        navLinks.style.transition = 'all 0.3s ease-in-out'; // Menambahkan transisi
      }

      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.add('scale-up');
          setTimeout(() => {
            card.classList.remove('scale-up');
          }, 300);
        });
    });

    const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        }

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text p');
    animatedText.style.opacity = 0;

    setTimeout(() => {
        animatedText.style.opacity = 1;
    }, 1000);
});