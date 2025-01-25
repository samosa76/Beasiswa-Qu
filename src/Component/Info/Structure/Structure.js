import data_structure from "../../../utils/data_structure";
import ImageBox from "./ImageBox/ImageBox";
import style from "./Structure.module.css"

function Structure() {
    const Structures = data_structure;
    return (
        <div className={style.container}>

            <h1>Structure</h1>
            
            <div className={`${style.imagebox_container} ${style.horizontal_scroll_view}`}>
                {Structures.map((structure) => {
                    return <ImageBox structure={structure}/>
                })}
            </div>

        </div>
    )
}

export default Structure;