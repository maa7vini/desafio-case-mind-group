import styles from '@/styles/login.module.css'

import CustomInput from '@/components/CustomInput/CustomInput'
import CustomButton from '@/components/CustomButton/CustomButton'

import Image from 'next/image'

import Logo from '@/assets/logo-mindgroup.webp'
import api from '@/services/api'
import Head from 'next/head'

import { useState } from 'react'


export default function Login(){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function autenticacao(email: any, senha: any) {

        const payLoad = {"email": email, "senha": senha} 

        const res = await api.post("usuario/login", payLoad)

        alert(res.data)

    }

    return(
        <>

            <Head>
                <title> Projeto Mind Group - Login </title>

                <meta property='og:title' content='Projeto Mind Group - Login' key="title"/>
            </Head>
        
            <main className={styles.container}>

                <div className={styles.containerL}>

                    <h1> Login </h1>

                    <form className={styles.form}>
                        <CustomInput 
                            label='Email'
                            type='email'
                            placeholder='Digite seu email...'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <CustomInput 
                            label='Senha'
                            type='password'
                            placeholder='Digite sua senha...'
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <CustomButton 
                            texto='Entrar'
                            type='primary'
                            onClick={() => autenticacao(email, senha)}
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