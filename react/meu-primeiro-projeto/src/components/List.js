// Usando fragment no React: Ele substitui o elemento pai (uma div por exemplo) para que não seja necessário usá-lo obrigatoriamente. O Fragment é representado por tags vazias (<></>).
// Serve para simplificação do DOM.

import Item from "./Item"

function List() {
    return (
        <> 
            <h1>Minha Lista de Veículos</h1>
            <ul>
                <Item modelo="Chevrolet Celta"/>
                <Item modelo="Nissan Kics" />
                <Item modelo="Nissan 350 LT" />
                <Item modelo="Nissan Skyline" />
            </ul>
        </>        
    )
}

export default List