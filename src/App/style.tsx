import styled from "styled-components";

const AppContainer = styled.main`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 25px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-sizing: border-box;
    background-color: #000;
`;

const AppHeader = styled.header`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: #000;
    border: 1px solid #e5e7eb;
    padding: 10px 20px;
`;

const HeaderTitle =  styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    color: #fff;
`;

const ShoppingCart_btn = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #e5e7eb;
`;

export { AppContainer, AppHeader, HeaderTitle, ShoppingCart_btn }