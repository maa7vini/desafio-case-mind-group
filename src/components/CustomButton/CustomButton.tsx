import styles from './CustomButton.module.css'

type IPropsCustomButton = {
    texto: string
    type: string
}

export default function CustomButton({texto, type}: IPropsCustomButton){  
    if(type === 'primary'){

        return(<button className={styles.PrimaryButton}> {texto} </button>)

    } else{
        return(<button className={styles.SecondaryButton}> {texto} </button>)
    }          
}