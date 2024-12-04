import style from './Item.module.css'

const ItemContent = () => {
    return (
        <div className={style.container_item}>
            <div className={style.item_icon}>
                <img src='Asset/icon/info_icon_1.png' alt='icon-item'/>
                <div className={style.overlay}></div>
            </div>
            <div className={style.item_title}>
                <h4>BeasiswaQu</h4>
            </div>
            <div className={style.item_desc}>
                <p>img elements must have an alt prop, either with meaningful text</p>
            </div>
        </div>
    )
}

export default ItemContent;