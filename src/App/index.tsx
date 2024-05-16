import { useState } from "react";
import Products from "../components/Products";
import { AppContainer, AppHeader, HeaderTitle, ShoppingCart_btn } from "./style";

function App() {
  const [visible, setVisible] = useState(true)

  const handleVisible = () =>{
      setVisible(!visible);
  }

  return (
    <AppContainer>
        <AppHeader>
            <HeaderTitle>Shop</HeaderTitle>
            <ShoppingCart_btn onClick={handleVisible}>Shopping</ShoppingCart_btn>
        </AppHeader>
        <Products visible={visible}/>
    </AppContainer>
  );
}

export default App;
