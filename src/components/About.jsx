import { FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import './About.css'

const stats = [
  { number: '3+', label: 'Projects Completed' },
  { number: '2+', label: 'Years of Experience' },
  { number: '6+', label: 'Technologies' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer based in <strong>Casablanca, Morocco</strong>, 
              currently pursuing Software Development at <strong>1337 Coding School</strong> (2023-2025). 
              I specialize in building full-stack web applications, system programming, and containerized infrastructures.
            </p>
            <p>
              My journey in programming has equipped me with a strong foundation in low-level languages 
              like C and C++, as well as modern web technologies including React, Next.js, and TypeScript. 
              I'm passionate about writing clean, efficient code and solving complex technical challenges.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Casablanca, Morocco</span>
              </div>
              <div className="info-item">
                <FaGraduationCap />
                <span>1337 Coding School</span>
              </div>
              <div className="info-item">
                <FaLanguage />
                <span>Arabic, French, English</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
