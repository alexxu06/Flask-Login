import './LandingPage.css'
import pic from '../../images/monkey.png'
import { Navigate, useNavigate} from 'react-router-dom'
import axios from "axios"

function LandingPage() {
    let navigate = useNavigate();

    const signupNav = () => {
        navigate("/signup")
    }

    const loginNav = () => {
        navigate("/login")
    }

    return (
        <div className="landing-background">
            <div className="landing-main-wrapper">
                <h1>Welcome to this Random Website</h1>
                <h2>Get started today</h2>
                <div className="button-container">
                    <button onClick={signupNav} className='sign-up-btn'>Sign up</button>
                    <button onClick={loginNav} className='log-in-btn'>Log in</button>
                </div>
            </div>
            <img className="monkey-img" src={pic} alt="pic"/>
        </div>
    )
}

export default LandingPage