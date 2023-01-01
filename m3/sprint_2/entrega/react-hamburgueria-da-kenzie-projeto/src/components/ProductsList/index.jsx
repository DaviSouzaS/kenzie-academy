import { Product } from "../Product/index"
import { StyledProductsList } from "./styles"

export function ProductsList ({products, handleClick}) {
    return (
        <StyledProductsList className="displayFlex justifyContentAround flexWarp productListMobile mobileContainer gapMobile20 flex-start-mobile">
            {
            products.map(item => 
                <Product key={item.id} item = {item} handleClick={handleClick}/>
            )
            }
        </StyledProductsList>
    )
}