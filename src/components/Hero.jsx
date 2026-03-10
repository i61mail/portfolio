import { useEffect, useState } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className={`hero-inner ${visible ? 'visible' : ''}`}>
        <div className="hero-top">
          <span className="hero-label">Software Engineer</span>
          <div className="hero-socials">
            <a href="https://github.com/i61mail" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaGithub />
            </a>
            <a href="mailto:ismailrkik.dev@gmail.com" className="hero-social-link">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/ismailrkik/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-name-block">
          <h1 className="hero-name">
            <span className="hero-name-line">Ismail</span>
            <span className="hero-name-line hero-name-outline">Rkik</span>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-description">
            Passionate about building robust web applications and infrastructure solutions.
            Focusing on creating efficient, scalable, and user-centric software.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              <FaDownload /> Resume
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <FaArrowDown />
          <span>Scroll</span>
        </div>
      </div>

      <div className="hero-bg-text" aria-hidden="true">2026</div>
    </section>
  )
}

export default Hero
