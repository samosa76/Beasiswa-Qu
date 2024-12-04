import Banner from "../Component/Banner/Banner";
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
        </div>
    );
}

export default Home;