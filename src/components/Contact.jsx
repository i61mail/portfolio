import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:ismailrk55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hi, 
              feel free to reach out!
            </p>
            <div className="contact-details">
              <a href="mailto:ismailrk55@gmail.com" className="contact-item">
                <FaEnvelope />
                <span>ismailrk55@gmail.com</span>
              </a>
              <a href="tel:+212631039431" className="contact-item">
                <FaPhone />
                <span>+212 6 31 03 94 31</span>
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Casablanca, Morocco</span>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/i61mail" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ismailrkik/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="mailto:ismailrk55@gmail.com" className="social-btn">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                rows="5" 
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
