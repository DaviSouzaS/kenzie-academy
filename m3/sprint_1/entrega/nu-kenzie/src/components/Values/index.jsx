import { useContext } from "react"
import trashIcon from "../../assets/trash.svg"
import { FinancialContext } from "../../contexts/FinancialContext"

export function Values ({item}) {

    const { deleteValue } = useContext(FinancialContext)
    
    return (
        <li>
            <div>
                <p>{item.description}</p>
                <p>R$ {item.value},00</p>
                <button type="click" onClick={() => deleteValue(item.id)}><img src={trashIcon} alt="trash-icon" /></button>
            </div>
            <p>{item.type}</p>
        </li>
    )
}