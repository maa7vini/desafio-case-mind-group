import styles from './CardCurso.module.css'

import Image, { StaticImageData } from 'next/image'
import CustomButton from '../CustomButton/CustomButton'
import Link from 'next/link'

type IPropsCardCurso = {
    titulo: string
    professorResponsavel: string
    imagem: StaticImageData
    categoria: string
}

export default function CardCurso({titulo, professorResponsavel, imagem, categoria}: IPropsCardCurso){
    return(
        <main className={styles.cardCurso}>
            <div className={styles.cursoImg}>

                <Image src={imagem} alt='Logo' className={styles.cursoImg}/>

            </div>

            <div className={styles.cursoInfo}> 

                <p> {titulo} </p>

                <span> {`Categoria: ${categoria}`} </span>

                <span> {`Professor(a): ${professorResponsavel}`} </span>

                <Link href='/curso-info' style={{ textDecoration: 'none' }}> 
                
                    <CustomButton 
                        texto='Saiba mais'
                        type='primary'
                    />

                 </Link>

            </div>
        </main>
    )
}


