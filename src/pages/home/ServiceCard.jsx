import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service;
    return (
        <div className="card border-[1px] shadow-md hover:shadow-lg rounded-md">
            <figure className="px-5 pt-5">
                <img
                    style={{ width: "370px", height: "200px", objectFit: "cover" }}
                    src={img}
                    alt="Shoes"
                    className="rounded-md"
                />
            </figure>
            <div className="card-body text-left -ml-2 -mt-4">
                <h2 className="card-title text-2xl text-gray-800">{title}</h2>
            </div>
            <div className="flex justify-between text-red-700 font-semibold mx-6 mb-4 -mt-6">
                <p className="text-xl">Price: ${price}</p>
                <Link to={`/book/${_id}`}>
                    <button className="text-xl">View</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
