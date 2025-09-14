import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { LuLogOut } from "react-icons/lu";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 bg-white sticky top-0 z-50 shadow-md">
      <Link
        to={`/blogs`}
        className="font-bold text-xl flex justify-center flex-col cursor-pointer"
      >
        TechieBlog
      </Link>
      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar size="big" name="Ankit Yadav " />
        <button>
          <div className="size-8">
            <LuLogOut />
          </div>
        </button>
      </div>
    </div>
  );
};