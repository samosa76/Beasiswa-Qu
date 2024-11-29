import Banner from "../Component/Banner/Banner";
import Info from "../Component/Info/Info";
import Program from "../Component/Program/Program";
import "./universal.module.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <Program />
            <Info />
        </div>
    );
}

export default Home;