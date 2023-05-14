import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    // console.log(service);

    const { title, price, service_id, _id } = service;

    return (
        <form className="my-20">
            <div className="card-body bg-slate-100 rounded-md px-24">
                <p className="text-4xl text-error font-bold text-center">CheckOut {title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                    {/* first name */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="nameF"
                            required
                            placeholder="First Name"
                            className="input input-bordered bg-white "
                        />
                    </div>
                    {/* last name */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="nameL"
                            required
                            placeholder="Last Name"
                            className="input input-bordered bg-white "
                        />
                    </div>
                    {/* phone */}
                    <div className="form-control">
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Your Phone"
                            className="input input-bordered bg-white "
                        />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="input input-bordered bg-white "
                        />
                    </div>
                </div>
                <div className="pb-10 pt-4">
                    <textarea
                        name="message"
                        className="textarea textarea-error bg-white w-full min-h-[10rem]"
                        placeholder="Your Message"
                    ></textarea>
                    <input
                        type="submit"
                        className="btn btn-error rounded-sm w-full text-white mt-8"
                        value="Order Confirm"
                    />
                </div>
            </div>
        </form>
    );
};

export default CheckOut;
