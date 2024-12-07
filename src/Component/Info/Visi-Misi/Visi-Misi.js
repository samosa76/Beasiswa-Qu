import style from './Visi-Misi.module.css'

const ViMi = () => {
    return (
        <div className={style.vimi_container}>
            <div className={style.wave_div}>

                <img src='Asset/background/wave_bg.png' alt='wave-bg' />

                <div className={style.overlay}>
                    <h2>Visi</h2>
                    <div className={style.vimi_content}>
                        <h2>Indonesia Cerdas dan kompetitif 2045</h2>
                    </div>
                </div>

            </div>
            <div className={style.wave_div}>

                <img src='Asset/background/wave_bg.png' alt='wave-bg' />

                <div className={style.overlay}>
                    <h2>Misi</h2>
                    <div className={style.vimi_content}>
                        <h2>1. Beasiswa pendidikan Indonesia cerdas</h2>
                        <h2>2. Pendididkan dan pelatihan life skill</h2>
                        <h2>3. Seminar pendidikan nasional dan internasional</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViMi;