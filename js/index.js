// Fonction pour un défilement doux (du script précédent)
function smoothScroll(target) {
    const startY = window.scrollY; // Position actuelle de défilement
    const targetY = target.getBoundingClientRect().top + window.scrollY; // Position cible
    const distance = targetY - startY; // Distance à parcourir
    const duration = 800; // Durée du défilement en millisecondes
    const startTime = performance.now(); // Temps de début de l'animation

    // Fonction pour gérer chaque étape de l'animation
    function step(currentTime) {
        const elapsed = currentTime - startTime; // Temps écoulé depuis le début
        const progress = Math.min(elapsed / duration, 1); // Progression de l'animation (0 à 1)
        const ease = easeInOutQuad(progress); // Applique une fonction d'easing pour une animation fluide
        const scrollY = startY + distance * ease; // Calcule la position actuelle de défilement

        window.scrollTo(0, scrollY); // Défilement vers la position calculée

        // Continue l'animation tant que la durée n'est pas écoulée
        if (elapsed < duration) {
            requestAnimationFrame(step); // Appelle la fonction 'step' à la prochaine frame
        }
    }

    requestAnimationFrame(step); // Démarre l'animation
}

// Fonction d'easing pour une animation fluide
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // Retourne la valeur d'easing
}

// Ajout d'événements aux liens pour activer le défilement doux
const navLinks = document.querySelectorAll('nav a'); // Sélectionne tous les liens dans la navigation
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la section cible
        const targetElement = document.getElementById(targetId); // Sélectionne l'élément cible

        if (targetElement) {
            smoothScroll(targetElement); // Appelle la fonction de défilement doux
        }
    });
});

// Met à jour l'onglet actif en fonction du défilement
window.addEventListener('scroll', () => {
    let currentSection = ''; // Variable pour stocker la section actuelle

    // Parcourt toutes les sections pour déterminer laquelle est visible
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop; // Position en haut de la section
        const sectionHeight = section.offsetHeight; // Hauteur de la section

        // Vérifie si la section est visible dans la fenêtre
        if (window.scrollY >= sectionTop + 50 - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Met à jour la section actuelle
        }
    });

    // Met à jour les classes des liens de navigation en fonction de la section actuelle
    navLinks.forEach(link => {
        link.classList.remove('active'); // Retire la classe 'active' de tous les liens
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active'); // Ajoute la classe 'active' au lien correspondant
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const presentationSection = document.getElementById('présentation'); // Sélectionne la section présentation

    // Vérifie si la section présentation est visible
    const sectionTop = presentationSection.offsetTop; // Position en haut de la section
    const sectionHeight = presentationSection.offsetHeight; // Hauteur de la section

    // Vérifie si l'utilisateur est dans la section présentation ou en dessous
    if (window.scrollY >= sectionTop) {
        // Si l'utilisateur a défilé de plus de 50 pixels à partir de la section présentation
        if (window.scrollY > sectionTop - 50) { 
            navbar.classList.add('scrolled'); // Ajoute la classe pour changer le style
        } else {
            navbar.classList.remove('scrolled'); // Retire la classe si l'utilisateur remonte
        }
    } else {
        // Si l'utilisateur est au-dessus de la section présentation, retire la classe
        navbar.classList.remove('scrolled');
    }
});