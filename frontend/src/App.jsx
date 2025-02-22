import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="wrapper">
        <h1>Login</h1>
        <div className="input-box">
            <p>Username/Email</p>
            <input type="text" placeholder="Enter Username or Email"/>
        </div>
        <div className="input-box">
            <p>Password</p>
            <input type="password" placeholder="Enter Password"/>
        </div>
        <div className="buttons">
            <button>Login</button>
            <p>Sign Up</p>
        </div>
    </div>
  )
}

export default App
