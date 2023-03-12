import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';

type Props = {}

const Login = (props: Props) => {
    const { setCurrentUser, setUserToken,userToken} = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setError({ __html: "" });
    
        axiosClient
          .post("/login", {
            email,
            password,
          })
          .then(({ data }) => {
            setCurrentUser(data.user);
            setUserToken(data.token);
           
          })
          .catch((error) => {
            if (error.response) {
              const finalErrors = Object.values(error.response.data.errors).reduce(
                (accum, next) => [...accum, ...next],
                []
              );
              setError({ __html: finalErrors.join("<br>") });
            }
            console.error(error);
          });
      };
    
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 ">
    <form method='POST' action='#' onSubmit={(e)=>onSubmit(e)} className="w-full md:w-1/2  flex flex-col items-center " >
       
         {/**  text login*/}
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
        {/** email input */}
        <div className="w-3/4 mb-6">
            <input type="email" value={email}   onChange={ev => setEmail(ev.target.value)} name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Email" />
        </div>
        
        {/** password input */}
        <div className="w-3/4 mb-6">
            <input type="password" value={password}   onChange={ev => setPassword(ev.target.value)} name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" />
        </div>
        {/** remember input */}
       
        <div className="w-3/4 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="rememberme" className=" w-4 h-4  " />
                <label htmlFor="rememberme" className="text-sm font-bold text-slate-500">Remember me</label>
            </div>
            <div>
                <a href="#" className="text-sm  font-bold text-slate-500 hover:text-blue-500">Forgot?</a>
            </div>
        </div>
        {/** button */}
        <div className="w-3/4 mt-4 flex flex-col gap-2">
            <button type="submit" className="py-4 bg-indigo-500 w-full rounded text-blue-50 font-bold hover:bg-indigo-700"> LOGIN</button>
            <Link to={"/signup"}  className="py-4 block text-center bg-indigo-500 w-full rounded text-blue-50 font-bold hover:bg-indigo-700"> SIGNUP</Link>
        </div>
    </form>
   </div>
  )
}

export default Login