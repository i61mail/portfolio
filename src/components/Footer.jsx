import { FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Ismail Rkik. All rights reserved.</p>
          <p>Built with <FaHeart className="heart" /> in Morocco</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
