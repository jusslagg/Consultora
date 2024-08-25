// Puedes agregar aquí cualquier funcionalidad JavaScript necesaria
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Efecto al hacer scroll
    const services = document.querySelectorAll('.service');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    services.forEach(service => {
        observer.observe(service);
    });
});