import style from './ProgramItem.module.css'

const ProgramItem = (props) => {
    return (
        <div className={`${style.program_item} ${style.card}`}>
            <h4>{props.title}</h4>
            <div className={style.desc_item}>
                <p>Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa</p>
            </div>
        </div>
    )
}

export default ProgramItem;