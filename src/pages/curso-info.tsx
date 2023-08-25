import styles from '@/styles/curso-info.module.css'

import Navbar from '@/components/Navbar/Navbar'

import Image from 'next/image'

import Logo from '@/assets/react-logo.png'

import Head from 'next/head'

export default function CursoInfo(){
    return(
        <>

            <Head>

                <title> Projeto Mind Group - Curso Info </title>

                <meta property='og:title' content='Projeto Mind Group - Login' key="title"/>

            </Head>
        
            <main className={styles.container}>

            <Navbar />

            <div className={styles.containerInfo}>

                <div className={styles.cursoInfo}>

                    <div className={styles.top}>

                        <Image src={Logo} alt='Logo'/>

                    </div>

                    <div className={styles.bottom}>

                        <div className={styles.nomeCurso}>

                            <label> Nome do curso </label>
                            <h3> Curso de ReactJS </h3>

                        </div>

                        <div className={styles.categoriaCurso}>

                            <label> Categoria </label>
                            <h3> Tecnologia </h3>

                        </div>

                        <div className={styles.professorCurso}>

                            <label> Professor/a responsável </label>
                            <h3> Samandra </h3>

                        </div>

                        <div className={styles.descricaoCurso}>

                            <label> Descricao </label>
                            <h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Iure quaerat laborum qui blanditiis, corrupti iusto sunt illum ex neque, 
                            vitae aliquam, consectetur cum cupiditate rem eligendi quam fugit? Dicta, vero? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam repellendus, 
                            perferendis totam mollitia voluptate ratione. Ullam beatae nisi at voluptas sapiente 
                            fugiat obcaecati nesciunt voluptatibus? Saepe beatae animi tempora. </h3>

                        </div>

                    </div>

                </div>

            </div>

            </main>
        
        </>
    )
}