// Fichier: script.js

document.addEventListener('DOMContentLoaded', function() {
    const boutonsImages = document.querySelectorAll('.bouton-images');
    const boutonsCoeur = document.querySelectorAll('.bouton-coeur');

    boutonsImages.forEach(bouton => {
        bouton.addEventListener('click', function() {
            const jeuId = this.getAttribute('data-jeu');
            const galerie = document.querySelector(`#${jeuId} .galerie-images`);
            galerie.style.display = 'block'; // Affiche la galerie d'images
        });
    });

    boutonsCoeur.forEach(bouton => {
        bouton.addEventListener('click', function() {
            const compteur = this.querySelector('.compteur-coeur');
            const isActive = this.classList.contains('active');
            
            if (isActive) {
                // Si déjà actif, enlève le like
                let nombreCoeurs = parseInt(compteur.textContent);
                nombreCoeurs--;
                compteur.textContent = nombreCoeurs;
                this.classList.remove('active');
            } else {
                // Sinon, ajoute le like
                let nombreCoeurs = parseInt(compteur.textContent);
                nombreCoeurs++;
                compteur.textContent = nombreCoeurs;
                this.classList.add('active');
            }
        });
    });
});