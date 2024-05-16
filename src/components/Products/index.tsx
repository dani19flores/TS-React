import React, { useEffect } from "react";
import {ContainerProducts} from "./style";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from './ProducstList';
import { InitialState, Product, fetchProducts } from "../../state/products.slice";
import ShoppingCart from './ShoppingCart';
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../state/status";



interface props
{
    visible: boolean;
}

const Products = ({visible}:props) : JSX.Element => {
    const dispatch = useDispatch();
    const products = useSelector((state : { products: InitialState }) => state.products.products); 
    const status = useSelector((state : { products: InitialState }) => state.products.status);
    useEffect(() => {
        const fetchData = async () => {
            if (status === IDLE) {
                await dispatch(fetchProducts() as any);
            }
        };
        fetchData();
    }, [dispatch, status]);
    return (
        <ContainerProducts>
            <h1>Products</h1>
            {
                (products && status === SUCCEEDED ) && <ProductsList shows={products} />
            }
            {
                visible && <ShoppingCart />
            }
            {
                status === LOADING && <p>Cargando tareas ....</p>
            }

            {
                status === FAILED && <p>Ha habido un problema</p>
            }
        </ContainerProducts>
    );
};

export default Products;
