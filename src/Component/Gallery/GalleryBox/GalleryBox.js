import { SlideshowLightbox } from 'lightbox.js-react';
import style from './GalleryBox.module.css'


const GalleryBox = () => {
    const urlPenerimaBeasiswa = "Asset/image/penerima/"
    return (
        <div className={style.gallery_image}>
            <SlideshowLightbox theme='lightbox' className={style.light_box} showControls={false} showThumbnails={true} roundedImages={true} captionStyle={{ color: "silver" }}>
                <img src={`${urlPenerimaBeasiswa}2.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}3.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}4.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}5.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}6.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}7.png`} alt='img-gallery' width="450px" height="450px"/>
                <img src={`${urlPenerimaBeasiswa}8.png`} alt='img-gallery' width="450px" height="450px"/>
            </SlideshowLightbox>

        </div>
    );
}

export default GalleryBox;