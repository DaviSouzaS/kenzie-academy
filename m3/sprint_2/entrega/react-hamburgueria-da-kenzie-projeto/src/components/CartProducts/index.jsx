import { ButtonRemoveInCart } from "../Buttons"
import { StyledCartProducts } from "./style"

export function CartProducts({item, listProducts, setCurrentSale}) {
    
    function removeProduct (id) {
      const removeProduct = listProducts.filter((product) => product.id !== id)
      setCurrentSale(removeProduct)
    }

  return (
  <StyledCartProducts key={item.id} className = "cartMobile">
    <div className="productImgCart">
      <img src={item.img} alt={item.name} />
    </div>
    
    <div className="productCartInfos">
      <span className="productCartBox1 displayFlex justifyContentBetween">
        <p>{item.name}</p>
        <ButtonRemoveInCart removeProduct={removeProduct} item = {item}/>
      </span>

      <span className="productCartBox2 displayFlex justifyContentBetween">
        <p>{item.category}</p>
      </span>
    </div>
  </StyledCartProducts>
  )
}
