import style from './Visi-Misi.module.css'

const ViMi = () => {
    return (
        <div className={style.vimi_container}>
            <div className={style.wave_div}>

                <img src='Asset/background/wave_bg.png' alt='wave-bg' />

                <div className={style.overlay}>
                    <h2>Visi</h2>
                    <div className={style.vimi_content}>
                        <h3>Indonesia Cerdas dan kompetitif 2045</h3>
                    </div>
                </div>

            </div>
            <div className={style.wave_div}>

                <img src='Asset/background/wave_bg.png' alt='wave-bg' />

                <div className={style.overlay}>
                    <h2>Misi</h2>
                    <div className={style.vimi_content}>
                        <h3>1. Beasiswa pendidikan Indonesia cerdas</h3>
                        <h3>2. Pendididkan dan pelatihan life skill</h3>
                        <h3>3. Seminar pendidikan nasional dan internasional</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViMi;