import React from 'react';

import {
    Section_container,
    Container_List,
    Title_product, 
    Imagen_product, 
    Prices_container, 
    Price_product, 
    Add_product
} from "./style";

import { useDispatch } from 'react-redux';
import { Product, addProducts } from "../../../state/products.slice";

const cleanImageUrl = (url : string) => {
    return url.replace(/^\["|"\]$/g, '').replace('[', '').replace(']', '').replace('"', '');
};

const ProductsList : React.FC<{ shows: Product[] }> = ({ shows }) => {
    const dispatch = useDispatch();

    const handle_addProduct = (product : Product) => {
        dispatch(addProducts(product));
    }

    return (
        <Section_container>
            {shows.map(show => (
                <Container_List key={show.id}> 
                    <Imagen_product src={cleanImageUrl(show.images[0])}></Imagen_product>
                    <Title_product>{show.title}</Title_product>
                    <Prices_container>
                        <Price_product>${(show.price * 17).toLocaleString()}</Price_product>
                        <Add_product onClick={() => handle_addProduct(show)}>Add To Cart</Add_product>
                    </Prices_container>
                </Container_List>
            ))}
        </Section_container>
    );
};

export default ProductsList;
