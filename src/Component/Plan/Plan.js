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
                <img src="asset/icon/banner-logo.png"/> 
            </div>
            
        </div>
    );
}

export default Plan;