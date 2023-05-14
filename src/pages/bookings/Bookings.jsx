import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const url = `http://localhost:3000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setBookings(data);
                } else {
                    logOut()
                        .then()
                        .catch((err) => {
                            console.log(err);
                        });
                    navigate("/");
                    toast.error("unauthorized access, Login again!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    }, [url, navigate, logOut]);

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete");
        if (proceed) {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Successfully Deleted", {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        const remaining = bookings.filter((b) => b._id !== id);
                        setBookings(remaining);
                    }
                });
        }
    };

    const handleConfirm = (id) => {
        const proceed = confirm("Are you sure you want to confirm?");
        if (proceed) {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ status: "confirm" }),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.modifiedCount > 0) {
                        const remaining = bookings.filter((b) => b._id !== id);
                        const updated = bookings.find((b) => b._id === id);
                        updated.status = "confirm";
                        // remaining is an [array]
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);
                        toast.success("Done", {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                });
        }
    };

    return (
        <div>
            <p>Your Bookings {bookings.length}</p>
            <div className="overflow-x-auto w-full my-20">
                <table className="table w-full">
                    <tbody>
                        {bookings.map((book) => (
                            <BookingRow
                                key={book._id}
                                book={book}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
