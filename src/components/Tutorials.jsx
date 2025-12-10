import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Tutorials.css';

const Tutorials = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const particleSystemRef = useRef(null);

  useEffect(() => {
    const createParticleSystem = () => {
      if (particleSystemRef.current) {
        for (let i = 0; i < 40; i++) {
          const particle = document.createElement('div');
          particle.className = 'tutorial-particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 30 + 's';
          particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
          particleSystemRef.current.appendChild(particle);
        }
      }
    };

    createParticleSystem();
  }, []);

  const steps = [
    {
      title: 'Build a physical project',
      points: [
        'Any level is acceptable, from a simple sensor box to advanced robots.',
        'Combine hardware, basic circuitry, and hands-on assembly.',
        'Keep the build small and focused so it fits an enclosure.',
      ],
    },
    {
      title: 'Design a custom CAD enclosure',
      points: [
        'Use an approved CAD tool (Autodesk or Onshape) and follow the 3D-printer guidelines.',
        'Make sure the enclosure fits your hardware and is printer ready.',
        'Check wall thickness, tolerances, and fastening before exporting.',
        'Document CAD choices so reviewers can reproduce prints.',
      ],
    },
    {
      title: 'Submit, get reviewed, and earn tokens',
      points: [
        'On GitHub include pictures, a video demo, the CAD model, hourly logs, and a summary.',
        'Submit via Hack Club Forms on the Tinko site with your club details.',
        'After approval, token credits go to the club bank to redeem parts or a 3D printer.',
      ],
    },
  ];

  return (
    <section id="tutorials" className="tutorials-section-enhanced">
      <div className="tutorials-background-enhanced">
        <div className="particle-system" ref={particleSystemRef}></div>
        <div className="tutorials-orbs">
          <div className="tutorial-orb tutorial-orb-1"></div>
          <div className="tutorial-orb tutorial-orb-2"></div>
          <div className="tutorial-orb tutorial-orb-3"></div>
          <div className="tutorial-orb tutorial-orb-4"></div>
        </div>
        <div className="tutorials-grid-enhanced"></div>
        <div className="floating-elements-enhanced">
          <div className="floating-shape floating-code"></div>
          <div className="floating-shape floating-chip"></div>
          <div className="floating-shape floating-circuit"></div>
          <div className="floating-shape floating-brain"></div>
          <div className="floating-shape floating-rocket"></div>
        </div>
      </div>

      <div className="container">
        <div
          ref={headerRef}
          className={`section-header-enhanced fade-in reveal-left swoop ${headerVisible ? 'visible' : ''}`}
        >
          <div className="section-badge-enhanced">
            <span className="badge-icon">How it works</span>
          </div>
          <h2 className="section-title-enhanced">Three steps to Tinko</h2>
          <p className="section-description-enhanced">
            A simple, three-step flow that takes your club from idea to a reviewed, 3D-printer-ready project
            with components delivered to you.
          </p>
        </div>

        <div className="paths-container-enhanced timeline">
          {steps.map((step, index) => (
            <div key={step.title} className={`path-card-enhanced timeline-card stagger-${index + 1}`}>
              <div className="card-glow-enhanced"></div>
              <div className="card-header-enhanced">
                <div className="path-number">{index + 1}</div>
                <div className="path-info">
                  <h3 className="path-title">{step.title}</h3>
                </div>
              </div>

              <div className="card-content-enhanced">
                <ul className="step-points">
                  {step.points.map((point) => (
                    <li key={point}>
                      <span className="glow-dot" aria-hidden="true"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
