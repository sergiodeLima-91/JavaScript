// Aplicando Hook ao projeto:
import { useState } from 'react'

function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault()
        alert(`Usuário de nome ${name} foi cadastrato com a senha ${password}`)
    }

    const [name,setName] = useState()
    const [password,setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome aqui" 
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    onCanPlay={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form
