import Gallery from "../Component/Gallery/Gallery";
import Info from "../Component/Info/Info";
import Plan from "../Component/Plan/Plan";
import Program from "../Component/Program/Program";
import "./universal.module.css"

const Home = () => {
    return (
        <div>
            <Info />
            <Program />
            <Plan />
            <Gallery />
        </div>
    );
}

export default Home;