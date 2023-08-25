import styles from './CustomInput.module.css'

interface IPropsCustomInput extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> {
    label: string
    type: string
    placeholder: string
}

export default function CustomInput({label, type, placeholder, ...rest}: IPropsCustomInput){
    return(
       <>
            <label> {label} </label>
            <input type={type} placeholder={placeholder} className={styles.CustomInput} {...rest}/>
       </>
    )
}