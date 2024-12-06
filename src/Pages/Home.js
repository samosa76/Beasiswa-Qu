import Banner from "../Component/Banner/Banner";
import Donate from "../Component/Donate/Donate";
import Gallery from "../Component/Gallery/Gallery";
import Info from "../Component/Info/Info";
import Plan from "../Component/Plan/Plan";
import Program from "../Component/Program/Program";
import "./universal.module.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Program />
            <Plan />
            <Gallery />
            <Donate />
        </div>
    );
}

export default Home;