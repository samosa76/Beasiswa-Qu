import style from './ProgramItem.module.css'

const ProgramItem = (props) => {
    return (
        // <div className={`${style.program_item} ${style.card}`}>
        //     <h4>{props.title}</h4>
        //     <div className={style.desc_item}>
        //         <p>Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa</p>
        //     </div>
        // </div>
        <div className={style.program_container}>

            <div className={style.title_container}>
                <div className={style.circle}>
                    <h2>2</h2>
                </div>
                <div className={style.item_title}>
                    <h4>{props.title}</h4>
                </div>
            </div>


            <div className={`${style.program_item} ${style.card}`}>
                <div className={style.desc_item}>
                    <p>Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa Ini adalah deskripsi dari program beasiswa</p>
                </div>
            </div>


        </div>
    )
}

export default ProgramItem;