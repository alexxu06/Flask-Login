import "./LoginPage.css"

function LoginPage() {

    const something = () => {
        console.log("hello")
    }

  return (
    <div className="login-background">
        <div className="login-wrapper">
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
                <button onClick={something}>Login</button>
                <p>Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
