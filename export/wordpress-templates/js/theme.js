/**
 * CapSurLeMonde Theme JavaScript
 * @package CapSurLeMonde
 * @version 1.0.0
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    function initMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mainNav = document.getElementById('main-nav');
        
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.classList.toggle('active');
                
                // Accessibility
                const isExpanded = mainNav.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
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
    }

    // Sticky Header on Scroll
    function initStickyHeader() {
        const header = document.querySelector('.header-nav');
        if (!header) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                // Scroll Down
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                // Scroll Up
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    }

    // Lazy Load Images
    function initLazyLoad() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove('lazy');
                        imageObserver.unobserve(image);
                    }
                });
            });
            
            document.querySelectorAll('img.lazy').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    // Add loading animation to buttons
    function initButtonLoaders() {
        document.querySelectorAll('.btn-loading').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.add('loading');
            });
        });
    }

    // Star Rating Animation
    function initStarRatings() {
        document.querySelectorAll('.rating').forEach(rating => {
            const stars = rating.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }

    // Back to Top Button
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Retour en haut');
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form Validation
    function initFormValidation() {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                let isValid = true;
                
                // Check required fields
                const requiredFields = form.querySelectorAll('[required]');
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                    } else {
                        field.classList.remove('error');
                    }
                });
                
                // Check email fields
                const emailFields = form.querySelectorAll('input[type="email"]');
                emailFields.forEach(field => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (field.value && !emailRegex.test(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    
                    // Show error message
                    let errorMsg = form.querySelector('.form-error');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'form-error';
                        errorMsg.textContent = 'Veuillez remplir tous les champs requis correctement.';
                        form.insertBefore(errorMsg, form.firstChild);
                    }
                }
            });
        });
    }

    // Image Gallery Lightbox
    function initLightbox() {
        const galleryImages = document.querySelectorAll('.gallery-item img, .wp-block-gallery img');
        
        if (galleryImages.length === 0) return;
        
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <button class="lightbox-close" aria-label="Fermer">&times;</button>
                        <img src="${this.src}" alt="${this.alt}">
                    </div>
                `;
                document.body.appendChild(lightbox);
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => lightbox.classList.add('active'), 10);
                
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', closeLightbox);
                lightbox.addEventListener('click', function(e) {
                    if (e.target === this) closeLightbox();
                });
                
                function closeLightbox() {
                    lightbox.classList.remove('active');
                    setTimeout(() => {
                        lightbox.remove();
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        });
    }

    // Share Buttons
    function initShareButtons() {
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const url = this.href;
                const width = 600;
                const height = 400;
                const left = (screen.width - width) / 2;
                const top = (screen.height - height) / 2;
                
                window.open(
                    url,
                    'share',
                    `width=${width},height=${height},left=${left},top=${top}`
                );
            });
        });
    }

    // Reading Progress Bar
    function initReadingProgress() {
        if (!document.querySelector('.single-post')) return;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Initialize all functions when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initMobileMenu();
        initSmoothScroll();
        initStickyHeader();
        initLazyLoad();
        initButtonLoaders();
        initStarRatings();
        initBackToTop();
        initFormValidation();
        initLightbox();
        initShareButtons();
        initReadingProgress();
        
        console.log('CapSurLeMonde theme loaded');
    }

})();
