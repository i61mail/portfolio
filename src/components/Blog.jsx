import { FaDocker, FaNetworkWired, FaReact, FaArrowRight } from 'react-icons/fa'
import './Blog.css'

const blogPosts = [
  {
    icon: <FaDocker />,
    date: 'Coming Soon',
    title: 'Getting Started with Docker Containers',
    excerpt: 'Learn the fundamentals of containerization and how to deploy your first Docker container for web applications.'
  },
  {
    icon: <FaNetworkWired />,
    date: 'Coming Soon',
    title: 'Building a Web Server from Scratch',
    excerpt: 'A deep dive into socket programming and HTTP protocol implementation using C++ for high-performance networking.'
  },
  {
    icon: <FaReact />,
    date: 'Coming Soon',
    title: 'Real-time Apps with WebSockets',
    excerpt: 'Explore how to build interactive real-time applications using WebSockets with React and Node.js.'
  }
]

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                {post.icon}
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Read More <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
