import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // >> if firebase:error (auth/unauthorized-domain)? watch module 71-7

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);

            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email,
                };

                fetch("http://localhost:3000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(loggedUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log("jwt res: ", data);
                        // localStorage is not the best place to store jwt token
                        localStorage.setItem("car-access-token", data.token);
                    });
            } else {
                localStorage.removeItem("car-access-token");
            }
        });
        return () => {
            return unsubscribe;
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
