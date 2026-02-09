import { FaDocker, FaNetworkWired, FaReact, FaArrowRight } from 'react-icons/fa'
import './Blog.css'

const blogPosts = [
  {
    icon: <FaDocker />,
    num: '01',
    date: 'Coming Soon',
    title: 'Getting Started with Docker Containers',
    excerpt: 'Learn the fundamentals of containerization and how to deploy your first Docker container for web applications.'
  },
  {
    icon: <FaNetworkWired />,
    num: '02',
    date: 'Coming Soon',
    title: 'Building a Web Server from Scratch',
    excerpt: 'A deep dive into socket programming and HTTP protocol implementation using C++ for high-performance networking.'
  },
  {
    icon: <FaReact />,
    num: '03',
    date: 'Coming Soon',
    title: 'Real-time Apps with WebSockets',
    excerpt: 'Explore how to build interactive real-time applications using WebSockets with React and Node.js.'
  }
]

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <div className="section-line"></div>
        </div>
      </div>

      <div className="blog-scroll-wrapper">
        <div className="blog-scroll">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-card-top">
                <span className="blog-card-num">{post.num}</span>
                <span className="blog-card-date">{post.date}</span>
              </div>
              <div className="blog-card-icon">{post.icon}</div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-card-link">
                Read More <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
