import { Navigate, Route} from 'react-router-dom'

function ProtectedRoute({children}) {

    const isAuthorized = false;

    return isAuthorized ? children : <Navigate to="/login"/>
}

export default ProtectedRoute