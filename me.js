// Typing effect
const jobTitles = ["Developer", "Designer", "Problem Solver"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;

function typeEffect() {
    const currentTitle = jobTitles[titleIndex];
    const typedTextElement = document.getElementById('typed-text');

    if (isDeleting) {
        typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }
}

// Start the typing effect
typeEffect();

// Scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skill progress animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Intersection Observer for skill animation
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Form submission (you'll need to implement server-side handling)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});
// Certification slider
const certSlides = document.querySelectorAll('.certification-slide');
const prevCertBtn = document.getElementById('prevCert');
const nextCertBtn = document.getElementById('nextCert');
let currentCertIndex = 0;

function showCertSlide(index) {
    certSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextCert() {
    currentCertIndex = (currentCertIndex + 1) % certSlides.length;
    showCertSlide(currentCertIndex);
}

function prevCert() {
    currentCertIndex = (currentCertIndex - 1 + certSlides.length) % certSlides.length;
    showCertSlide(currentCertIndex);
}

nextCertBtn.addEventListener('click', nextCert);
prevCertBtn.addEventListener('click', prevCert);

// Initialize the first certification slide
showCertSlide(currentCertIndex);
// The effects on image github
document.querySelector('#myimg1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    const img = event.currentTarget;
    const link = img.closest('a');
    const rect = img.getBoundingClientRect();
    const sparklesContainer = document.createElement('div');
    sparklesContainer.style.position = 'absolute';
    sparklesContainer.style.top = `${rect.top + window.scrollY}px`;
    sparklesContainer.style.left = `${rect.left + window.scrollX}px`;
    sparklesContainer.style.width = `${rect.width}px`;
    sparklesContainer.style.height = `${rect.height}px`;
    document.body.appendChild(sparklesContainer);

    // Create sparkles
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        sparkle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        sparklesContainer.appendChild(sparkle);
        sparkle.addEventListener('animationend', () => sparkle.remove());
    }

    // Delay navigation to allow sparkles to be visible
    setTimeout(() => {
        window.open(link.href, link.target);
        sparklesContainer.remove();
    }, 500); // Adjust the delay (500ms) as needed
});