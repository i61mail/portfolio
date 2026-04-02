import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: 'Freelance Full-Stack Web Developer',
    company: 'Gummita L.L.C-FZ',
    title: 'Gummita Tracker — Arabic (RTL) routine tracker',
    period: '2026',
    description: [
      'Delivered an Arabic RTL routine-tracking web app (onboarding + daily tracker) for a client wellness program using Next.js (App Router), React, TypeScript, and Tailwind CSS.',
      'Implemented middleware-based route gating using cookies, and persisted key progress state in localStorage (total days, current day, completed/missed days, and completion status).',
      'Engineered a 24-hour progression flow that advances days on return visits, marks missed days with an X, and locks past/missed days to keep state consistent.',
      'Shipped a polished, mobile-first UI with a persisted light/dark theme toggle and reduced-motion-friendly floating background illustrations.'
    ],
    tech: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS'],
    live: 'https://gummita-tracker.vercel.app'
  }
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-list">
          {experiences.map((item) => (
            <article key={item.title} className="experience-card">
              <div className="experience-top">
                <div className="experience-title">
                  <span className="experience-icon"><FaBriefcase /></span>
                  <div>
                    <h3 className="experience-role">{item.role}</h3>
                    <p className="experience-company">
                      {item.company} — <span className="experience-project">{item.title}</span>
                    </p>
                  </div>
                </div>

                <div className="experience-meta">
                  <span className="experience-period"><FaCalendarAlt /> {item.period}</span>
                  {item.live && (
                    <a
                      className="experience-link"
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <ul className="experience-bullets">
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {item.tech.map((t) => (
                  <span key={t} className="experience-tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
