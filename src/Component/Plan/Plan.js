import { SlideshowLightbox } from "lightbox.js-react";
import style from "./Plan.module.css"

const Plan = () => {
    const test = () => {
        window.location.href = "Asset/background/anggaran_biaya.png"
    }
    return (
        <div className={style.plan_container}>
            <div className={style.overlay}></div>

            <div className={`${style.plan_title} ${style.glass_card}`}>

                <h1>Renaca Anggaran Biaya</h1>
                <h2>(Beasiswa)</h2>

            </div>

            <div className={`${style.plan_table} ${style.forward_index}`}>

                <div className={`${style.img_card} ${style.card}`}>

                <SlideshowLightbox theme='lightbox' className={style.light_box} showControls={false} captionStyle={{ color: "silver" }}>
                        <img src="Asset/background/anggaran_biaya.png" alt="anggaran-biaya-table" width="100%"/>
                    </SlideshowLightbox>





                </div>

            </div>

        </div>
    );
}

export default Plan;