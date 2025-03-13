import { useContext } from "react"
import { AuthContext } from "../Auth/context/AuthContext"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRouter = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();    
    const lastPath = pathname + search;    
    localStorage.setItem('lastPath', lastPath );
    return (logged) ? children : <Navigate to="/login" />

}

