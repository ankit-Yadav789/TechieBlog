import { useBlogs } from "../Hooks"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
  const {loading,blogs}=useBlogs();
  if(loading){
    return <div>
      loading....
    </div>
  }
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center">
      <div>
        {blogs.map(blog =><BlogCard
        id = {blog.id}
         authorname ={blog.author.name || "Anonymous"}
         title={blog.title}
         content={blog.content}
         publishedDate={"3 feb 2024"}
        />  ) }
        
    </div>
    
    </div>
    </div>
  )
}
