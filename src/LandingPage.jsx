import { useNavigate } from "react-router-dom"

export default function LandingPage() {

    const navigate = useNavigate()

    const handleLogIn = (evt) => {
        evt.preventDefault()
        navigate("/Log")
    }

    const handleSignUp = (evt) => {
        evt.preventDefault()
        navigate("/SignUp")
    }
    return (
        <div>
            <button onClick={handleLogIn} className="border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600 px-4 py-2">Login</button>
            <button onClick={handleSignUp} className="border-gray-300 rounded bg-gray-200 hover:bg-gray-300 px-4 py-2 ml-4">Sign Up</button>
            
        </div>
    )
}