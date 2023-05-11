import login from "../../assets/images/login/login.svg";

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
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
                    <h1 className="text-4xl font-bold text-center p-4">Login now!</h1>
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
                                    className="btn btn-primary"
                                    value="Sign In"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
