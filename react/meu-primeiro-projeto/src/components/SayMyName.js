import styles from './Frases.module.css'

function SayMyName(props) {
    
    return (
         <div className={styles.frasesContainer}>
            <p className={styles.frasesContent}>Fala aê, {props.nome}, suave?</p>
         </div>
    )

};

export default SayMyName;
