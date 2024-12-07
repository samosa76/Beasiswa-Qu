import info_data from "../../../utils/info_data";
import style from "./InfoContent.module.css"
import ItemContent from "./ItemContent/Item";

const InfoContent = () => {
    const Contents = info_data;
    return (
        <div className={style.container}>
            {Contents.map((content) => {
                return <ItemContent content={content}/>
            })}
        </div>
    )
}

export default InfoContent;