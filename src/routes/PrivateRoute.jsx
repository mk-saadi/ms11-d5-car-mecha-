import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div
                className="radial-progress bg-success text-primary-content border-4 border-primary block top-1/2 left-1/2 text-center my-32"
                style={{ "--value": 99 }}
            >
                <p className="mt-6">99%</p>
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        ></Navigate>
    );
};

export default PrivateRoute;
