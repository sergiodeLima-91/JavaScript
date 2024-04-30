import { useState } from "react";

function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        alert('Testando')
    }

    const [email, setEmail] = useState()

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email"></input>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>
        </div>
    )
}

export default Condicional