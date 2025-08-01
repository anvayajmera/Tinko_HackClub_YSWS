import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Stats.css';

const Stats = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);
  const svgPathRef = useRef(null);

  const stats = [
    { number: 1200, label: 'Active Members' },
    { number: 450, label: 'Projects Launched' },
    { number: 85, label: 'Workshop Sessions' },
    { number: 24, label: 'Partner Schools' }
  ];

  const [statValues, setStatValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const statsPath = svgPathRef.current;
    const statsSection = statsRef.current;

    if (statsPath && statsSection) {
      const scrollStartOffset = 0.25;
      const maxStrokeWidth = 40;
      const minStrokeWidth = 10;
      const animationSpeedFactor = 0.8;

      const pathLength = statsPath.getTotalLength();
      statsPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      statsPath.style.strokeDashoffset = pathLength;

      const handleStatsScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionTop = statsSection.offsetTop;
        const sectionHeight = statsSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollDistance = scrollTop - sectionTop;

        if (scrollDistance >= -viewportHeight && scrollDistance <= sectionHeight * animationSpeedFactor) {
          const progress = (scrollDistance + viewportHeight) / ((sectionHeight + viewportHeight) * animationSpeedFactor);
          const adjustedProgress = (progress - scrollStartOffset) / (1 - scrollStartOffset);
          const finalProgress = Math.max(0, Math.min(1, adjustedProgress));
          
          const drawLength = pathLength * finalProgress;
          statsPath.style.strokeDashoffset = pathLength - drawLength;

          const currentStrokeWidth = maxStrokeWidth - (finalProgress * (maxStrokeWidth - minStrokeWidth));
          statsPath.style.strokeWidth = `${currentStrokeWidth}px`;
        }
      };
      
      window.addEventListener('scroll', handleStatsScroll);
      handleStatsScroll();

      return () => window.removeEventListener('scroll', handleStatsScroll);
    }
  }, []);

  const animateCounters = () => {
    if (countersStarted) return;
    
    setCountersStarted(true);
    const duration = 2000;
    
    stats.forEach((stat, index) => {
      const increment = stat.number / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < stat.number) {
          setStatValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });
          requestAnimationFrame(updateCounter);
        } else {
          setStatValues(prev => {
            const newValues = [...prev];
            newValues[index] = stat.number;
            return newValues;
          });
        }
      };

      updateCounter();
    });
  };

  const [counterRef, counterVisible] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (counterVisible && !countersStarted) {
      animateCounters();
    }
  }, [counterVisible, countersStarted]);

  return (
    <section id="stats" className="section stats-section" ref={statsRef}>
      {/* Animated Line SVG */}
      <svg id="stats-line-svg" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#0066ff', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#6366f1', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#ef4444', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path 
          ref={svgPathRef}
          id="stats-scroll-line" 
          d="M 100 300 Q 300 150 500 250 T 900 200 Q 1000 180 1100 220"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="url(#lineGradient)"
        />
      </svg>
      
      <div className="container stats-container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <div className="section-badge holographic">Our Impact</div>
          <h2 className="section-title">Growing Global Community</h2>
          <p className="section-description">
            Numbers that reflect our commitment to nurturing the next generation of tech leaders.
          </p>
        </div>
        <div className="stats-grid" ref={counterRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in">
              <span className="stat-number">{statValues[index]}</span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
