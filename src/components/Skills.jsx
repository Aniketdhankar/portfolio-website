import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

export function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    {
      icon: 'bxl-react',
      title: 'Front-End',
      skills: ['React.js', 'JavaScript', 'Bootstrap', 'CSS', 'HTML', 'Tailwind CSS', 'Spline'],
    },
    {
      icon: 'bx-server',
      title: 'Back-End',
      skills: [ 'MongoDB', 'Flask', 'API Integration', 'Authentication', 'SQL Databases'],
    },
    {
      icon: 'bx-git-branch',
      title: 'AI & Software Development',
      skills: ['Python', 'Java', 'AI/ML', 'TensorFlow'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        <span className="gradient">My Skills</span>
      </h2>
      <div className="underline"></div>
      <p className="skills-description">
        These are the skills I've developed through experience, enabling me to deliver thoughtful, effective, and scalable solutions
      </p>
      <h3 className="expertise-title">Areas of Expertise</h3>

      <div className="skills-cards">
        {skillsData.map((card, index) => (
          <div key={index} className="card" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
            <i className={`bx ${card.icon} card-icon`}></i>
            <h3>{card.title}</h3>
            <ul>
              {card.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
