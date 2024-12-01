import style from './Gallery.module.css'
import GalleryBox from './GalleryBox/GalleryBox';

const Gallery = () => {
    return (
        <div className={style.container}>
            <div className={style.gallery_title}>
                <h1>Gallery</h1>
            </div>

            <GalleryBox />

        </div>
    )
}

export default Gallery;