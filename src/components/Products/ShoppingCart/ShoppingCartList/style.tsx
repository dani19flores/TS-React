import styled from "styled-components";

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
    box-sizing: border-box;
`;

const Price_product = styled.p`
    color: #fff;
    margin: 0.5rem;
`;

const RemoveButton = styled.button`
    padding: 5px;
    background-color: #999;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const DataContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
`;


export { Title_product, Imagen_product, Price_product, RemoveButton, DataContainer}
