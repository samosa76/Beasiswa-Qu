import style from './GalleryBox.module.css'

const GalleryBox = () => {
    return (
        <div className={style.gallery_image}>

            <img src='https://picsum.photos/400' alt='img-gallery' />
            <img src='https://picsum.photos/400' alt='img-gallery' />
            <img src='https://picsum.photos/400' alt='img-gallery' />
            <img src='https://picsum.photos/400' alt='img-gallery' />
            <img src='https://picsum.photos/400' alt='img-gallery' />

        </div>
    );
}

export default GalleryBox;