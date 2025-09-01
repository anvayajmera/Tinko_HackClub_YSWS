import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const Stats = () => {
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
    
    if (statsPath) {
      const pathLength = statsPath.getTotalLength();
      statsPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      statsPath.style.strokeDashoffset = pathLength;

      const handleScroll = () => {
        const rect = statsRef.current?.getBoundingClientRect();
        if (!rect) return;

        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));

        const drawLength = pathLength * progress;
        statsPath.style.strokeDashoffset = pathLength - drawLength;

        const strokeWidth = 100 - (progress * 20);
        statsPath.style.strokeWidth = `${Math.max(60, strokeWidth)}px`;

        statsPath.style.stroke = 'url(#lineGradient)';
        statsPath.style.opacity = '1';
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
            
            
            stats.forEach((stat, index) => {
              let startTime = null;
              const duration = 2000;
              
              const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                const currentValue = Math.floor(stat.number * progress);
                
                setStatValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = currentValue;
                  return newValues;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  return (
    <section id="stats" className="stats-section" ref={statsRef}>
      
      <svg className="stats-line-svg" viewBox="0 0 1200 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#0066ff', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#6366f1', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#ef4444', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path 
          ref={svgPathRef}
          d="M 0 500 L 1200 500"
          strokeWidth="100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="url(#lineGradient)"
          opacity="1"
        />
      </svg>
      
      <div className="stats-container">
        <div className="stats-header">
          <div className="section-badge">Our Impact</div>
          <h2 className="section-title">Growing Global Community</h2>
          <p className="section-description">
            Numbers that reflect our commitment to nurturing the next generation of tech leaders.
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{statValues[index]}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
