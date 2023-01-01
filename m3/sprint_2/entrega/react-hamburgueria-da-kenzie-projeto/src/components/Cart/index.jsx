import { CartProducts } from "../CartProducts";
import { ButtonRemoveAllInCart } from "../Buttons"
import { TotalCart } from "../TotalCart";
import { StyledCart } from "./style";

export function Cart({ currentSale, setCurrentSale}) {

    const initalValue = 0
    const productsSumValue = currentSale.reduce((accumulator, currentValue) => accumulator + currentValue.price,initalValue)

    function validateCart () {
    if (currentSale.length === 0) {
      return <div className="emptyCart displayFlex flexDirectionColumn justifyContentCenter alignItems">
      <p className="waringEmptyCart">Sua sacola está vazia</p>
      <p className="waringAddProducts">Adicione itens</p>
    </div>
    }
    else {
      return <div>
      <ul>
      {
        currentSale.map(product => <CartProducts key={product.id} item = {product} listProducts = {currentSale} setCurrentSale = {setCurrentSale}/>
        )
      }
      </ul>
      <div className="totalCartBox displayFlex flexDirectionColumn justifyContentCenter alignItems">
        <TotalCart productsSumValue = {productsSumValue}/>
        <ButtonRemoveAllInCart currentSale = {currentSale} setCurrentSale = {setCurrentSale}/>
      </div>

    </div>
    }
  }
  return (
    <StyledCart className="displayFlex flexDirectionColumn cartMobile mobileContainer">
      
      <div className="titleCart displayFlex alignItems">
        <p>Carrinho de compras</p>
      </div>
      
      { validateCart() }
      
    </StyledCart>
  );
}