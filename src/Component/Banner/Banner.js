import style from './Banner.module.css'

const Banner = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.banner_content}>
                    <div className={`${style.banner_info} ${style.glass_card}`}>

                        <h2>BeasiswaQu</h2>

                        <p>Lorem Ipsum hanyalah contoh teks dalam industri percetakan dan penataan huruf.Lorem Ipsum telah menjadi contoh teks standar industri sejak tahun 1500-an,ketika seorang pencetak yang tidak dikenal mengambil kumpulan huruf dan mengacaknya untuk dijadikan buku contoh huruf. Ia tidak hanya bertahan selama lima abad,</p>

                        <button className={style.btn_donate}>
                            <p><b>Ayo Berdonasi</b></p>
                        </button>
                        
                    </div>

                    <div className={style.banner_logo}>
                        <img src='asset/icon/banner-logo.png' alt='logo-with-yellow-bg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;