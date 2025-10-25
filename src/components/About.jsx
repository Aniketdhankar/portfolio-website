import './About.css';

export function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        <span className="gradient">About Me</span>
      </h2>
      <div className="underline"></div>
      <p className="intro-text">
        Hi, I'm <strong>Aniket Singh Dhankar</strong>, a third-year BTech student at Sri Krishna Institute of Technology, Bengaluru. 
        I'm an active member of the <strong>OSCode Community</strong>, where I’ve organized several events and workshops aimed at helping students 
        explore open-source development and emerging technologies. With a passion for technology, creativity, and problem-solving, 
        I focus on building modern, accessible, and impactful web applications.
      </p>

      <div className="about-content">
        <div className="left-box">
          <h3>My Journey</h3>
          <p>
            Over the years, I’ve built proficiency with a wide range of programming languages and tools including 
            <strong> React, NodeJS, MongoDB, C, AI/ML, Java, JavaScript, Python, MySQL, HTML, CSS,</strong> and <strong>Bootstrap</strong>.
          </p>
          <p>
            My journey in tech has been shaped by hands-on learning, collaborative projects, and continuous exploration of new technologies. 
            Being part of the OSCode Community has given me the opportunity to mentor peers, lead initiatives, and stay at the forefront of innovation. 
          </p>
          <p>
            I am always eager to learn and grow, and I look forward to contributing to innovative projects while collaborating with 
            like-minded professionals. Let's connect and explore how we can work together to create impactful solutions!
          </p>

          <div className="button-group">
            <a href="#contact" className="contact-btn">
              <i className="bx bx-envelope"></i> Contact Me
            </a>
          </div>
        </div>

        <div className="right-section">
          <div className="right-box">
            <h3>Personal Details</h3>
            <div className="personal-details">
              <p>
                <strong>Name:</strong> Aniket Singh Dhankar
              </p>
              <p>
                <strong>Email:</strong> work.aniketdhankar@gmail.com
              </p>
              <p>
                <strong>Education:</strong> B.E, Sri Krishna Institute of Technology
              </p>
              <p>
                <strong>Location:</strong> Bengaluru, India
              </p>
              <p>
                <strong>Languages:</strong> English, Hindi
              </p>
              <p>
                <strong>Interests:</strong> Full-Stack Development, Artificial Intelligence, Data Science
              </p>
            </div>
          </div>

          <div className="connect-box">
            <h3>Connect With Me</h3>
            <div className="connect-icons">
              <a href="https://github.com/Aniketdhankar" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://linkedin.com/in/aniket-singh-dhankar-2b6489273" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:work.aniketdhankar@gmail.com" title="Send me an email">
                <i className="bx bxl-gmail"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
