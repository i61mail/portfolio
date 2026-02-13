import { FaDocker, FaServer, FaGamepad, FaChartBar, FaGithub, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    icon: <FaDocker />,
    title: 'Dockerized Web Stack',
    shortTitle: 'Docker',
    letter: 'D',
    description: 'Built a complete infrastructure using Docker to host a WordPress website with proper containerization. Configured NGINX with TLS, WordPress with php-fpm, and MariaDB in separate containers with secure networking and persistent storage.',
    tech: ['Docker', 'NGINX', 'MariaDB', 'WordPress', 'Shell'],
    github: 'https://github.com/i61mail/Dockerized-Web-Stack'
  },
  {
    icon: <FaServer />,
    title: 'Webserver',
    shortTitle: 'Server',
    letter: 'W',
    description: 'Created a lightweight web server from scratch using C++98. Handles thousands of simultaneous connections with non-blocking I/O, supports file hosting, uploads, dynamic scripts (PHP/Python via CGI), and implements HTTP methods with custom config parsing.',
    tech: ['C++', 'HTTP', 'CGI', 'Sockets'],
    github: 'https://github.com/i61mail/Webserver'
  },
  {
    icon: <FaGamepad />,
    title: 'Pong Web Platform',
    shortTitle: 'Pong',
    letter: 'P',
    description: 'Developed a comprehensive web platform featuring user management with secure authentication, real-time dashboard for activity monitoring, customizable user profiles, real-time multiplayer game with WebSocket synchronization, deployed with Docker.',
    tech: ['Next.js', 'React', 'Fastify', 'WebSockets', 'Docker'],
    github: 'https://github.com/i61mail/Pong-Web-Platform'
  },
  {
    icon: <FaChartBar />,
    title: 'Grafino',
    shortTitle: 'Grafino',
    letter: 'G',
    description: 'Built a full-stack real-time log monitoring dashboard inspired by Grafana. Features a RESTful API with Express.js for log creation, filtering by level and service, text search, and MongoDB aggregation for live statistics. Includes interactive charts, advanced filtering, pagination, auto-refresh, and dark/light theme toggle.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/i61mail/Grafino'
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
      </div>

      <div className="projects-panels">
        {projects.map((project, index) => (
          <div key={index} className="project-strip">
            {/* Collapsed state */}
            <div className="strip-collapsed">
              <span className="strip-bg-letter">{project.letter}</span>
              <div className="strip-label">
                <h3 className="strip-title-collapsed">{project.title}</h3>
                <span className="strip-label-line"></span>
              </div>
            </div>

            {/* Expanded state */}
            <div className="strip-expanded">
              <div className="strip-top">
                <span className="strip-exp-icon">{project.icon}</span>
                <h3 className="strip-exp-title">{project.title}</h3>
              </div>
              <p className="strip-desc">{project.description}</p>
              <div className="strip-bottom">
                <div className="strip-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="strip-link"
                >
                  <FaGithub /> View Code <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
