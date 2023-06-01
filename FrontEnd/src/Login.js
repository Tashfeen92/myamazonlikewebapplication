import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const signIn=(e)=>{
    e.preventDefault()

  }
  const register=(e)=>{
    e.preventDefault()

  }
  return (
    <div className="login">
      <Link>
        <img className="login_logo" src="" alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e)=>setEmail(e.target.value)} />
          <button className='login_signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>by sigig in you agree to azamzon contion to use 

      </p>
      <button className='login_registerButton' onClick={register} >
        Create Your Amazone Account
      </button>                         
      </div>
    </div>
  );
}
