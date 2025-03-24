
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import SignupScreen from './components/SignupScreen'
import AccountScreen from './components/AccountScreen'
import LoginScreen from './components/LoginScreen'

import { Routes,Route } from 'react-router-dom'
import { UserDataContext } from './Contexts/UserContext'
import { useState } from 'react'


function App() {
  const [ email, setEmail ] = useState('')
   const [fullname,setFullname]=useState('')
   const [bio, setBio] = useState("")
  

  return (
    <>
     <UserDataContext.Provider value={{email,setEmail,fullname,setFullname,bio,setBio}}>
    <Routes>
     
      <Route path="/" element={<WelcomeScreen/>} />
      <Route path="/signup" element={<SignupScreen/>} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/account" element={<AccountScreen/>} />
     
    </Routes>
    </UserDataContext.Provider>
    </>
  )
}

export default App
