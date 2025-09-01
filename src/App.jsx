import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tutorials from './components/Tutorials'
import About from './components/About'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollProgressLine from './components/ScrollProgressLine'
import './App.css'

function App() {
  useEffect(() => {
    const animateScrollTo = (targetY, duration = 350) => {
      const startY = window.scrollY || window.pageYOffset;
      const diff = targetY - startY;
      let startTime = null;

      const easeInOutQuad = (t) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const time = Math.min(1, (timestamp - startTime) / duration);
        const eased = easeInOutQuad(time);
        window.scrollTo(0, Math.round(startY + diff * eased));
        if (time < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          animateScrollTo(offsetTop, 350);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="app">
      <ScrollProgressLine />
      <Navbar />
      <Hero />
      <Tutorials />
  <About />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App
