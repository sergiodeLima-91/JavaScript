import styles from './Frases.module.css'

function Frase() {
    return (
        <div className={styles.frasesContainer}>
            <p className={styles.frasesContent}>Frase que fica encima!</p>
        </div>
    )
};

export default Frase