import styles from './CustomButton.module.css'

type IPropsCustomButton = {
    texto: string
    type: string
    onClick: () => void
}

export default function CustomButton({texto, type, onClick}: IPropsCustomButton){  
    if(type === 'primary'){

        return(<button className={styles.PrimaryButton} onClick={onClick}> {texto} </button>)

    } else{
        return(<button className={styles.SecondaryButton} onClick={onClick}> {texto} </button>)
    }          
}