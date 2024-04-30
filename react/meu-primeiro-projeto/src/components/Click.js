import Button from "./eventos/Button"

function Evento({acionador}) {
    function meuEvento() {
        alert(`Opa, fui ativado por ${acionador}`)
    }

    function segundoEvento(acionador) {
        alert('Segundo evento ativado!')
    }

    function terceiroEvento(acionador) {
        alert('Dá pra usar o mesmo evento diversas vezes! 😁')
    }
    // É plenamente possível usar o mesmo componente (Button, no caso) diversas vezes ✨
    return (
        <div>
            <p>Clique para disparar eventos de clique abaixo 🔽</p>
            
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <Button event={terceiroEvento} text="Terceiro Evento"/>
        </div>
    )
}

export default Evento;