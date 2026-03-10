import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaArrowRight } from 'react-icons/fa'
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
    const mailtoLink = `mailto:ismailrkik.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-text">
              I'm currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-links">
              <a href="mailto:ismailrkik.dev@gmail.com" className="contact-link-item">
                <FaEnvelope />
                <span>ismailrkik.dev@gmail.com</span>
                <FaArrowRight className="contact-arrow" />
              </a>
              <a href="tel:+212649071456" className="contact-link-item">
                <FaPhone />
                <span>+212 6 49 07 14 56</span>
                <FaArrowRight className="contact-arrow" />
              </a>
              <div className="contact-link-item">
                <FaMapMarkerAlt />
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/i61mail" target="_blank" rel="noopener noreferrer" className="contact-social">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ismailrkik/" target="_blank" rel="noopener noreferrer" className="contact-social">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
