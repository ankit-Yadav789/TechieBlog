import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full bg-gradient-to-r from-blue-100 to-slate-100 min-h-screen">
        <div className="max-w-screen-lg w-full pt-10 px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Publish Your Blog
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Title Input */}
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
              placeholder="Enter Blog Title"
            />

            {/* Text Editor */}
            <TextEditor
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            {/* Publish Button */}
            <button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${response.data.id}`);
              }}
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg shadow-md transition"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-4">
      <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-50">
        <div className="flex items-center justify-between border-b px-4 py-2 bg-gray-100">
          <h2 className="text-sm font-medium text-gray-700">Write Your Content</h2>
        </div>
        <div className="my-2 bg-white rounded-b-lg w-full">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            onChange={onChange}
            id="editor"
            rows={10}
            className="focus:outline-none block w-full px-4 py-2 text-sm text-gray-800 bg-white border-0 rounded-b-lg"
            placeholder="Write an article..."
            required
          />
        </div>
      </div>
    </div>
  );
}