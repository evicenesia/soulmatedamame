document.addEventListener('DOMContentLoaded', () => {
    // Fungsi scroll untuk section produk
    const scrollContentProducts = document.getElementById('scrollContentProducts');
    const scrollLeftBtnProducts = document.getElementById('scrollLeftProduct');
    const scrollRightBtnProducts = document.getElementById('scrollRightProduct');
    
    const scrollAmount = 500;

    function scrollProducts(direction) {
        const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
        scrollContentProducts.scrollBy({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }

    scrollLeftBtnProducts.addEventListener('click', () => scrollProducts('left'));
    scrollRightBtnProducts.addEventListener('click', () => scrollProducts('right'));
});

// // Handle scroll
// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;
    
//     if (currentScrollY < 30) {
//         navbar.style.transform = 'translateY(0)';
//     } else {
//         if (currentScrollY > lastScrollY) {
//             navbar.style.transform = 'translateY(-100%)';
//         } else {
//             navbar.style.transform = 'translateY(0)';
//         }
//     }
    
//     lastScrollY = currentScrollY;
// });

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});