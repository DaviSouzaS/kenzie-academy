import { ButtonAddInCart } from "../Buttons"
import { StyledProducts } from "./styles"

export function Product ({item, handleClick}) {
    
    return (
        <StyledProducts key={item.id} className = "procutMobile"> 
            <div className="imgProductBox displayFlex justifyContentCenter alignItems">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="productInfosBox">
            <p className="productName">{item.name}</p>
            <p className="productCategory">{item.category}</p>
            <p className="productPrice">R$ {item.price}</p>
            <ButtonAddInCart handleClick = {handleClick} item = {item}/>
            </div>
        </StyledProducts>
    )
}