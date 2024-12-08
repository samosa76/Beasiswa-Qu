import style from './NewsContent.module.css'
import NewsItem from './NewsItem/NewsItem';

const NewsContent = () => {
    return (
        <div className={style.news_container}>
            <div className={style.news_title}>
                <p>Berita Terbaru</p>
            </div>
            <div className={style.news_items}>
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    )
}

export default NewsContent;