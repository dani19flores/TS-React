import { Product } from "../../../../state/products.slice";
import { DataContainer, Imagen_product, Price_product, RemoveButton, Title_product } from "./style"

const cleanImageUrl = (url : string) => {
    return url.replace(/^\["|"\]$/g, '').replace('[', '').replace(']', '').replace('"', '');
};

const ShoppingCartList : React.FC<{ product: Product; onRemove: (id: number) => void }> = ({product ,onRemove}) =>{
    return(
        <section>
            <Imagen_product src={cleanImageUrl(product.images[0])}></Imagen_product>
            <DataContainer>
                <Title_product>{product.title}</Title_product>
                <Price_product>${(product.price * 17).toLocaleString()}</Price_product>
                <RemoveButton onClick={() => onRemove(product.id)}>Remove</RemoveButton>
            </DataContainer>
        </section>
    )
}

export default ShoppingCartList;
