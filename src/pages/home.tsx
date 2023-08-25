import styles from '@/styles/home.module.css'

import Navbar from '@/components/Navbar/Navbar'
import CardCurso from '@/components/CardCurso/CardCurso'

import Logo from '@/assets/react-logo.png'

import Head from 'next/head'

export default function Home(){
    return(
        <>

            <Head>

                <title> Projeto Mind Group - Home </title>

                <meta property='og:title' content='Projeto Mind Group - Login' key="title"/>

            </Head>

            <Navbar />

            <main className={styles.container}>

                <div className={styles.containerCursos}>

                    <h1 className={styles.tituloHome}> Cursos </h1>

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                    <CardCurso 
                        titulo='Curso de ReactJS'
                        imagem={Logo}
                        categoria='Tecnologia'
                        professorResponsavel='Samandra'
                    />

                </div>

            </main>
        </>
        
    )
}