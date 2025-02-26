import { Navigate, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    async function checkIfAuthenticated() {
        await axios.get("/api/authentication", {
            withCredentials: true
        })
        .then(function (response) {
            console.log(response)
            setIsAuthorized(true)
        })
        .catch(function (error) {
            console.log(error)
            setIsAuthorized(false)
        })
    } 

    useEffect(() => {
        checkIfAuthenticated();
    }, [])

    if (isAuthorized == null) {
        return <div>Loading...</div>
    }
      

    return isAuthorized ? children : <Navigate to="/login"/>
}

export default ProtectedRoute