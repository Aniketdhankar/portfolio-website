import { useEffect } from 'react';
import { Header, Hero, About, Skills, Projects, Highlights, Contact, Footer } from './components';
import './App.css';

function App() {
  useEffect(() => {
    // Load Spline Viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Background Video */}
      <video className="back-vid back-vid-1" autoPlay loop muted playsInline preload="auto">
        <source src="/videos/galaxy.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="video-overlay"></div>

      <div className="container">
        {/* Header */}
        <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Highlights Section */}
      <Highlights />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}

export default App;
