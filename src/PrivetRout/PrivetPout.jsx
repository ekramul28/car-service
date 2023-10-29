import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetPout = ({ children }) => {
    const location = useLocation();
    console.log(location.pathname);
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivetPout;