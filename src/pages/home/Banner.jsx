import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]">
            <div
                id="slide1"
                className="carousel-item relative w-full"
            >
                <img
                    src={img1}
                    className="w-full rounded-xl object-cover"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide6"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide2"
                className="carousel-item relative w-full"
            >
                <img
                    src={img2}
                    className="w-full object-cover rounded-xl"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide3"
                className="carousel-item relative w-full"
            >
                <img
                    src={img3}
                    className="w-full object-cover rounded-xl"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide4"
                className="carousel-item relative w-full"
            >
                <img
                    src={img4}
                    className="w-full object-cover rounded-xl"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide5"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide5"
                className="carousel-item relative w-full"
            >
                <img
                    src={img5}
                    className="w-full object-cover rounded-xl"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide6"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide6"
                className="carousel-item relative w-full"
            >
                <img
                    src={img6}
                    className="w-full object-cover  rounded-xl"
                />
                <div className="absolute h-full flex items-center gap-4 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                    <div className="text-white space-y-7 w-2/3 ml-10">
                        <h2 className="text-5xl sm:text-7xl font-bold ">
                            Affordable
                            <br /> Price For Car
                            <br /> Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available but the majority have
                            suffered alteration in some form or another
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[10rem] sm:max-w-[19rem]  gap-2">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a
                        href="#slide5"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
