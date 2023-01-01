import styled from "styled-components";

export const StyledCartProducts = styled.li`
    width: 345px;
    height: 80px;
    display: flex;
    padding: 0 10px 0 10px;
    margin: 20px 0 20px 0;

    .productImgCart {
        width: 80px;
        height: 80px;
        background-color: #E0E0E0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 70px;
        height: 70px;
    }

    .productCartBox1 {
        margin: 10px 0 10px 10px;
    }

    .productCartBox1 > p {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-5);

    }

    .productCartBox2 {
        margin-left: 10px;
    }

    .productCartBox2 > p {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-6);
        color: var(--grey-50);
    }

    .productCartInfos {
        width: 100%;
    }
`