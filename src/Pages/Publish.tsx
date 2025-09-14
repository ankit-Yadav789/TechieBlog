import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBold, FaItalic, FaList, FaQuoteLeft, FaCode, FaImage, FaEye, FaSave, FaPaperPlane, FaTag } from "react-icons/fa";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Technology",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "DevOps",
    "Cybersecurity",
    "UI/UX Design",
    "Programming",
    "Tutorials"
  ];

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    setIsPublishing(true);
    try {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
          content,
          category,
          tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish blog. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSaveDraft = () => {
    // Implement save draft functionality
    console.log("Saving draft...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Create New <span className="gradient-text">Article</span>
            </h1>
            <p className="text-gray-600">
              Share your knowledge and insights with the tech community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Editor Section */}
            <div className="lg:col-span-2">
              <div className="card">
                {/* Toolbar */}
                <div className="border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaBold className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaItalic className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaList className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaQuoteLeft className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaCode className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaImage className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowPreview(!showPreview)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          showPreview 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <FaEye className="w-4 h-4" />
                        <span>{showPreview ? 'Edit' : 'Preview'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Title Input */}
                  <div className="mb-6">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter your article title..."
                      className="w-full text-2xl font-bold text-gray-900 placeholder-gray-400 border-none outline-none resize-none"
                    />
                  </div>

                  {/* Content Editor */}
                  {!showPreview ? (
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Start writing your article here... You can use markdown formatting."
                      className="w-full min-h-[400px] text-gray-700 placeholder-gray-400 border-none outline-none resize-none leading-relaxed"
                    />
                  ) : (
                    <div className="prose prose-lg max-w-none">
                      <h1 className="text-2xl font-bold text-gray-900 mb-4">{title || "Untitled"}</h1>
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {content || "No content yet..."}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Publish Settings</h3>
                
                {/* Category */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaTag className="inline w-4 h-4 mr-1" />
                    Tags
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="react, javascript, tutorial (comma separated)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handlePublish}
                    disabled={isPublishing || !title.trim() || !content.trim()}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPublishing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        <span>Publish Article</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleSaveDraft}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <FaSave className="w-4 h-4" />
                    <span>Save Draft</span>
            </button>
                </div>
              </div>

              {/* Writing Tips */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use clear, descriptive titles that explain what your article is about</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Break up long paragraphs with headings and bullet points</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Include code examples and screenshots when relevant</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Add relevant tags to help readers discover your content</span>
                  </li>
                </ul>
              </div>

              {/* Article Stats */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Characters:</span>
                    <span className="text-sm font-medium text-gray-900">{content.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Words:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {content.split(/\s+/).filter(word => word.length > 0).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Reading time:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {Math.ceil(content.split(/\s+/).filter(word => word.length > 0).length / 200)} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
