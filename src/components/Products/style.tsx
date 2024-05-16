import styled, { keyframes } from "styled-components";

interface focused{
    isFocused:Boolean
}

const SearchContainer = styled.section`
    margin-bottom: 20px;
    box-sizing: border-box;
`;

const SearchInput = styled.input<focused>`
    padding: 10px;
    width: 90%;
    border: 1px solid ${({isFocused}) => (isFocused ? '#007bff' : '#ccc')};
    border-radius: 5px;
    font-size: 16px;
    outline: none;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #007bff;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const ContainerProducts = styled.article`
    display: flex;
    justify-content: space-between;
`;

export { SearchContainer, SearchInput, ContainerProducts};
