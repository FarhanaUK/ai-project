
import './App.css'
import LandingPage from './LandingPage'
import Log from './Log'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
<div>
  <h1 className="text-3xl font-bold mt-4 text-blue-950 dark:text-text-dark text-center">AI PROJECT</h1>
<Routes>
<Route path="/" element={<LandingPage/>}/>
<Route path="/Log" element={<Log/>}/>
<Route path="/SignUp" element={<SignUp/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>

</Routes>
</div>
  )
 
  }

export default App
