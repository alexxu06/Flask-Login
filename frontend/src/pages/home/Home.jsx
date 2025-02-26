import { useEffect, useState } from "react";
import axios from "axios"
import { Navigate, useNavigate} from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
    
    const [username, setUsername] = useState("")
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        displayInfo();
    }, [])

    const displayInfo = () => {
        axios.get("/api/home", {
            withCredentials: true
        })
        .then(function (response) {
            console.log(response)
            setUsername(response.data.username)
            setAdmin(response.data.admin)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const loginOut = () => {
        axios.post("/api/logout", {
            withCredentials: true
        })
        .then(function (response) {
            navigate("/login");
            console.log(response)
        })
        .catch(function (error) {
            alert(error.response.data);
        });
        
    }

    return(
        <div>
            <p>Welcome {username}, you are {admin ? "a" : "NOT a"} <b>ADMIN</b></p>
            <button onClick={loginOut} className='log-in-btn'>Log out</button>
        </div>
    )
}

export default Home