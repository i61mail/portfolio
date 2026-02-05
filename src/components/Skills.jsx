import { FaCode, FaGlobe, FaTools, FaUsers } from 'react-icons/fa'
import './Skills.css'

const skillCategories = [
  {
    icon: <FaCode />,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    icon: <FaGlobe />,
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Fastify', 'Tailwind CSS']
  },
  {
    icon: <FaTools />,
    title: 'Tools & Technologies',
    skills: ['Docker', 'Git', 'NGINX', 'MariaDB', 'WebSockets', 'SQLite']
  },
  {
    icon: <FaUsers />,
    title: 'Soft Skills',
    skills: ['Team Collaboration', 'Problem Solving', 'Fast Learner', 'Communication']
  }
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
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
