import { useState, useEffect } from "react";
import "./SignUp.css"
import { Navigate, useNavigate} from 'react-router-dom'
import axios from "axios"

function SignUp() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);

    const signup = () => {
        if (username.trim() == "") {
            alert("Please enter a username or email");
        } else if (email.trim() == "") {
            alert("Please enter a email");
        } else if (password.trim() == "") {
            alert("Please enter a password");
        } else {
            axios.post("http://127.0.0.1:5000/signup", {
                email: email,
                username: username,
                password: password,
                admin: admin
            })
            .then(function (response) {
                navigate("/home");
            })
            .catch(function (error) {
                alert(error.response.data);
            });
        }
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onAdminChange = (e) => {
        setAdmin(e.target.checked);
    }

    return (
    <div className="login-background">
        <div className="login-wrapper">
            <h1>Sign up</h1>
            <div className="input-box">
                <p>Username</p>
                <input type="text" placeholder="Enter Username or Email" onChange={onUsernameChange}/>
            </div>
            <div className="input-box">
                <p>Email</p>
                <input type="text" placeholder="Enter Password" onChange={onEmailChange}/>
            </div>
            <div className="input-box">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" onChange={onPasswordChange}/>
            </div>
            <div className="checkbox-input-box">
                <p>Admin</p>
                <input type="checkbox" placeholder="Enter Password" onChange={onAdminChange}/>
            </div>
            <div className="buttons">
                <button onClick={signup}>Sign Up</button>
            </div>
        </div>
    </div>
    )
    }

export default SignUp
