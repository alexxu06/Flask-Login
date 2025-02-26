import { useState, useEffect } from "react";
import "./LoginPage.css"
import { Navigate, useNavigate} from 'react-router-dom'
import axios from "axios"

function LoginPage() {
    let navigate = useNavigate();

    const [userOrEmail, setUserOrEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (userOrEmail.trim() == "") {
            alert("Please enter a username or email");
        } else if (password.trim() == "") {
            alert("Please enter a password");
        } else {
            axios.post("/api/login", {
                username_or_email: userOrEmail,
                password: password
            }, {
                withCredentials: true
            })
            .then(function (response) {
                console.log(response)
                navigate("/home");
            })
            .catch(function (error) {
                alert(error.response.data);
            });
        }
    }

    const navigateToSignup = () => {
        navigate("/signup");
    }

    const onUserOrEmailChange = (e) => {
        setUserOrEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
    <div className="login-background">
        <div className="login-wrapper">
            <h1>Login</h1>
            <div className="input-box">
                <p>Username/Email</p>
                <input type="text" placeholder="Enter Username or Email" onChange={onUserOrEmailChange}/>
            </div>
            <div className="input-box">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" onChange={onPasswordChange}/>
            </div>
            <div className="buttons">
                <button onClick={login}>Login</button>
                <p onClick={navigateToSignup}>Sign Up</p>
            </div>
        </div>
    </div>
    )
    }

export default LoginPage
