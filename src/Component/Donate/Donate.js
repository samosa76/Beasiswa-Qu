import style from "./Donate.module.css"

const Donate = () => {
    return (
        <div className={style.container_donate}>
            {/* <img src="asset/background/donate_bg.png" className={style.bg}/> */}
            <h1>Ayo Berdonasi</h1>

            <div className={style.content_donate}>

                <div className={style.img_overlay}>
                    <img src="asset/icon/icon_bank.png" alt="logo-bank-mega" />
                    <div className={style.overlay}></div>
                </div>

                <div className={style.donate_info}>
                    <div className={style.bank_name}>
                        <h2>Bank Mega  Syariah</h2>
                    </div>

                    <div className={style.rek_number}>
                        <h3>Nomor rekening :</h3>
                        <h2>02383470025774029</h2>
                    </div>

                    <div className={style.rek_name}>
                        <h3>Atas nama :</h3>
                        <h2>BEASISWAQU INDONESIA</h2>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Donate;