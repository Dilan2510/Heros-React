/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../Auth/context/AuthContext"
import { Navigate } from "react-router";

export const PublicRouter = ({ children }) => {
    const { logged } = useContext(AuthContext);

    return (!logged) ? children : <Navigate to="/marvel" />

}
