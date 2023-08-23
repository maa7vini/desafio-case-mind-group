import styles from '@/styles/home.module.css'

import Navbar from '@/components/Navbar/Navbar'
import CardCurso from '@/components/CardCurso/CardCurso'

import Logo from '@/assets/react-logo.png'

export default function Home(){
    return(
        <>
            <main className={styles.container}>

                <Navbar />

                <div className={styles.containerCursos}>

                    <h1 className={styles.tituloHome}> Cursos </h1>

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        conteudo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took.'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        conteudo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took.'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        conteudo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took.'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        conteudo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took.'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                </div>

            </main>
        </>
        
    )
}