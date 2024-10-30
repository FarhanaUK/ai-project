import { useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const {signUp} =useAuth()

    const navigate = useNavigate()

    const handleLogin = (evt) => {
        evt.preventDefault()
        navigate("/Log")
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await signUp(email, password)
        setMessage('Sign Up Successful!')
        navigate('/Dashboard')
      }
      catch(error){
        setMessage(error.message)
      }
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-blue-950 dark:text-text-dark text-center">
          Sign Up
        </h1>

        <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <label>Name *</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value ={name}
              onChange={(e) => setName(e.target.value)} 
              required
            />
            <label>Email *</label>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <label>Password *</label>
            <input
              type="password"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {message && <p className="text-red-500 text-center">{message}</p> }
            <div className="flex justify-between mt-4">
              <button className="w-full border border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600 px-4 py-2">
                Sign Up
              </button>
              <button className="w-full border border-gray-300 rounded bg-gray-200 hover:bg-gray-300 px-4 py-2 ml-4" onClick={handleLogin}>
                Back To Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}