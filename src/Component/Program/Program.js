import style from "./Program.module.css"

const Program = () => {
    return (
        <div className={style.container}>
            <div className={style.program_title}>
                <h1>Our Programs</h1>
            </div>
            <div className={style.program_content}>
                <div className={style.content_image}>
                    <img src="https://picsum.photos/400" alt="program-image" />
                </div>

                <div className={style.content_programs}>
                    <div className={style.program_item}>
                        <h4>Beasiswa Al-Qur'an</h4>
                    </div>
                    <div className={style.program_item}>
                        <h4>Beasiswa Kader Bangsa</h4>
                    </div>
                    <div className={style.program_item}>
                        <h4>Beasiswa Prestasi</h4>
                    </div>
                    <div className={style.program_item}>
                        <h4>Beasiswa Dhuafa</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;