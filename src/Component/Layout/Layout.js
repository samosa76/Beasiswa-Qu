import { useRef } from "react";
import Banner from "../Banner/Banner";
import Donate from "../Donate/Donate";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
    const ref = useRef(null);
    return (
        <div style={{overflowX:'hidden'}}>
            <Navbar />
            <Banner refToComponent={ref} />
            <main>
                {children}
            </main>
            <Donate ref={ref}/>
            <Footer />
        </div>
    )
}

export default Layout;