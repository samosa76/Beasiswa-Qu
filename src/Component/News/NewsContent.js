import { Link } from 'react-router-dom';
import style from './NewsContent.module.css'
import NewsItem from './NewsItem/NewsItem';

const NewsContent = () => {
    return (
        <div className={style.news_container}>
            <div className={style.news_title}>
                <p>Berita Terbaru</p>
            </div>
            <div className={style.news_items}>
                <Link to="/Detail" className={style.non_link_text}>
                    <NewsItem newsImage="program_beasiswa_yatim_piatu.jpg" newsTitle="Beasiswa Yatim dan Piatu" newsDesc="Menyambut tahun pendidikan ajaran baru 2025/2026 , BeasiswaQu mendapat kepercayaan dari salah satu perusahaan swasta untuk bekerja sama dalam masalah pendidikan"/>
                </Link>
                <Link to="/Bukber" className={style.non_link_text}>
                    <NewsItem newsImage="santries.jpg" newsTitle="Buka Bersama Santri" newsDesc="BeasiswaQu menyalurkan buka puasa untuk Pondok Pesantren IT Multimedia Al Fatih dan Pondok Pesantren Tahfidzul Qur'an al Wahyu"/>
                </Link>
                {/* <NewsItem /> */}
            </div>
        </div>
    )
}

export default NewsContent;