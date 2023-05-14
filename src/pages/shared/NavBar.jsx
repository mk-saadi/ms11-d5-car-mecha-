import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="navbar h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    to="/"
                >
                    <img
                        className="w-4/6"
                        src={logo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <div className="flex gap-2">
                        <p className="text-warning">{user.email}</p>
                        <img
                            className="h-12 w-12 rounded-3xl"
                            src={user.photoURL}
                            alt=""
                        />
                        <button
                            className="btn btn-outline btn-warning rounded-sm p-2 sm:px-5"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                        <Link to="/bookings">
                            <button className="btn btn-outline btn-warning rounded-sm p-2 sm:px-5">
                                My Bookings
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-outline btn-warning rounded-sm">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
