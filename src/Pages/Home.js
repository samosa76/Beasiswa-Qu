import Banner from "../Component/Banner/Banner";
import Donate from "../Component/Donate/Donate";
import Gallery from "../Component/Gallery/Gallery";
import Info from "../Component/Info/Info";
import Program from "../Component/Program/Program";
import "./universal.module.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Program />
            <Gallery />
            <Donate />
        </div>
    );
}

export default Home;