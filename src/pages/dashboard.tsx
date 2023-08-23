import styles from '@/styles/dashboard.module.css'

import Navbar from '@/components/Navbar/Navbar'

import { FiEdit } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

export default function Dashboard(){
    return(
        <div className={styles.container}>

            <Navbar />

            <div className={styles.dashboardContainer}>

                <div className={styles.dashboard}>

                    <div className={styles.title}>

                        <p> Cursos cadastrados </p>

                    </div>

                    <div className={styles.table1}>

                        <h3> Nome </h3>

                        <h3> Status </h3>

                        <h3> Ativar </h3>

                        <h3> Desativar </h3>

                        <h3> Editar </h3>

                    </div>

                    <div className={styles.table2}>
                        
                        <p> ReactJS </p>

                        <p> Ativo </p>

                        <AiOutlineCheck />

                        <AiOutlineClose />

                        <FiEdit />

                    </div>

                </div>

            </div>

        </div>
    )
}