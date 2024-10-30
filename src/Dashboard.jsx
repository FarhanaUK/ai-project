import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'

export default function Dashboard() {
  const navigate = useNavigate();
  const {logOut} = useAuth()

  const handleLogout = (evt) => {
    evt.preventDefault();
    logOut()
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl  mt-4 text-blue-950 dark:text-text-dark text-center">
        This is where the magic of AI will happen
      </h1>
      <button
        onClick={handleLogout}
        className="border-gray-300 rounded bg-gray-200 hover:bg-gray-300 px-4 py-2 ml-4"
      >
        Logout
      </button>
    </div>
  );
}
