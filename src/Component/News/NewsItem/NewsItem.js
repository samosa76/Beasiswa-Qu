import style from './NewsItem.module.css'

const NewsItem = () => {
    return (
        <div className={`${style.item_container}`}>
            <div className={style.card_item}>
                <div className={style.item_image}>
                    <img src='Asset/image/program_beasiswa_yatim_piatu.jpg' alt='poster-program-beasiswa' />
                </div>
                <div className={style.item_title}>
                    <h2>Beasiswa Yatim dan Piatu</h2>
                </div>
                <div className={style.item_desc}>
                    <p>Menyambut tahun pendidikan ajaran baru 2025/2026 , BeasiswaQu mendapat kepercayaan dari salah satu perusahaan swasta untuk bekerja sama dalam masalah pendidikan</p>
                </div>
                <div className={style.item_button}>
                    <h4>Daftar Sekarang</h4>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;

