import { createBrowserRouter } from "react-router-dom";
import Admin from "../layout/Admin";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import CheckOut from "../pages/checkOut/CheckOut";
import BookService from "../pages/book/BookService";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/book/:id",
                element: (
                    <PrivateRoute>
                        <BookService />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`),
            },
            {
                path: "/bookings",
                element: (
                    <PrivateRoute>
                        <Bookings />
                    </PrivateRoute>
                ),
            },
            {
                path: "/checkout/:id",
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`),
            },
        ],
    },
]);

export default router;
