// Usando fragment no React: Ele substitui o elemento pai (uma div por exemplo) para que não seja necessário usá-lo obrigatoriamente. O Fragment é representado por tags vazias (<></>).
// Serve para simplificação do DOM.

import Item from "./Item"

function List() {
    return (
        <> 
            <h1>Minha Lista de Veículos</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault" ano_lancamento={1980}/>
                <Item marca="Wolkswagem" ano_lancamento="1952"/>
            </ul>
        </>        
    )
}

export default List