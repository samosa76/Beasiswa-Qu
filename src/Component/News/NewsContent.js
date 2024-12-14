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
                <Link to="/News/Detail" className={style.non_link_text}>
                    <NewsItem />
                </Link>
                <NewsItem />
            </div>
        </div>
    )
}

export default NewsContent;