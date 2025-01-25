import style from './ImageBox.module.css'

const ImageBox = (props) => {
    const { structure } = props;
    const { id, name, department } = structure;

    return (
        <div className={style.container}>
            <div className={style.image}>
                <div className={style.overlay}></div>
                <img src='Asset/image/test-img.png' className={style.img_structure} />
            </div>

            <h4>{name}</h4>
            <h4>{department}</h4>
        </div>
    )
}

export default ImageBox;