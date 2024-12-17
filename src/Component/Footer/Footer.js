import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer_container}>
            <div className={style.footer_logo}>
                <img src="Asset/icon/footer_logo.png" alt="footer-logo" />
            </div>

            <div className={style.footer_contact_us}>
                <div className={style.contact_us_title}>
                    <h4>Contact Us</h4>
                </div>
                <div className={style.contact_us_items}>
                    <div className={style.contact_us_item}>
                        <img src="Asset/icon/icon_mark.png" alt="icon-mark"/>
                        <p>Villa Pedurenan Indah 1 Blok C No. 6 Padurenan Mustika Jaya, Bekasi, Jawa  Barat, Indonesia</p>
                    </div>

                    <div className={style.contact_us_item}>
                        <img src="Asset/icon/icon_phone.png" alt="icon-phone"/>
                        <p>0859-3517-4648</p>
                    </div>

                    <div className={style.contact_us_item}>
                        <img src="Asset/icon/icon_mail.png" alt="icon-mail"/>
                        <p>qubeasiswa@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className={style.contact_us_sosmed}>
                <img src="Asset/icon/icon_ig.png" alt="icon-instagram"/>
                <img src="Asset/icon/icon_fb.png" alt="icon-facbook"/>
                <img src="Asset/icon/icon_tiktok.png" alt="icon-facebook"/>
            </div>
        </div>
    );
}

export default Footer;