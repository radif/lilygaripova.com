// Lily Garipova Real Estate Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Add scrolled class to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    let currentSlide = 0;

    function showSlide(index) {
        // Handle wrapping
        if (index >= testimonials.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = testimonials.length - 1;
        } else {
            currentSlide = index;
        }

        // Update testimonials
        testimonials.forEach(function(testimonial, i) {
            testimonial.classList.remove('active');
            if (i === currentSlide) {
                testimonial.classList.add('active');
            }
        });

        // Update dots
        dots.forEach(function(dot, i) {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    // Navigation buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });
    }

    // Dot navigation
    dots.forEach(function(dot, i) {
        dot.addEventListener('click', function() {
            showSlide(i);
        });
    });

    // Auto-advance testimonials every 5 seconds
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler for Netlify
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = this;
            const formData = new FormData(form);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(function(response) {
                if (response.ok) {
                    alert('Thank you for your message! Lily will get back to you soon.');
                    form.reset();
                } else {
                    alert('There was a problem submitting your message. Please try again.');
                }
            })
            .catch(function(error) {
                alert('There was a problem submitting your message. Please try again.');
            });
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .property-card, .about-content, .about-image').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
});
