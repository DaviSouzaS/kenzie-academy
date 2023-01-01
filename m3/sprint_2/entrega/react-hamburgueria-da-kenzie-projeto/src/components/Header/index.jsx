import { InputSearch } from "../InputSearch"
import { StyledHeader } from "./style"
import logoKenzie from "../../assets/logo.svg"

export function Header () {
    return ( 
        <StyledHeader className="headerMobile">
            <div className="container headerBox displayFlex justifyContentBetween flexDirectionColumnMobile alignItemsMobile">
                <img src={logoKenzie} alt="logo-kenzie-hamburgueria" />
                <InputSearch/>
            </div>
        </StyledHeader>
    )
}