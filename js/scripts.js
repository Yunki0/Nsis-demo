window.onload = function() {
     const loader = document.getElementById('loader');
    
    // Ajoute un délai de 2 secondes avant de masquer l'overlay de chargement
     setTimeout(function() {
         loader.style.display = 'none';
     },800); // 800 millisecondes = 0.8 secondes
};

// script pour redirection
document.querySelector('.container').addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.location.href = url; // Redirige vers l'URL
});
