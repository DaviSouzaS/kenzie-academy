import { StyledInputSearch } from "./style"

export function InputSearch () {
    return ( 
        <StyledInputSearch className="inputSearchMobile gap30">
            <input type="text" placeholder="Digitar Pesquisa"/>
            <button className="defaultButton" type="submit">Pesquisar</button>
        </StyledInputSearch>
    )
}