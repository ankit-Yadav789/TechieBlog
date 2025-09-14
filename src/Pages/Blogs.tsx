import { useBlogs } from "../Hooks"
import { Appbar } from "../components/Appbar"
import { BlogCard, getcurrentDate } from "../components/BlogCard"
import { BlogCardSkeleton } from "../components/Skeleton"
import { FaSearch, FaFilter, FaSort } from "react-icons/fa"
import { useState } from "react"

export const Blogs = () => {
  const {loading, blogs} = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  if(loading){
    return (
      <div className="min-h-screen bg-gray-50">
        <Appbar/>
        
        {/* Header Section Skeleton */}
        <div className="bg-white  border-gray-200 ">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <div className="w-96 h-12 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
              <div className="w-2/3 h-6 bg-gray-200  rounded mx-auto animate-pulse"></div>
            </div>
            
            {/* Search Bar Skeleton */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="w-32 h-12 bg-gray-200  rounded-lg animate-pulse"></div>
                  <div className="w-12 h-12 bg-gray-200  rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.author.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Appbar/>
      
      {/* Header Section */}
      <div className="bg-white  border-b border-gray-200 ">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
              Tech <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Discover insights, tutorials, and innovations from our community of tech enthusiasts.
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300  bg-white  text-gray-900  placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300  bg-white  text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
                
                <button className="px-4 py-3 border border-gray-300  bg-white  text-gray-600  rounded-lg hover:bg-gray-50  transition-colors">
                  <FaFilter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8">
              {searchTerm ? "Try adjusting your search terms" : "Be the first to publish an article!"}
            </p>
            {!searchTerm && (
              <a href="/publish" className="btn-primary">
                Start Writing
              </a>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredBlogs.length} Article{filteredBlogs.length !== 1 ? 's' : ''} Found
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaSort className="w-4 h-4" />
                <span>Sorted by {sortBy}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <BlogCard 
                  key={blog.id}
                  id={blog.id}
                  authorname={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={getcurrentDate()}
                  category="Technology"
                  readTime={Math.ceil(blog.content.length / 500)}
                  likes={Math.floor(Math.random() * 100)}
                  views={Math.floor(Math.random() * 1000)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
