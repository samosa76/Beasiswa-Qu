import style from './Banner.module.css'

const Banner = () => {
    return (
        <div className={style.container_fluid}>
            <div className={style.banner_info}>
                <h1>Banner Info</h1>
            </div>
            <div className={style.banner_background}>
                <img src='https://picsum.photos/id/36/2000/480' className={style.image_banner} alt='banner-image'/>
            </div>
        </div>
    )
}

export default Banner;