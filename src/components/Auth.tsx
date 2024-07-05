import { SignupInput } from "@ankityadav0001/tech-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
 export const Auth = ({type}:{type:"signup"| "signin"}) => {
  const navigate =useNavigate();
    const [postInputs,setpostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })


     async function sendRequest(){
      try {
       const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type ==="signup" ? "signup" :"signin"}`,postInputs);
       const jwt = response.data;
       localStorage.setItem("token",jwt);
        navigate("/blogs")
      } catch (error) {
        alert("Error while signin up")
      }
    }
  return (
     <div className="bg-blue-50 h-screen flex justify-center flex-col">
        
        <div className="flex justify-center">
            <div>
            <div className="px-10">
            <div className="text-3xl font-extrabold">
                Create an Account
            </div>
            <div className="text-slate-400 text-xl">
                {type ==="signin"? "Don't have an account?" :"Already have an account? "}
            <Link className="pl-2 underline" to = {type === "signin" ? "/signup" :"/signin"}>
            {type === "signin" ? "Sign up": "Sign in"}
            </Link>
            </div>
            </div>
           <div className="pt-4">
           {type === "signup" ?  <LabelledInput label="Name" placeholder="Jhon doe" onChange={(e) => {
                  setpostInputs({
                    ...postInputs,
                    name:e.target.value
                  })
              } }/> :null}
                  <LabelledInput label="Email" placeholder="test123@gmail.com" onChange={(e) => {
                  setpostInputs({
                    ...postInputs,
                    email:e.target.value
                  })
              } }/>    <LabelledInput label="Password" type ={"password"}placeholder="dfhdsh9354" onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  password:e.target.value
                })
            } }/>
            <button onClick ={sendRequest} type="button" className="mt-6 w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{type === "signup" ? "Sign up" : "Sign in"}</button>

           </div>
           </div>
        </div>
     </div>
      )
}

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>) =>void;
    type?:string;
}
 function LabelledInput({ label, placeholder, onChange,type }:LabelledInputType){
    return <div>
            <label className="block mb-2 text-lg font-medium text-black pt-2">{label}</label>
            <input onChange = {onChange}type={type ||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    
}



