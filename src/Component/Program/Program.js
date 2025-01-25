import style from "./Program.module.css"
import ProgramItem from "./ProgramItem/ProgramItem";
import data from '../../utils/data_program'

const Program = () => {
    const programs = data;
    return (
        <div className={`${style.container}`}>
            <div className={style.title}>
                <h1>Program</h1>
            </div>
            <div className={style.program_content}>
                <div className={style.program_image}>
                    <img src="Asset/background/program_image.png" alt="program-image" />
                </div>
                <div className={style.programs}>
                    {programs.map((program) => {
                        return <ProgramItem programs={program}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Program;