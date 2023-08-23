import styles from './CustomInput.module.css'

type IPropsCustomInput = {
    label: string
    type: string
    placeholder: string
}

export default function CustomInput({label, type, placeholder}: IPropsCustomInput){
    return(
       <>
            <label> {label} </label>
            <input type={type} placeholder={placeholder} className={styles.CustomInput}/>
       </>
    )
}