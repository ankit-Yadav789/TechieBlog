import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
        {/* Author and Date */}
        <div className="flex items-center gap-4 p-4 bg-blue-50">
          <Avatar size="small" name={authorname} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">{authorname}</span>
            <span className="text-xs text-gray-500">{publishedDate}</span>
          </div>
        </div>

        {/* Title and Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">
            {content.length > 100 ? `${content.slice(0, 100)}...` : content}
          </p>
          <div className="text-sm text-gray-500">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
        </div>

        {/* Read More Button */}
        <div className="p-4 bg-blue-100 text-center">
          <span className="text-blue-500 font-medium hover:underline">
            Read More
          </span>
        </div>
      </div>
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
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-8 h-8" : "w-12 h-12"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-sm" : "text-lg"
        } font-semibold text-white`}
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