import { createContext, useState } from "react";

export const FinancialContext = createContext();

export function FinancialProvider({ children }) {

    const [listTransactions, setListTransactions] = useState([])
    const [ id, setId ] = useState(1)
    console.log(listTransactions)

    function addNewValue (data) {
        setId(id + 1)
        const addID = {id: id}
        Object.assign(data, addID)
        setListTransactions([...listTransactions, data])
    }

    function deleteValue (id) {
        const removeValue = listTransactions.filter((item) => item.id !== id)
        setListTransactions(removeValue)
    }

    const initalValue = 0
    const totalValue = listTransactions.reduce((accumulator, currentValue) => accumulator + Number(currentValue.value) , initalValue)

  return (
    <FinancialContext.Provider
      value={{
        addNewValue,
        listTransactions,
        totalValue,
        deleteValue
       }}>
      {children}
    </FinancialContext.Provider>
  );
}
