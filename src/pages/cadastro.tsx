import styles from '@/styles/cadastro.module.css'

import CustomButton from '@/components/CustomButton/CustomButton'
import CustomInput from '@/components/CustomInput/CustomInput'

import Image from 'next/image'
import Logo from '@/assets/logo-mindgroup.webp'

export default function Cadastro(){
    return(
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
                        placeholder='Crie seu email...'
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
    )
}