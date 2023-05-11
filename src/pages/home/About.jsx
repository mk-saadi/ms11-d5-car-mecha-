import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row gap-8 space-y-8">
                <div className="md:w-1/2 relative">
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl"
                    />
                    <img
                        src={parts}
                        className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-white border-8 "
                    />
                </div>

                <div className="md:w-1/2 text-gray-800 mx-4 sm:mx-2">
                    <h3 className="text-error font-bold text-xl">About Us</h3>
                    <h1 className="text-4xl font-bold mt-4">
                        We are qualified <br /> & of experience <br /> in this field
                    </h1>
                    {/* style={{ inlineSize: "400px", overflowWrap: "break-word" }} */}
                    <p className="py-6 text-gray-400 text-sm">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                    </p>
                    <p className="text-gray-400 -mt-3 text-sm">
                        the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn bg-red-500 border-0 hover:bg-red-600 focus:bg-red-600 duration-200 text-white font-semibold rounded-sm mt-6">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
