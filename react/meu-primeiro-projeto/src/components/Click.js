function Evento({acionador}) {
    function meuEvento() {
        alert(`Opa, fui ativado por ${acionador}`)
    }

    return (
        <dv>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </dv>
    )
}

export default Evento;