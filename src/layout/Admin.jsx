import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";
import { Toaster } from "react-hot-toast";

const Admin = () => {
    return (
        <div className="bg-white">
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid #713200",
                        padding: "16px",
                        color: "#713200",
                        fontWeight: "bolder",
                    },
                }}
            />
        </div>
    );
};

export default Admin;
