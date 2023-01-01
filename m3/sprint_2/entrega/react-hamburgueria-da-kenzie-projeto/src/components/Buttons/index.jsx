import { StyledButtonRemove } from "./style"

export function ButtonAddInCart ({handleClick, item}) {
    return (
        <button className="defaultButton" onClick={()=> handleClick(item.id)}>Adicionar</button>
    )
}

export function ButtonRemoveInCart ({removeProduct, item}) {
    return (
        <button className="buttonRemoveCart" onClick={() => removeProduct(item.id)}>Remover</button> 
    )
}

export function ButtonRemoveAllInCart ({setCurrentSale}) {
    return (
        <StyledButtonRemove className="buttonRemoveAllMobile" onClick={() => setCurrentSale([])}>Remover todos</StyledButtonRemove>
    )
}