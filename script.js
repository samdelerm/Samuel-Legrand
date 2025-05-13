document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le titre de la section Accueil
    gsap.from("#accueil h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    // Animation pour le paragraphe de la section Accueil
    gsap.from("#accueil p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Animation pour les images de la galerie
    gsap.from(".gallery img", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1
    });

    // Animation pour le formulaire de contact
    gsap.from("#contact form", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 1.5
    });
});
