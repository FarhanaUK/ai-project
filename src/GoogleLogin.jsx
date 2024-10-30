// GoogleLogin.jsx
import { useAuth } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseconfig'
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const { logIn } = useAuth(); // Assuming you have logIn function in your AuthContext
  const naivagte = useNavigate()

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      naivagte("/Dashboard")
    } catch (error) {
      console.error(error);
      alert('Login Failed! Please try again.');
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="w-full border border-gray-300 rounded bg-gray-200 hover:bg-gray-300 px-4 py-2 ml-4">
      Login/Sign Up with Google
    </button>
  );
};

export default GoogleLogin;
