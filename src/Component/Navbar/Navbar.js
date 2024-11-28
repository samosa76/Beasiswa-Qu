
import { useState } from "react";
import style from "./Navbar.module.css"
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    function showMenuItems() {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`${style.container}`}>
            <nav className={style.navbar}>

                <div className={style.nav_logo}>
                    <h1>Navbar</h1>
                </div>


                <ul className={`${style.nav_list_menu} ${showMenu ? style.show_menu : ''}`}>
                    <li>Home</li>
                    <li>Visi & Misi</li>
                    <li>Program</li>
                    <li>Gallery</li>
                </ul>

                <div className={style.icon_nav_menu}>
                    <i className={`fa fa-bars`} onClick={showMenuItems}></i>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;