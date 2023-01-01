import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FinancialContext } from "../../contexts/FinancialContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


export function FormAddValues () {

    const { addNewValue } = useContext(FinancialContext)

    const defaultWaring = "Este campo é obrigatório"

    const validate = yup.object().shape({
        description: yup.string().required(defaultWaring),
        value: yup.string().required(defaultWaring)
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validate)})

    return (
        <form onSubmit={handleSubmit(addNewValue)}>
            <div>
                <label htmlFor="description">Descrição</label>
                <input id="description" type="text" placeholder="Digite aqui sua descrição" {...register("description")}/>
                <p>Ex: Compra de roupas</p>
                {errors.description?.message && <p className="waring">{errors.description.message}</p>} 
            </div>

            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <div>
                        <input id="value" type="number" placeholder="Digite um valor" {...register("value")}/>
                        <p>R$</p>
                    </div>
                    {errors.value?.message && <p className="waring">{errors.value.message}</p>} 
                </div>

                <div>
                    <label htmlFor="type-value">Tipo de valor</label>
                    <select id="type-value" {...register("type")}>
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}