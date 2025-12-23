// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and feature items
document.querySelectorAll('.channel-card, .plan-card, .feature-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// PLAN SELECTION
// ============================================

const planButtons = document.querySelectorAll('.plan-card .btn');
planButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const planName = this.closest('.plan-card').querySelector('h3').textContent;
        const price = this.closest('.plan-card').querySelector('.amount').textContent;
        
        // Show confirmation message
        showNotification(`Você selecionou o plano ${planName} - R$ ${price}/mês`);
        
        // In a real application, this would redirect to checkout
        console.log(`Selected plan: ${planName} - R$ ${price}/mês`);
    });
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0066ff, #00d4ff);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease forwards;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ANIMATIONS CSS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--dark-bg);
            flex-direction: column;
            gap: 0;
            border-bottom: 1px solid var(--border-color);
            border-top: 1px solid var(--border-color);
        }

        .nav-menu li {
            border-bottom: 1px solid var(--border-color);
        }

        .nav-menu a {
            display: block;
            padding: 15px 20px;
        }
    }
`;

document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ============================================
// FORM VALIDATION (if needed in future)
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Premium IPTV Site Loaded');
    
    // Add active class to current nav item
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}
