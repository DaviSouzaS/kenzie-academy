import styled from "styled-components";

export const StyledInputSearch = styled.form`
    width: 365px;
    height: 60px;
    background-color: var(--white);
    border: 2px solid var(--grey-20);
    border-radius: var(--radius-1);
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        width: 203px;
        height: 19px;
        font-family: var(--principal-font);
    }
    
    input::placeholder {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-3);
        color: var(--grey-20);
        font-family: var(--principal-font);
    }

    input:focus {
        outline: none;
    }
`

