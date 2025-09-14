import { Blog } from "../Hooks"
import { Appbar } from "./Appbar"
import { Avatar, getcurrentDate } from "./BlogCard"


 export const FullBlog = ({blog}:{blog:Blog}) => {
 return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-fullpt-200 max-w-screen-2xl pt-10">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">{blog.title}</div>
                <div className="text-slate-400 pt-2">{getcurrentDate()}</div>
                <div className="pt-4">{blog.content}</div>
            </div>
            <div className="col-span-4">
                <div className="text-lg text-slate-500">
                    Author
                </div>
                <div className="flex ">
                   <div className="pr-4 flex flex-col justify-center">
                   <Avatar size="big" name={blog.author.name ||"Anonymous"}/>
                   </div>        
     <div>
             <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
            </div>
              <div className="pt-2 text-slate-500">
                Random pharase about the author ability to grab the user's attention
              </div>
    </div>
                </div>
              
            </div>
            

        </div>
        </div>
    </div>
  )
}

