import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleLogIn = () => {
        googleSignIn()
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center mb-6">
                <button
                    className="btn btn-circle btn-outline text-blue-500"
                    onClick={handleLogIn}
                >
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
