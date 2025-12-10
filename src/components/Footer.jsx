import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>tinko</h3>
              <p>Design CAD for a project inside, get components delivered to your club.</p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Program</h4>
                <a href="#tutorials">How it works</a>
                <a href="#about">Overview</a>
                <a href="#stats">Submission checklist</a>
              </div>
              
              <div className="link-group">
                <h4>Community</h4>
                <a href="https://discord.gg/hackclub">Discord</a>
                <a href="https://github.com/hackclub">GitHub</a>
                <a href="https://hackclub.com">Hack Club</a>
              </div>
              
              <div className="link-group">
                <h4>Support</h4>
                <a href="#contact">Start a build</a>
                <a href="#tutorials">Step-by-step</a>
                <a href="#about">Share with clubs</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-info">
              <p>&copy; 2025 Hack Club Tinko. Built with ❤️ by young makers.</p>
              <div className="footer-badges">
                <span className="badge">CAD-first</span>
                <span className="badge">Club-friendly</span>
                <span className="badge">Hardware included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
