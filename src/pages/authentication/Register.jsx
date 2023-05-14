import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // console.log(`name: ${name}\nemail: ${email}\npassword: ${password}`);

        if (password !== confirm) {
            toast.error("password did not match!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        } else if (password.length < 6) {
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

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                if (user.uid) {
                    toast.success("Account successfully created", {
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
                    <h1 className="text-error text-4xl font-bold text-center p-4">Sign Up!</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold text-lg">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="name"
                                    className="input input-bordered bg-white "
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold text-lg">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    required
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
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="password"
                                    className="input input-bordered bg-white"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold text-lg">
                                        Confirm Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="confirm"
                                    required
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
                                    value="Sign Up"
                                />
                            </div>
                        </div>
                    </form>
                    <p className="font-semibold text-sm text-center mb-4">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-error hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
