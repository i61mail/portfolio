import { FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">

          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-bento">
          <div className="bento-card bento-main">
            <p>
              I'm a Software Engineer based in <strong>Casablanca, Morocco</strong>,
              i have studied at <strong>1337 Coding School</strong> (2023-2025).
              I specialize in building full-stack web applications, system programming, and containerized infrastructures.
            </p>
            <p>
              My journey in programming has equipped me with a strong foundation in low-level languages
              like C and C++, as well as modern web technologies including React, Next.js, and TypeScript.
              I'm passionate about writing clean, efficient code and solving complex technical challenges.
            </p>
          </div>

          <div className="bento-card bento-stat">
            <span className="bento-stat-num">3+</span>
            <span className="bento-stat-label">Projects Completed</span>
          </div>

          <div className="bento-card bento-stat">
            <span className="bento-stat-num">6+</span>
            <span className="bento-stat-label">Technologies</span>
          </div>

          <div className="bento-card bento-info">
            <div className="bento-info-item">
              <FaMapMarkerAlt />
              <span>Casablanca, Morocco</span>
            </div>
            <div className="bento-info-item">
              <FaGraduationCap />
              <span>1337 Coding School</span>
            </div>
            <div className="bento-info-item">
              <FaLanguage />
              <span>Arabic, French, English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
