import { useEffect, useState } from "react";
import { api } from "./services/api";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    
    async function getItems() {

      try {
        const response = await api.get('/products')
        setProducts(response.data)
      } catch (error) {
      }
    }

    getItems()
  }, [])

  function handleClick (productId) {
    const FoundProduct = products.find(element => element.id === productId)

    setCurrentSale([...currentSale, FoundProduct])
  }

  return (
    <div className="App">
      <Header/>
      <div className="displayFlexMobile justifyContentCenter alignItemsCenterMobile">
      <main className="displayFlex container justifyContentBetween flexDirectionColumnMobile gapMobile20 principalBoxMobile">
      <ProductsList products = {products} handleClick = {handleClick}/>
      <Cart currentSale = {currentSale} setCurrentSale = {setCurrentSale}/>
      </main>
      </div>
    </div>
  );
}

export default App;
