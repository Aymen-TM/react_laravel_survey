import React,{useState} from 'react'
import { Link } from "react-router-dom";
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';

type Props = {}

const SignUp = (props: Props) => {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setError({ __html: "" });
    
    
        axiosClient
          .post("/signup", {
            name: fullName,
            email,
            password,
            password_confirmation: passwordConfirmation,
          })
          .then(({ data }) => {
            setCurrentUser(data.user)
            setUserToken(data.token)
          })
          .catch((error) => {
            if (error.response) {
              const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
              console.log(error.response.data.errors)
              setError({__html: finalErrors.join('<br>')})
            }
            console.error(error)
          });
      };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 ">
      {error.__html &&
      <div className='bg-red-500 rounded py-2 px-3 text-white' dangerouslySetInnerHTML={error} ></div>
      }
    <form method='POST' action='#' onSubmit={(ev)=>onSubmit(ev)}  className="w-full md:w-1/2 border border-indigo-300 rounded-lg py-4 flex flex-col items-center " >
       
         {/**  text login*/}
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">SIGNUP</h1>
        
        {/** full name input */}
        <div className="w-3/4 mb-6">
            <input type="text" value={fullName}   onChange={ev => setFullName(ev.target.value)} required name="name" id="name" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="UserName" />
        </div>
   
        {/** email input */}
        <div className="w-3/4 mb-6">
            <input type="email" value={email}   onChange={ev => setEmail(ev.target.value)} required name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Email" />
        </div>
        
        {/** password input */}
        <div className="w-3/4 mb-6">
            <input type="password" value={password}   onChange={ev => setPassword(ev.target.value)} required name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" />
        </div>

        <div className="w-3/4 mb-6">
            <input type="password" value={passwordConfirmation}  onChange={ev => setPasswordConfirmation(ev.target.value)} required name="password_confirmation" id="password-confirmation" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password Confirmation" />
        </div>
        {/** remember input */}
       
        <div className="w-3/4 flex flex-row justify-start">
            <div className=" flex items-center gap-x-1">
              <p>you already have an account ? <Link className='text-blue-500 hover:text-blue-600' to={'/login'}>Login</Link></p>  
            </div>
        </div>
        {/** button */}
        <div className="w-3/4 mt-4">
            <button type="submit" className="py-4 bg-indigo-500 w-full rounded text-blue-50 font-bold hover:bg-indigo-700"> SIGNUP</button>
        </div>
        </form>
    </div>
  )
}

export default SignUp