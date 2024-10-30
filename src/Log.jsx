import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./AuthContext"
import GoogleLogin from "./GoogleLogin"

export default function Log() {
const {logIn} = useAuth()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message, setMessage] = useState('')

const navigate = useNavigate()

const onSubmit = async (evt) => {
  evt.preventDefault()
  try{
 await logIn(email, password)
 navigate("/Dashboard")

  }
  catch(err) {
    setMessage(err.message)
  }
}

const handleSignUp = (evt) => {
  evt.preventDefault()
  navigate("/SignUp")
}


    return ( 
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-blue-950 dark:text-text-dark text-center">
          Sign In
        </h1>
  
        <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value ={email}
              onChange={((e) => setEmail(e.target.value))}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
           />
            {message && <p className="text-red-500 text-center">{message}</p> }
            <div className="flex justify-between mt-4">
              <button className="w-full border border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600 px-4 py-2">
                Login
              </button>
              <button className="w-full border border-gray-300 rounded bg-gray-200 hover:bg-gray-300 px-4 py-2 ml-4" onClick={handleSignUp}>
                Sign up
              </button>
              <GoogleLogin/>
            </div>
          </form>
        </div>
      </div>
      )
}