import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 15 + 's';
          particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
          particlesRef.current.appendChild(particle);
        }
      }
    };

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const heroGrid = document.querySelector('.hero-grid');
      if (heroGrid) {
        heroGrid.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
      }
    };

    createParticles();
    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid"></div>
      <div className="floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      <div className="particles" ref={particlesRef}></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>Hack Club Tinko YSWS</span>
        </div>
        <h1 className="glow-text">Tinko</h1>
        <p className="hero-subtitle">
          Design CAD for a project, get components delivered to you!
        </p>
        <p className="hero-subtitle secondary">
          A simple, club-friendly initiative that combines hardware and CAD design. Build a small device,
          design a custom CAD enclosure, and unlock components and rewards for your club.
        </p>
        <div className="hero-cta">
          <a href="#tutorials" className="btn btn-primary">See How It Works</a>
          <a href="#about" className="btn btn-secondary">Program Overview</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
