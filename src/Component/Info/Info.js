import style from './Info.module.css'

const Info = () => {
    return (
        <div className={style.container_info}>
            
            <div className={style.vimi_container}>
                <div className={style.wave_div}>

                    <img src='Asset/background/wave_bg.png' />

                    <div className={style.overlay}>
                        <h2>Visi</h2>
                        <div className={style.vimi_content}>
                            <p>Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetimLorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim</p>
                        </div>
                    </div>

                </div>
                <div className={style.wave_div}>

                    <img src='Asset/background/wave_bg.png' />

                    <div className={style.overlay}>
                        <h2>Misi</h2>
                        <div className={style.vimi_content}>
                            <p>Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetimLorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim Lorem ipsum sit amet dolor que paso nique bulores dor miques dot nilas meetim</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Info;