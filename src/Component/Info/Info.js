import InfoContent from './Content/InfoContent';
import style from './Info.module.css'
import Structure from './Structure/Structure';
import ViMi from './Visi-Misi/Visi-Misi';

const Info = () => {
    return (
        <div className={style.container_info}>

            <p>Profile</p>

            <ViMi />
            <InfoContent />
            <Structure />

        </div>
    )
}

export default Info;