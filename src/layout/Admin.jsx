import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const Admin = () => {
    return (
        <div className="bg-white">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Admin;
