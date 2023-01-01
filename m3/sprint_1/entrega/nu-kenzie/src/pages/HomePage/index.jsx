import { useContext } from "react"
import { Header } from "../../components/Header"
import { FormAddValues } from "../../components/FormAddValues"
import { FinancialSummary } from "../../components/FinancialSummary"
import { TotalValue } from "../../components/TotalValue"
import { FinancialContext } from "../../contexts/FinancialContext"

export function HomePage () {

    const { listTransactions } = useContext(FinancialContext)

    return (
        <div>
            <Header/>
            <div>
                <FormAddValues/>
                {
                    listTransactions.length !== 0 && <TotalValue/>
                }
            </div>
            <FinancialSummary/>
        </div>
    )
}