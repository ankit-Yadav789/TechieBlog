import poster from '../assets/poster.png';
import HomeNav from '../components/HomeNav';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaLightbulb, FaUsers, FaArrowRight, FaStar, FaHeart, FaBookOpen } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      <HomeNav />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <FaRocket className="mr-2" />
                Welcome to the Future of Tech Blogging
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Share Your
                <span className="gradient-text block">Tech Knowledge</span>
                <span className="text-gray-600 text-2xl md:text-3xl lg:text-4xl font-light">with the World</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Join thousands of developers, engineers, and tech enthusiasts sharing their insights, 
                tutorials, and innovations on the most trusted tech blogging platform.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/signup" className="btn-primary inline-flex items-center justify-center group">
                  Start Writing
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/blogs" className="btn-secondary inline-flex items-center justify-center">
                  <FaBookOpen className="mr-2" />
                  Explore Posts
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Active Writers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">50K+</div>
                  <div className="text-sm text-gray-600">Published Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">1M+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                <div className="relative">
              <img
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                src={poster}
                    alt="Tech Innovation"
                  />
                  {/* Floating Elements */}
                  <div className="absolute top-10 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                    <FaCode className="text-blue-600 text-xl" />
                  </div>
                  <div className="absolute bottom-10 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce animation-delay-1000">
                    <FaLightbulb className="text-yellow-500 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">TechieBlog</span>?
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best tools and platform for tech writers to share their knowledge and grow their audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: "Rich Text Editor",
                description: "Write with our advanced markdown editor with syntax highlighting and live preview.",
                color: "blue"
              },
              {
                icon: FaUsers,
                title: "Active Community",
                description: "Connect with thousands of developers and tech enthusiasts worldwide.",
                color: "green"
              },
              {
                icon: FaRocket,
                title: "Easy Publishing",
                description: "Publish your posts instantly with our streamlined publishing workflow.",
                color: "purple"
              },
              {
                icon: FaStar,
                title: "Quality Content",
                description: "Curated content that focuses on quality and technical accuracy.",
                color: "yellow"
              },
              {
                icon: FaLightbulb,
                title: "Innovation Focus",
                description: "Stay ahead with the latest tech trends and innovative solutions.",
                color: "orange"
              },
              {
                icon: FaHeart,
                title: "Reader Engagement",
                description: "Build a loyal following with our engagement tools and analytics.",
                color: "pink"
              }
            ].map((feature, index) => (
              <div key={index} className="card card-hover p-8 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-100 text-${feature.color}-600 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="gradient-text">Posts</span>
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most popular and trending tech articles from our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Web Development",
                excerpt: "Exploring the latest trends in web development including AI integration, WebAssembly, and modern frameworks.",
                author: "Sarah Johnson",
                readTime: "8 min read",
                likes: 234,
                category: "Web Development"
              },
              {
                title: "Machine Learning in Production",
                excerpt: "A comprehensive guide to deploying machine learning models in production environments with real-world examples.",
                author: "Alex Chen",
                readTime: "12 min read",
                likes: 189,
                category: "Machine Learning"
              },
              {
                title: "Building Scalable APIs",
                excerpt: "Best practices for designing and implementing scalable REST APIs that can handle millions of requests.",
                author: "Mike Rodriguez",
                readTime: "10 min read",
                likes: 156,
                category: "Backend Development"
              }
            ].map((post, index) => (
              <div key={index} className="card card-hover group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaHeart className="mr-1" />
                      {post.likes}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {post.author[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.readTime}</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blogs" className="btn-primary inline-flex items-center">
              View All Posts
              <FaArrowRight className="ml-2" />
            </Link>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="gradient-text">Community</span> Says
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied writers and readers who trust TechieBlog for their tech content needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Developer at Google",
                content: "TechieBlog has revolutionized how I share my technical knowledge. The platform is intuitive and the community is incredibly supportive.",
                avatar: "SJ"
              },
              {
                name: "Alex Chen",
                role: "Tech Lead at Microsoft",
                content: "The quality of content here is outstanding. I've learned so much from the community and built meaningful connections.",
                avatar: "AC"
              },
              {
                name: "Maria Rodriguez",
                role: "Full Stack Developer",
                content: "As a new developer, TechieBlog has been my go-to resource for learning and sharing. The platform makes it so easy to contribute.",
                avatar: "MR"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {testimonial.avatar}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated with the Latest
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Get the latest tech articles, tutorials, and industry insights delivered straight to your inbox.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ developers who trust our newsletter
            </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Share Your <span className="gradient-text">Tech Story</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our community of tech enthusiasts and start sharing your knowledge with the world today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary text-lg px-8 py-4">
              Start Writing Today
            </Link>
            <Link to="/blogs" className="btn-secondary text-lg px-8 py-4">
              Explore Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">TechieBlog</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                The premier platform for tech enthusiasts to share knowledge, connect with peers, and stay updated with the latest in technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaCode />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaUsers />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaHeart />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Write</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Read</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} TechieBlog. All rights reserved. Built with ❤️ by Ankit Yadav.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;