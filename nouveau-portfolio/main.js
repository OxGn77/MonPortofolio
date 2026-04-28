// Fonction pour scroller vers la section projets
function scrollToProjects() {
    const projectsSection = document.getElementById('projets');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour gérer les clics sur les liens sociaux
function handleSocialClick(event) {
    event.preventDefault();
    alert('Lien social - À mettre à jour avec vos vrais profils!');
}

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const nom = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Afficher un message de confirmation
    alert(`Merci ${nom}! Votre message a été reçu. Nous vous répondrons bientôt à ${email}`);
    
    // Réinitialiser le formulaire
    this.reset();
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de projet
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Fonction pour changer la couleur de la navigation au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Surligner le lien de navigation actif
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-dark)';
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Message de bienvenue dans la console
console.log('%cBienvenue sur mon portfolio! 👋', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cDesigné et développé avec ❤️', 'font-size: 14px; color: #764ba2;');
