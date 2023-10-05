import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import News from "../pages/News/News";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading)
        return <div className="grid justify-center items-center h-96"><span className="loading loading-spinner loading-lg block"></span></div>;
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;