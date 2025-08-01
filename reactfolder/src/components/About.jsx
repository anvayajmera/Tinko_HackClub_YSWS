import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './About.css';

const About = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [card1Ref, card1Visible] = useIntersectionObserver();
  const [card2Ref, card2Visible] = useIntersectionObserver();
  const [card3Ref, card3Visible] = useIntersectionObserver();

  const features = [
    {
      id: '01',
      title: 'Innovation-First Mindset',
      description: 'We believe in thinking differently, challenging conventions, and building solutions that matter. Every project starts with a question: how can we make this better?'
    },
    {
      id: '02',
      title: 'Collaborative Excellence',
      description: 'Great ideas emerge from great teams. Our community thrives on collaboration, peer learning, and the exchange of diverse perspectives.'
    },
    {
      id: '03',
      title: 'Real-World Impact',
      description: 'We don\'t just code for fun—we code for purpose. Every project aims to solve real problems and create meaningful change in our communities.'
    }
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const cardVisibility = [card1Visible, card2Visible, card3Visible];

  return (
    <section id="about" className="section">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <div className="section-badge">Our Mission</div>
          <h2 className="section-title">Empowering Tomorrow's Innovators</h2>
          <p className="section-description">
            We're building a community where young minds converge to create, learn, 
            and push the boundaries of what's possible with technology.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={cardRefs[index]}
              className={`feature-card fade-in stagger-${index + 1} ${cardVisibility[index] ? 'visible' : ''}`}
            >
              <div className="feature-icon">{feature.id}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
