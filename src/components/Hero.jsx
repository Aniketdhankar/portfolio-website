import { useEffect } from 'react';
import './Hero.css';
import { SplineViewer } from './SplineViewer';

export function Hero() {
  useEffect(() => {
    // Scroll-down animation
    const handleScroll = () => {
      const scrollDown = document.querySelector('.scroll-down');
      if (scrollDown) {
        scrollDown.style.opacity = window.scrollY > 50 ? '0' : '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-info">
        <div className="hero-info-title">
          <i className="bx bxs-planet" style={{ marginRight: '8px' }}></i>Welcome to my Portfolio!
        </div>

        <h1>
          Hi, I'm <span className="gradient">Aniket Singh</span>
          <br />
          <span className="gradient">Dhankar</span>
        </h1>

        <p>
          I'm an undergraduate student pursuing a BE in Computer Science & Engineering, driven by a strong passion for technology,
          innovation, and solving real-world problems through code.
        </p>

        <a href="#contact">
          <button>
            <i className="bx bx-send"></i> Contact Me
          </button>
        </a>
      </div>

      {/* Spline 3D Model */}
      <SplineViewer className="robot-3d" url="https://prod.spline.design/1dcxapFMBHoCIfHs/scene.splinecode" />

      {/* Scroll Down Indicator */}
      <div className="scroll-down"></div>
    </section>
  );
}
