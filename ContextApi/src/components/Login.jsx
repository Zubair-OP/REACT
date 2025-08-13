import React from 'react'
import UserContext from '../context/Usercontext';
import { useContext } from 'react'; 
import { useState } from 'react';

function Login() {
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext);
    const handleLogin = (e) => {
        e.preventDefault()
        setUser({ userName, password });
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={userName} 
      onChange={(e) => setuserName(e.target.value)} 
      placeholder='Username'/>
      {" "}
      <input type="password"  
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder='Password'/>
      <button onClick={handleLogin}>Login</button> 
    </div>
  )
}

export default Login
