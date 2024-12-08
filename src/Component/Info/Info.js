import InfoContent from './Content/InfoContent';
import style from './Info.module.css'
import ViMi from './Visi-Misi/Visi-Misi';

const Info = () => {
    return (
        <div className={style.container_info}>

            <p>Program Kami</p>

            <ViMi />
            <InfoContent />

        </div>
    )
}

export default Info;