import style from "./Program.module.css"
import ProgramItem from "./ProgramItem/ProgramItem";

const Program = () => {
    return (
        <div className={`${style.container}`}>
            <div className={style.program_content}>
                <div className={style.program_image}>
                    <img src="asset/background/program_image.png" alt="program-image" />
                </div>
                <div className={style.programs}>
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