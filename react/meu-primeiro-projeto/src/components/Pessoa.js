import styles from './Frases.module.css'

function Pessoa({foto, nome, idade, profissao}) {

    return (
        <div>
            <img className={styles.fotoMargin} src={foto} alt="{props.nome}"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
};

export default Pessoa;
