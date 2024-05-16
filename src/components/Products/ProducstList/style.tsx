import styled from "styled-components";

const Section_container = styled.section`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
`;

const Container_List = styled.section`
    display: block;
    margin: 10px;
    background-color: #000;
    width: 15rem;
    border: 1px solid #e5e7eb;
    padding: 1rem;
`;

const Title_product = styled.h3`
    font-size: 1.25rem;
    line-height: 1.75rem;
    height: auto;
    margin-bottom: .5rem;
    color: #fff;
    word-wrap: break-word;
`;

const Imagen_product = styled.img`
    min-width: 13rem;
    min-height: 13rem;
    width: 15rem;
    height: 15rem;
    border-radius: .5rem;
    margin-bottom: 1.75rem;
    box-sizing: border-box;
`;

const Prices_container = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Price_product = styled.p`
    color: #fff;
    margin: 0.5rem;
`;

const Add_product = styled.button`
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin: 0.5rem;
    background-color: #703BF7;
    text-align: center;
    color: #fff;
    border-radius: 0.5rem;
    height: 2rem;
    cursor: pointer;
`;

export {Section_container,Container_List,Title_product,Imagen_product,Prices_container,Price_product,Add_product};
