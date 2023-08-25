import styles from '@/styles/dashboard.module.css'

import Navbar from '@/components/Navbar/Navbar'
import Tabela from '@/components/Tabela/Tabela'

import Head from 'next/head'

export default function Dashboard(){   
    return(
        
        <>

            <Head>

                <title> Projeto Mind Group - Dashboard </title>

                <meta property='og:title' content='Projeto Mind Group - Login' key="title"/>

            </Head>

            <div className={styles.container}>

                <Navbar />

                <div className={styles.containerTabela}>

                    <h1> Dashboard Admin </h1>
                    <h2> Cursos cadastrados </h2>

                    <Tabela />

                </div>

            </div>
        </>

        
    )
}