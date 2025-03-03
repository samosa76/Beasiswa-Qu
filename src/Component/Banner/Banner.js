import style from './Banner.module.css'

function Banner({refToComponent}) {

    
    const scrollToContent = () => {
        if (refToComponent.current) {
            refToComponent.current.scrollIntoView();
        }
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.banner_content}>
                    <div className={`${style.banner_info} ${style.glass_card}`}>

                        <h2>BeasiswaQu</h2>

                        <p>BeasiswaQu hadir untuk memberikan kessempatan kepada putra-putri terbaik bangsa untuk mengenyam pendididkan dan mendapatkan kesempatan memperoleh pendidikan, karena pendidikan adalah hak warga negara sebagaimana tercantum dalam konstitusi negara Pasal 31 UUD 1945, Pasal 31 Ayat 1 : Setiap warga negara berhak mendapatkan pendidikan.</p>

                        <button className={style.btn_donate} onClick={scrollToContent}>
                            <p><b>Ayo Berdonasi</b></p>
                        </button>
                        
                    </div>

                    <div className={style.banner_logo}>
                        <img src='Asset/icon/banner-logo.png' alt='logo-with-yellow-bg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;