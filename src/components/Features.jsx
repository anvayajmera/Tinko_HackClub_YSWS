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

  return (
    <section id="features" className="section stats-section">
      <div className="container">
        
      </div>
    </section>
  );
};

export default Features;
