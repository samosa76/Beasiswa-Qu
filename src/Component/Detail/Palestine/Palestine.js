import style from './Palestine.module.css';

function Palestine() {
    return (
        <div className={style.container}>
            <div className={style.container_detail}>
                <div className={style.detail_title}>
                    <p>Bersama Palestina</p>
                </div>
                <div className={`${style.detail_image} ${style.card}`}>
                    <img src='Asset/image/news/palestine.jpg' alt='poster-program-beasiswa' />
                    <div className={style.overlay}></div>
                </div>
                
                <div className={style.detail_desc}>

                    <p>Alhamdulillah, donasi sebesar Rp 16.787.000 untuk rakyat Palestina telah resmi diserahkan kepada Syaikh Rayyan Abdullah, perwakilan dari organisasi kemanusiaan Friend of Palestina. Donasi ini merupakan bentuk kepedulian dan solidaritas masyarakat Indonesia terhadap penderitaan yang dialami oleh saudara-saudara kita di Palestina akibat konflik yang terus berlangsung.</p>
                    <p>Penyerahan bantuan ini diharapkan dapat meringankan beban para korban dan mendukung upaya kemanusiaan yang dilakukan oleh Friend of Palestina. Terima kasih kepada seluruh donatur yang telah berkontribusi; semoga menjadi amal jariyah dan membawa keberkahan bagi semuanya.</p>

                </div>
            </div>
        </div>
    )
}

export default Palestine;