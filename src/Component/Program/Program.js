import style from "./Program.module.css"
import ProgramItem from "./ProgramItem/ProgramItem";

const Program = () => {
    return (
        <div className={`${style.container}`}>
            <div className={style.program_title}>
                <h1>Our Programs</h1>
            </div>
            <div className={style.program_content}>
                <div className={style.content_image}>
                    <img src="https://picsum.photos/400" alt="program-image" />
                </div>

                <div className={style.content_programs}>
                    
                    <ProgramItem title="Beasiswa Al-Qur'an"/>
                    <ProgramItem title="Beasiswa Kader Bangsa"/>
                    <ProgramItem title="Beasiswa Prestasi"/>
                    <ProgramItem title="Beasiswa Dhuafa"/>
                </div>
            </div>
        </div>
    )
}

export default Program;