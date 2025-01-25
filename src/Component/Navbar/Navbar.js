
import { useState } from "react";
import style from "./Navbar.module.css"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    function showMenuItems() {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`${style.container}`}>
            <nav className={style.navbar}>

                <div className={style.nav_logo}>
                    <img src="Asset/icon/icon_logo.png" alt="logo-BeasiswaQu"/>
                    <div className={style.overlay}></div>
                </div>


                <ul className={`${style.nav_list_menu} ${showMenu ? style.show_menu : ''}`}>
                    <li>
                        <Link to="/" className={style.nav_link}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Program" className={style.nav_link}>
                            <p>Program</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Profile" className={style.nav_link}>
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>

                <div className={style.icon_nav_menu}>
                    <i className={`fa fa-bars`} onClick={showMenuItems}></i>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;