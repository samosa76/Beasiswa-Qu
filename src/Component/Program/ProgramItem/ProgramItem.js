import style from './ProgramItem.module.css'

const ProgramItem = (props) => {
    const {programs} = props;
    return (
        <div className={style.program_container}>

            <div className={style.title_container}>
                <div className={style.circle}>
                    <h2>{programs.id}</h2>
                </div>
                <div className={style.item_title}>
                    <h4>{programs.title}</h4>
                </div>
            </div>


            <div className={`${style.program_item} ${style.card}`}>
                <div className={style.desc_item}>
                    <p>{programs.desc}</p>
                </div>
            </div>


        </div>
    )
}

export default ProgramItem;