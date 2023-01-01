import { CartInfos } from "./style"

export function TotalCart ({productsSumValue}) {
    return (
    <CartInfos className="displayFlex justifyContentBetween cartMobile">
        <p className="totalTitle">Total</p>
        <p className="totalPriceCart">R$ {productsSumValue.toFixed(2)}</p>
    </CartInfos>
    )
}