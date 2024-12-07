import Banner from "../Banner/Banner";
import Donate from "../Donate/Donate";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Banner />
            <main>
                {children}
            </main>
            <Donate />
            <Footer />
        </div>
    )
}

export default Layout;