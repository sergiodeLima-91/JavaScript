import PropTypes from 'prop-types'
// Validação de dados através do módulo PropTypes.

function Item({marca, ano_lancamento}) {
    
    return (
        <>
            <p>{marca} - {ano_lancamento}</p>
        </>
    )
}

// O módulo PropTypes possui uma propriedade chamada propType. Não confundir!
Item.protoType = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}
export default Item