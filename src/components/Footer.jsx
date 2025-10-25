import './Footer.css';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Left Column - Brand & Description */}
        <div className="footer-brand">
          <h2 className="brand-name">
            <span className="gradient">Aniket Singh Dhankar</span>
          </h2>
          <p className="brand-tagline">Crafting Digital Experiences with Code & Creativity</p>
          <p className="brand-description">
            Full-Stack Developer | AI/ML Enthusiast
          </p>
          
          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/Aniketdhankar" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://linkedin.com/in/aniket-singh-dhankar-2b6489273" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:work.aniketdhankar@gmail.com" title="Email">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="#about"><i className="bx bx-chevron-right"></i> About Me</a></li>
            <li><a href="#skills"><i className="bx bx-chevron-right"></i> Skills</a></li>
            <li><a href="#project"><i className="bx bx-chevron-right"></i> Projects</a></li>
            <li><a href="#highlights"><i className="bx bx-chevron-right"></i> Highlights</a></li>
            <li><a href="#contact"><i className="bx bx-chevron-right"></i> Contact</a></li>
          </ul>
        </div>

        {/* Right Column - Contact & Location */}
        <div className="footer-contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <ul className="contact-list">
            <li>
              <i className="bx bx-envelope"></i>
              <div>
                <span className="label">Email</span>
                <a href="mailto:work.aniketdhankar@gmail.com">work.aniketdhankar@gmail.com</a>
              </div>
            </li>
            <li>
              <i className="bx bx-map"></i>
              <div>
                <span className="label">Location</span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </li>
            <li>
              <i className="bx bx-briefcase"></i>
              <div>
                <span className="label">Status</span>
                <span className="status-badge">Available for Opportunities</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© 2025 Aniket Singh Dhankar. All Rights Reserved.</p>
          <p className="made-with">
            Made with <i className="bx bxs-heart"></i> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
