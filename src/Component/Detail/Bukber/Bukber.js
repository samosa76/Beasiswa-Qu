import style from './Bukber.module.css'

const Bukber = () => {

    return (
        <div className={style.container}>
            <div className={style.container_detail}>
                <div className={style.detail_title}>
                    <p>Buka Bersama Santri</p>
                </div>
                <div className={`${style.detail_image} ${style.card}`}>
                    <img src='Asset/image/news/santries.jpg' alt='poster-program-beasiswa' />
                    <div className={style.overlay}></div>
                </div>
                
                <div className={style.detail_desc}>

                    <p>BeasiswaQu menyalurkan bantuan berupa buka puasa bagi para santri di Pondok Pesantren IT Multimedia Al Fatih dan Pondok Pesantren Tahfidzul Qur'an Al Wahyu sebagai bentuk kepedulian terhadap pendidikan dan kesejahteraan mereka.</p>
                    <p>Kegiatan ini bertujuan untuk memberikan dukungan bagi para santri dalam menjalankan ibadah puasa dengan lebih baik, sekaligus mempererat kebersamaan di lingkungan pesantren.</p>
                    <p>Dengan adanya bantuan ini, diharapkan para santri dapat lebih fokus dalam menuntut ilmu dan menghafal Al-Qur'an tanpa harus khawatir mengenai kebutuhan berbuka puasa. Program ini juga menjadi salah satu bentuk komitmen BeasiswaQu dalam mendukung pendidikan berbasis pesantren serta meningkatkan kesejahteraan santri di berbagai daerah</p>

                </div>
            </div>
        </div>
    )
}

export default Bukber;