// ============= NAVIGATION & SCROLLING =============

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============= SLIDESHOW =============

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

// Initialize slideshow
showSlide(currentSlide);

// ============= STATISTICS COUNTER =============

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 50);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 50);
}

// Intersection Observer untuk animasi counter saat section terlihat
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            // Animate stats
            const statStudents = document.getElementById('stat-students');
            const statTeachers = document.getElementById('stat-teachers');
            const statYears = document.getElementById('stat-years');
            const statFacilities = document.getElementById('stat-facilities');
            
            if (statStudents) animateCounter(statStudents, 1500);
            if (statTeachers) animateCounter(statTeachers, 85);
            if (statYears) animateCounter(statYears, 15);
            if (statFacilities) animateCounter(statFacilities, 12);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-container');
if (statsSection) {
    observer.observe(statsSection.closest('section'));
}

// ============= FORM HANDLING =============

function handleFormSubmit(e, formType) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    showNotification('Form berhasil dikirim!', 'success');
    e.target.reset();
    
    console.log(`${formType} submitted:`, data);
}

// ============= NOTIFICATIONS =============

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer; font-size: 1.2rem;">×</button>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ============= ANIMATIONS ON SCROLL =============

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideUp 0.6s ease-in-out forwards`;
            animateOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    animateOnScroll.observe(card);
});

// ============= UTILITY FUNCTIONS =============

function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Jakarta'
    };
    return new Date(date).toLocaleDateString('id-ID', options);
}

function truncateText(text, length = 100) {
    return text.length > length ? text.substring(0, length) + '...' : text;
}

// ============= RESPONSIVE ADJUSTMENTS =============

function handleResize() {
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// ============= INIT =============

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Nusa Widya Mandiri loaded successfully');
});
