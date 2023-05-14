import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="mt-8">
            <div className="text-center">
                <h2 className="text-xl text-error font-bold">service</h2>
                <h3 className="text-4xl text-gray-800 font-bold mt-4">Our Service Area</h3>
                <p className="text-sm text-gray-400 mt-3">
                    the majority have suffered alteration in some form, by injected humour, or
                    randomised <br /> words which don't look even slightly believable.
                </p>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-2 mt-10">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
