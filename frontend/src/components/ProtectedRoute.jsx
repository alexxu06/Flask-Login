import { Navigate, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute({children}) {

    const isAuthorized = true;

    return isAuthorized ? children : <Navigate to="/login"/>
}

export default ProtectedRoute