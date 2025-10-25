import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './Header.css';

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="main-header">
        <div className="left">
          <h1>
            <span className="gradient">Portfolio</span>
          </h1>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#highlights">Highlights</a>
          </li>
        </ul>

        <div className="box-icons">
          <a href="http://linkedin.com/in/aniket-singh-dhankar-2b6489273" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Aniketdhankar" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:work.aniketdhankar@gmail.com" title="Send me an email" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>

        <div className="menu-icon" onClick={toggleSidebar}>
          <i className="bx bx-menu"></i>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
        <div className="close-icons" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>

        <ul>
          <li>
            <a href="#about" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#highlights" onClick={closeSidebar}>
              Highlights
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              Contact Me
            </a>
          </li>
        </ul>

        <div className="social-icons">
          <a href="http://linkedin.com/in/aniket-singh-dhankar-2b6489273" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Aniketdhankar" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:work.aniketdhankar@gmail.com" title="Send me an email" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
      </div>
    </>
  );
}
