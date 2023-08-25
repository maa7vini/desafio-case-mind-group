import styles from '@/styles/cadastro.module.css'

import CustomButton from '@/components/CustomButton/CustomButton'
import CustomInput from '@/components/CustomInput/CustomInput'

import Image from 'next/image'
import Logo from '@/assets/logo-mindgroup.webp'
import Head from 'next/head'

export default function Cadastro(){
    return(
        <>

            <Head>

                <title> Projeto Mind Group - Cadastro </title>

                <meta property='og:title' content='Projeto Mind Group - Login' key="title"/>

            </Head>
        
            <main className={styles.container}>

                <div className={styles.containerL}>

                    <h1> Cadastro </h1>

                    <form className={styles.form}>
                        <CustomInput 
                            label='Nome'
                            placeholder='Digite seu nome...'
                            type='text'
                        />

                        <CustomInput 
                            label='Email'
                            placeholder='Digite seu email...'
                            type='email'
                        />

                        <CustomInput 
                            label='Senha'
                            placeholder='Crie uma senha...'
                            type='password'
                        />

                        <CustomButton 
                            texto='Cadastrar'
                            type='primary'
                        />
                    </form>

                </div>

                <div className={styles.containerR}>

                    <Image src={Logo} alt='Logo'/>

                </div>

            </main>
        
        </>
    )
}