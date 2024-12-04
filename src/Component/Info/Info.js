import InfoContent from './Content/InfoContent';
import style from './Info.module.css'
import ViMi from './Visi-Misi/Visi-Misi';

const Info = () => {
    return (
        <div className={style.container_info}>

            <h1>Program Kami</h1>

            <ViMi />
            <InfoContent />

        </div>
    )
}

export default Info;