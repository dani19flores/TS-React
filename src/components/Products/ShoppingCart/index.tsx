import { useDispatch, useSelector } from "react-redux";
import { InitialState, removeProduct } from "../../../state/products.slice";
import { ListProductContainer } from "./style";
import ShoppingCartList from "./ShoppingCartList";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state : { products: InitialState } ) => state.products.shoppingCart);

    const handleCartRemove = (id : number) => {
        dispatch(removeProduct(id));
    }

    return (
        <ListProductContainer>
            {
                shoppingCart && shoppingCart.map(item => (
                    
                    <ShoppingCartList
                        key={item.id}
                        product={item}
                        onRemove={() => handleCartRemove(item.id)}
                    />
                ))
            }
        </ListProductContainer>
    )
}

export default ShoppingCart;
