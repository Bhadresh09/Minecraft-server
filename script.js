// GSAP Animations for Home Page
gsap.from(".hero-section h1", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".hero-section p", { duration: 1.5, y: 100, opacity: 0, ease: "power2" });
gsap.from(".cta-btn", { duration: 1.5, delay: 0.5, opacity: 0, scale: 0.8, ease: "back" });
gsap.from(".featured-item", { duration: 1.5, delay: 0.5, y: 100, opacity: 0, stagger: 0.2, ease: "power2" });
