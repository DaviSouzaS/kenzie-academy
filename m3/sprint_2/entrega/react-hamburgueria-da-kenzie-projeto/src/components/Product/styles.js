import styled from "styled-components";

export const StyledProducts = styled.li`
    width: 260px;
    height: 326px;
    background-color: var(--white);
    border: 2px solid var(--grey-20);
    border-radius: var(--radius-2);
    margin-bottom: 12px;

    .imgProductBox {
        background-color: var(--grey-0);
        width: 100%;
        height: 150px;
    }

    p {
        margin-bottom: 14px;
    }

    .productInfosBox {
        padding: 0 19px 0 21px;
    }

    img {
        width: 162px;
        height: 162px;
    }

    .productName {
        margin-top: 26px;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
    }

    .productCategory {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-4);
        color: var(--grey-50);
    }

    .productPrice {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-5);
        color: var(--color-primary);
    }
`