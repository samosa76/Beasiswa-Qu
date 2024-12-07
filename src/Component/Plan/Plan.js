import style from "./Plan.module.css"

const Plan = () => {
    return (
        <div className={style.plan_container}>
            <div className={style.overlay}></div>

            <div className={`${style.plan_title} ${style.glass_card}`}>
                
                <h1>Renaca Anggaran Biaya</h1>
                <h2>(Beasiswa)</h2>

            </div>

            <div className={`${style.plan_table} ${style.forward_index}`}>

                <div className={`${style.img_card} ${style.card}`}>

                    <div className={style.overlay_img}></div>
                    <img src="asset/background/anggaran_biaya.png" alt="anggaran-biaya-table"/>

                </div>

            </div>

        </div>
    );
}

export default Plan;