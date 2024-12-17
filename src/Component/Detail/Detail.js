import style from './Detail.module.css'

const Detail = () => {

    const handleClick = () => {
        window.location.href="https://bit.ly/PendaftaranBeasiswaQU"
    }
    
    return (
        <div className={style.container}>
            <div className={style.container_detail}>
                <div className={style.detail_title}>
                    <p>Detail Pages</p>
                </div>
                <div className={`${style.detail_image} ${style.card}`}>
                    <img src='asset/image/program_beasiswa_yatim_piatu.jpg' alt='poster-program-beasiswa' />
                    <div className={style.overlay}></div>
                </div>
                <div className={style.detail_desc}>

                    <p>Menyambut tahun pendidikan ajaran baru 2025/2026 , BeasiswaQu mendapat kepercayaan dari salah satu perusahaan swasta untuk bekerja sama dalam masalah pendidikan </p>
                    <p>BeasiswaQu mencari siswa, santri dan mahasiswa yatim & Piatu dengan kuota 50 orang untuk diajukan sebagai penerima beasiswa pendidikan mulai tahun ajar 2025/2026 </p>
                    <p>Wujudkan Indonesia emas dan berkah dengan terwujudnya pendidikan untuk anak-anak yatim & piatu</p>

                    <div className={style.btn_register} onClick={handleClick}>
                        <p>Daftar Sekarang</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Detail;