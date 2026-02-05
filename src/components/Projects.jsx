import { FaDocker, FaServer, FaGamepad, FaGithub } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    icon: <FaDocker />,
    title: 'Dockerized Web Stack',
    description: 'Built a complete infrastructure using Docker to host a WordPress website with proper containerization. Configured NGINX with TLS, WordPress with php-fpm, and MariaDB in separate containers with secure networking and persistent storage.',
    tech: ['Docker', 'NGINX', 'MariaDB', 'WordPress', 'Shell'],
    github: 'https://github.com/i61mail/Dockerized-Web-Stack'
  },
  {
    icon: <FaServer />,
    title: 'Webserver',
    description: 'Created a lightweight web server from scratch using C++98. Handles thousands of simultaneous connections with non-blocking I/O, supports file hosting, uploads, dynamic scripts (PHP/Python via CGI), and implements HTTP methods with custom config parsing.',
    tech: ['C++', 'HTTP', 'CGI', 'Sockets'],
    github: 'https://github.com/i61mail/Webserver'
  },
  {
    icon: <FaGamepad />,
    title: 'Pong Web Platform',
    description: 'Developed a comprehensive web platform featuring user management with secure authentication, real-time dashboard for activity monitoring, customizable user profiles, real-time multiplayer game with WebSocket synchronization, deployed with Docker.',
    tech: ['Next.js', 'React', 'Fastify', 'WebSockets', 'Docker'],
    github: 'https://github.com/i61mail/Pong-Web-Platform'
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
