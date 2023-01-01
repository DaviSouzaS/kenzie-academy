import { useContext } from "react";
import { FinancialContext } from "../../contexts/FinancialContext";

export function TotalValue() {

    const { totalValue } = useContext(FinancialContext)
    
  return (
    <div>
        <div>
            <p>Valor total:</p>
            <p>R$ {totalValue}</p>
        </div>
        <p>O valor se refere ao saldo</p>
    </div>
  );
}
