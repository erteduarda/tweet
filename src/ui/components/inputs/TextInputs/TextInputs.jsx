import styles from './TextInputs.module.css';

export default function TextInputs(props) {
    return (
        <div>
            <textarea className={styles['input']} {...props}/>
        </div>
    )
}