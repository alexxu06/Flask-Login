import { useState } from 'react'
import './App.css'
import LoginPage from './pages/login/LoginPage'
import LandingPage from './pages/landing/LandingPage'
import Home from './pages/home/home'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <div>
        <Routes>
            <Route index element={<LandingPage />}></Route>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<LoginPage />}/>
            <Route path="home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
        </Routes>
    </div>
  )
}

export default App
