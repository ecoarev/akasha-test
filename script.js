const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

window.onload = function() {
    const images = [
        'images/bg-section-3.webp',
        'images/bg-section-3-2.webp',
        'images/bg-section-3-3.webp',
        'images/bg-section-3-4.webp',
        'images/bg-section-3-5.webp',
        'images/bg-section-3-6.webp',
        'images/bg-section-3-7.webp',
        'images/bg-section-3-8.webp'
    ];
    
    // Պատահական ընտրություն նկարների ցուցակից
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Պատահական ընտրված նկարը ֆոն է դառնում
    document.getElementById('home').style.backgroundImage = `url(${randomImage})`;
};
function openModal() {
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
}
function register() {
    alert("Գրանցման գործընթացը սկսված է!");
}
