import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './CTA.css';

const CTA = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  const handleRippleClick = (e) => {
    const ripple = document.createElement('div');
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'rippleEffect 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section id="contact" className="section cta-section">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Ready to Join the Revolution?</h2>
          <p className="section-description">
            Take the first step towards becoming a part of something extraordinary. 
            Your journey starts here.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a 
              href="#" 
              className="btn btn-primary ripple"
              onClick={handleRippleClick}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
