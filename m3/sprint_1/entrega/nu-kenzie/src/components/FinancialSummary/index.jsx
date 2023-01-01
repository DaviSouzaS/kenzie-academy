import { useContext } from "react"
import { FinancialContext } from "../../contexts/FinancialContext"
import { Values } from "../Values"

export function FinancialSummary () {

    const { listTransactions } = useContext(FinancialContext)

    return (
        <div>
            <div>
                <p>Resumo financeiro</p>
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
            </div>

            <div>
                { listTransactions.length === 0 ?
                <p>Você ainda não possui nenhum lançamento</p>
                :
                <ul>
                    {
                        listTransactions.map((item) => (<Values item = {item}/>))
                    }
                </ul>
                }
            </div>
        </div>
    )
}