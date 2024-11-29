import style from './Info.module.css'

const Info = () => {
    return (
        <div className={style.container_info}>
            <div className={style.info_title}>
                <h1>Info Section</h1>
            </div>
            <div className={style.info_content}>
                <p>Ini adalah teks paragraph yang nantinya akan di gunakan untuk membuat paragraph info</p>
            </div>
        </div>
    )
}

export default Info;