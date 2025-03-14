import style from './NewsItem.module.css'

const NewsItem = (props) => {
    const { newsImage, newsTitle, newsDesc } = props
    return (
        <div className={`${style.item_container}`}>
            <div className={style.card_item}>
                <div className={style.item_image}>
                    <img src={`Asset/image/news/${newsImage}`} alt='poster-program-beasiswa' />
                </div>
                <div className={style.box_desc}>
                    <div className={style.item_title}>
                        <h2>{newsTitle}</h2>
                    </div>
                    <div className={style.item_desc}>
                        <p>{newsDesc}</p>
                    </div>
                </div>
                <div className={style.item_button}>
                    <h4>Lihat Selengkapnya</h4>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;

