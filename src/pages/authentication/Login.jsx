/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error("password must be at least 6 characters long!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        form.reset();

        signIn(email, password)
            .then((res) => {
                const user = res.user;

                navigate(from, { replace: true });

                if (user.uid) {
                    toast.success("Successfully Logged In", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
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
        <div className="hero min-h-screen mb-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-1/2">
                    <img
                        src={login}
                        alt="login image"
                    />
                </div>
                {/* login form */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-md border-[1px] rounded-md">
                    <h1 className="text-error text-4xl font-bold text-center p-4">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold text-lg">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered bg-white "
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold text-lg">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-white"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    className="btn btn-error btn-outline rounded-sm"
                                    value="Sign In"
                                />
                            </div>
                        </div>
                    </form>
                    <p className="font-semibold text-sm text-center mb-4">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-error hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
