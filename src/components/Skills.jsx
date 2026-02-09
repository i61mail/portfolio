import { FaCode, FaGlobe, FaTools, FaUsers } from 'react-icons/fa'
import './Skills.css'

const skillCategories = [
  {
    icon: <FaCode />,
    num: '01',
    title: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    icon: <FaGlobe />,
    num: '02',
    title: 'Web Dev',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Fastify', 'Tailwind CSS']
  },
  {
    icon: <FaTools />,
    num: '03',
    title: 'Tools',
    skills: ['Docker', 'Git', 'NGINX', 'MariaDB', 'WebSockets', 'SQLite']
  },
  {
    icon: <FaUsers />,
    num: '04',
    title: 'Soft Skills',
    skills: ['Team Collaboration', 'Problem Solving', 'Fast Learner', 'Communication']
  }
]

const allSkills = skillCategories.flatMap(c => c.skills)

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="skills-marquee">
        <div className="marquee-track">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className="marquee-item">
              {skill} <span className="marquee-sep">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills-list">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-row">
              <div className="skill-row-left">
                <span className="skill-row-icon">{category.icon}</span>
                <h3 className="skill-row-title">{category.title}</h3>
              </div>
              <div className="skill-row-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
