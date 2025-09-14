import { useBlogs } from "../Hooks"
import { Appbar } from "../components/Appbar"
import { BlogCard, getcurrentDate } from "../components/BlogCard"

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
      <div className="flex  p-10 justify-center  ">
      <div className="py-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog =><BlogCard 
        id = {blog.id}
         authorname ={blog.author.name || "Anonymous"}
         title={blog.title}
         content={blog.content}
         publishedDate={getcurrentDate()}
        />  ) }
        
    </div>
    
    </div>
    </div>
  )
}
