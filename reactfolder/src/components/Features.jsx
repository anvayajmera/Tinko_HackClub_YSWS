import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Features.css';

const Features = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [card1Ref, card1Visible] = useIntersectionObserver();
  const [card2Ref, card2Visible] = useIntersectionObserver();
  const [card3Ref, card3Visible] = useIntersectionObserver();

  const features = [
    {
      icon: 'ML',
      title: 'Advanced Workshops',
      description: 'Deep-dive into cutting-edge technologies like AI, machine learning, blockchain, and more through hands-on workshops led by industry experts.'
    },
    {
      icon: 'NET',
      title: 'Global Network',
      description: 'Connect with like-minded innovators from around the world, building relationships that last beyond your time in the program.'
    },
    {
      icon: 'PRO',
      title: 'Project Incubation',
      description: 'Turn your ideas into reality with our project incubation program, complete with mentorship, resources, and potential funding opportunities.'
    }
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const cardVisibility = [card1Visible, card2Visible, card3Visible];

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
    <section id="features" className="section stats-section">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <div className="section-badge">What We Offer</div>
          <h2 className="section-title">Comprehensive Learning Experience</h2>
          <p className="section-description">
            From mentorship to hands-on projects, we provide everything you need to excel 
            in the world of software development.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.icon}
              ref={cardRefs[index]}
              className={`feature-card fade-in stagger-${index + 1} ripple ${cardVisibility[index] ? 'visible' : ''}`}
              onClick={handleRippleClick}
            >
              <div className="feature-icon neon-glow">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
