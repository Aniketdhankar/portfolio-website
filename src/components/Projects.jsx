import './Projects.css';

export function Projects() {
  const projectsData = [
    {
      title: 'Twitter Sentiment Analysis',
      image: '/images/project1.png',
      points: [
        'Integrated Twitter API v2 with OAuth 2.0 (PKCE) to fetch tweets based on user-defined topics.',
        'Used Hugging Face transformers for sentiment analysis and exported categorized results to CSV.',
      ],
    },
    {
      title: 'Lane Collision Avoidance System',
      image: '/images/project2.png',
      points: [
        'Implemented real-time lane detection and object tracking using OpenCV, Hough Transform, and YOLOv3.',
        'Used Kalman Filter for future object position prediction to aid in proactive collision avoidance.',
      ],
    },
    {
      title: 'AI Life Expectancy Predictor',
      image: '/images/project3.png',
      points: [
        'Developed a machine learning model tailored for the Indian population to predict life expectancy based on lifestyle, biometric, and socio-economic indicators.',
        'Generated a balanced synthetic dataset using rule-based logic and real-world insights to ensure relevance, accuracy, and fairness in model training.',
      ],
    },
  ];

  return (
    <section id="project" className="my-projects">
      <h2 className="skills-title">
        <span className="gradient">Projects</span>
      </h2>
      <div className="underline"></div>

      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-imgbox">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info">
            <h1>{project.title}</h1>
            <ul>
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <button>
              <i className="bx bx-link-external"></i> Website
            </button>
          </div>
        </div>
      ))}

      <p className="project-note">
        <em>More projects will be added soon. GitHub repository links will also be provided for each project.</em>
      </p>
    </section>
  );
}
