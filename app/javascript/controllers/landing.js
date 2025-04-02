// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('block');
            
            if (isOpen) {
                mobileMenu.classList.remove('block');
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('block');
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }

    // Add parallax effect to background gradients
    const gradients = document.querySelectorAll('.bg-purple-500\/20, .bg-blue-500\/20, .bg-teal-500\/20');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gradients.forEach((gradient, index) => {
            const speed = (index + 1) * 10;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            gradient.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Add 3D hover effect to glass cards
    const glassCards = document.querySelectorAll('.glass');

    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Skip the header and footer
            if (card.tagName === 'HEADER' || card.tagName === 'FOOTER') return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.boxShadow = `
                0 5px 15px rgba(0, 0, 0, 0.1),
                ${(x - centerX) / 10}px ${(y - centerY) / 10}px 20px rgba(0, 0, 0, 0.1)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            // Skip the header and footer
            if (card.tagName === 'HEADER' || card.tagName === 'FOOTER') return;
            
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real implementation, this would redirect to search results
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                searchButton.click();
            }
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.glass, h1, h2, .container > div');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('opacity-100');
                element.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    };

    // Add initial classes for animation
    const animatedElements = document.querySelectorAll('.glass:not(header):not(footer), h1, h2, .container > div');
    animatedElements.forEach(element => {
        element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Run once on page load
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});