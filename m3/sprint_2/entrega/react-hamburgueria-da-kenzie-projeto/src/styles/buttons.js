import { createGlobalStyle } from "styled-components";

export const ButtonStyles = createGlobalStyle`

    .defaultButton {
        cursor: pointer;
        width: 106px;
        height: 40px;
        background-color: var(--color-primary);
        color: var(--white);
        border: none;
        border-radius: var(--radius-1);
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-5);
    }

    .defaultButton:hover {
        transition-duration: 0.3s;
        background-color: var(--color-primary-50);
    }

    .buttonRemoveCart {
        cursor: pointer;
        background-color: transparent;
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-6);
        color: var(--grey-50);
        border: none;
    }

    .buttonRemoveCart:hover {
        transition-duration: 0.3s;
        color: var(--gray-100);
    }

    .buttonRemoveAll {
        
    }

    .buttonRemoveAll:hover {
        transition-duration: 0.2s;
        background-color: var(--grey-50);
        color: var(--grey-20);
    }
`