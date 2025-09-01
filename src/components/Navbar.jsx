import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    const handleScroll = () => {
      updateNavbar();
      updateActiveNavLink();
    };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#tutorials', label: 'Begin' },
    { href: '#about', label: 'Mission' },
    { href: '#stats', label: 'Stats' },
    { href: '#contact', label: 'Submit' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">YSWS</div>
        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href} 
                className={`nav-link ${activeLink === href.substring(1) ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
