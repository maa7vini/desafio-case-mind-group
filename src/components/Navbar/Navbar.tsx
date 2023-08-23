import styles from './Navbar.module.css'

import Image from 'next/image'

import Logo from '@/assets/logo-mindgroup.webp'

import { FiPlus } from 'react-icons/fi'
import { SlLogout } from 'react-icons/sl'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function Navbar(){
    return(
        <nav className={styles.nav}>

            <Image src={Logo} alt='Logo'/>

            <div className={styles.navInput}>
                <HiMagnifyingGlass style={{color: 'rgb(241, 241, 241)', fontSize: '30px'}}/>

                <input type="text" placeholder='Procurar...'/>
            </div>

            <div className={styles.menu}>

                <p> Bem vindo Samandra </p>

                <div className={styles.curso}>

                    <FiPlus style={{color: 'rgb(241, 241, 241)', fontSize: '30px'}}/>

                    <span> Novo curso </span>

                </div>

                <div className={styles.logout}>

                    <SlLogout style={{color: 'rgb(241, 241, 241)', fontSize: '25px'}}/>

                    <span> Logout </span>

                </div>

            </div>

        </nav>
    )
}