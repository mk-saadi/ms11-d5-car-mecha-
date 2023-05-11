import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <About />
            <Services />
            <h1>home is nowhere</h1>
        </div>
    );
};

export default Home;
