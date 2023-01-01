import styled from "styled-components";

export const StyledCart = styled.aside`

    width: 365px;

    .titleCart {
        height: 65px;
        background-color: var(--color-primary);
        border-radius: var(--radius-2) var(--radius-2) 0px 0px;
        padding-left: 20px;
    }

    .titleCart > p {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--white);
    }

    ul {
        list-style: none;
        max-height: 320px;
        background-color: var(--grey-0);
        overflow-y: auto;
        overflow-x: hidden;
    }

    .totalCartBox {
        border-top: 2px solid var(--grey-20);
        height: 140px;
        background-color: var(--grey-0);
        border-radius: 0 0 var(--radius-2) var(--radius-2);
    }

    .emptyCart {
        background-color: var(--grey-0);
        height: 158px;
    }

    .waringEmptyCart {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        margin-bottom: 10px;
    }

    .waringAddProducts {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-5);
        color: var(--grey-50);
    }
`