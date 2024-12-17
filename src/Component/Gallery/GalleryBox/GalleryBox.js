import { SlideshowLightbox } from 'lightbox.js-react';
import style from './GalleryBox.module.css'
import { useEffect, useState } from 'react';


const GalleryBox = () => {
    const urlPenerimaBeasiswa = "Asset/image/penerima/"
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={style.gallery_image}>
            <SlideshowLightbox theme='lightbox' className={style.light_box} showControls={false} showThumbnails={true} roundedImages={true} captionStyle={{ color: "silver" }}>
                <img src={`${urlPenerimaBeasiswa}2.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}3.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}4.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}5.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}6.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}7.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
                <img src={`${urlPenerimaBeasiswa}8.png`} alt='img-gallery' width={screenWidth <= 500 ? "350px" : "450px"} height={screenWidth <= 500 ? "350px" : "450px"}/>
            </SlideshowLightbox>

        </div>
    );
}

export default GalleryBox;