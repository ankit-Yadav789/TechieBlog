import { Link } from "react-router-dom";
import { FaHeart, FaBookmark, FaShare, FaClock, FaEye, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface BlogCardProps {
  id: number;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  category?: string;
  readTime?: number;
  likes?: number;
  views?: number;
}

export const BlogCard = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
  category = "Technology",
  readTime = 5,
  likes = 0,
  views = 0,
}: BlogCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement share functionality
  };

  return (
    <Link to={`/blog/${id}`} className="block group">
      <article className="card card-hover h-full">
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-white/80 text-gray-400 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            <FaBookmark className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/80 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <FaShare className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-16">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar size="small" name={authorname} />
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900">{authorname}</div>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <FaClock className="w-3 h-3" />
                {publishedDate}
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h2>

          {/* Content Preview */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {content.length > 150 ? `${content.slice(0, 150)}...` : content}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-1">
                <FaClock className="w-3 h-3" />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye className="w-3 h-3" />
                <span>{views} views</span>
              </div>
            </div>
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <FaHeart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likes + (isLiked ? 1 : 0)}</span>
            </button>
          </div>

          {/* Read More */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
              Read More
            </span>
            <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
};

// function Circle() {
//   return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
// }

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  const colors = [
    "bg-gradient-to-r from-blue-500 to-blue-600",
    "bg-gradient-to-r from-purple-500 to-purple-600",
    "bg-gradient-to-r from-green-500 to-green-600",
    "bg-gradient-to-r from-orange-500 to-orange-600",
    "bg-gradient-to-r from-pink-500 to-pink-600",
    "bg-gradient-to-r from-indigo-500 to-indigo-600",
  ];
  
  const colorIndex = name.charCodeAt(0) % colors.length;
  
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full shadow-md ${
        size === "small" ? "w-8 h-8" : "w-12 h-12"
      } ${colors[colorIndex]}`}
    >
      <span
        className={`${
          size === "small" ? "text-sm" : "text-lg"
        } font-bold text-white`}
      >
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

export const getcurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};