import styles from '@/styles/login.module.css'

import CustomInput from '@/components/CustomInput/CustomInput'
import CustomButton from '@/components/CustomButton/CustomButton'

import Image from 'next/image'

import Logo from '@/assets/logo-mindgroup.webp'

export default function Login(){
    return(
        <main className={styles.container}>

            <div className={styles.containerL}>

                <h1> Login </h1>

                <form className={styles.form}>
                    <CustomInput 
                        label='Email'
                        type='email'
                        placeholder='Digite seu email...'
                    />

                    <CustomInput 
                        label='Senha'
                        type='password'
                        placeholder='Digite sua senha...'
                    />

                    <CustomButton 
                        texto='Entrar'
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