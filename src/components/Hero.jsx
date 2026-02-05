import { useEffect, useState } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin, FaDownload, FaUser } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">Ismail Rkik</h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            Passionate about building robust web applications and infrastructure solutions. Focusing on creating efficient, 
            scalable, and user-centric software.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/i61mail" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="mailto:ismailrk55@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/ismailrkik/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-blob"></div>
            <div className="hero-avatar">
              <FaUser />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
