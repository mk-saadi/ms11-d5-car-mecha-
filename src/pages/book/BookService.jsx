import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const BookService = () => {
    const service = useLoaderData();

    const { title, price, _id, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email && form.email.value;
        const description = form.description.value;
        const bookings = {
            service: title,
            service_id: _id,
            customerName: name,
            img: img,
            email: email,
            date: date,
            price: price,
            description: description,
        };

        // console.log(bookings);

        fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookings),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success("Your new booking was successfully added.", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    return (
        <form
            onSubmit={handleBookService}
            className="my-20"
        >
            <div className="card-body bg-slate-100 rounded-md px-24">
                <p className="text-4xl text-error font-bold text-center">Book Service {title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                    {/* first name */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            required
                            placeholder="Name"
                            className="input input-bordered bg-white "
                        />
                    </div>
                    {/* last name */}
                    <div className="form-control">
                        <input
                            type="date"
                            name="date"
                            required
                            className="input input-bordered bg-white"
                        />
                    </div>
                    {/* phone */}
                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            required
                            defaultValue={user?.email}
                            placeholder="Email Address"
                            className="input input-bordered bg-white "
                        />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="price"
                            placeholder="Payment Amount"
                            readOnly
                            defaultValue={"$ " + price}
                            className="input input-bordered bg-white "
                        />
                    </div>
                </div>
                <div className="pb-10 pt-4">
                    <textarea
                        name="description"
                        className="textarea textarea-error bg-white w-full min-h-[10rem]"
                        placeholder="Product Description"
                    ></textarea>
                    <input
                        type="submit"
                        className="btn btn-error rounded-sm w-full text-white mt-8"
                        value="Submit"
                    />
                </div>
            </div>
        </form>
    );
};

export default BookService;
