import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">IR<span className="footer-dot">.</span></span>
            <p className="footer-tagline">Software Engineer</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/i61mail" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ismailrkik/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:ismailrkik.dev@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ismail Rkik</p>
          <p>Built with <FaHeart className="heart" /> in Morocco</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
