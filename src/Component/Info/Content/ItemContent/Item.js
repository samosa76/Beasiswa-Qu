import style from './Item.module.css'

const ItemContent = (props) => {
    const {content} = props;
    return (
        <div className={style.container_item}>
            <div className={style.item_icon}>
                <img src={`Asset/image/${content.img}`} alt='icon-item'/>
                <div className={style.overlay}></div>
            </div>
            <div className={style.item_title}>
                <h4>{content.title}</h4>
            </div>
            <div className={style.item_desc}>
                <p>{content.desc}</p>
            </div>
        </div>
    )
}

export default ItemContent;