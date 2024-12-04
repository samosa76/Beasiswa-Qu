import style from "./InfoContent.module.css"
import ItemContent from "./ItemContent/Item";

const InfoContent = () => {
    return (
        <div className={style.container}>
            <ItemContent />
            <ItemContent />
            <ItemContent />
            <ItemContent />
        </div>
    )
}

export default InfoContent;