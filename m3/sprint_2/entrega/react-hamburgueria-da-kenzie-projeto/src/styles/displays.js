import { createGlobalStyle } from "styled-components";

export const DisplayStyles = createGlobalStyle`
    
    .displayFlex {
        display: flex;
    }

    .flexDirectionColumn {
        flex-direction: column;
    }

    .justifyContentCenter {
        justify-content: center;
    }

    .justifyContentBetween {
        justify-content: space-between;
    }

    .justifyContentAround {
        justify-content: space-around;
    }

    .alignItems {
        align-items: center;
    }

    .flexWarp {
        flex-wrap: wrap;
    }

    .gap30 {
        gap: 30px;
    }

    @media(max-width: 900px) {

        

        .inputSearchMobile {
            width: 95%;
            padding: 0 10px 0 10px;
            margin-top: 14px;
        }

        .headerMobile {
            height: 139px;
        }

        .gapMobile5 {
            gap: 5px;
        }

        .gapMobile20 {
            gap: 20px;
        }

        .productListMobile {
            flex-wrap: nowrap;
            width: 95%;
            overflow-x: auto;
        }

        .procutMobile {
            min-width: 260px;
        }

        .mobileContainer {
            margin: 0 auto; 
        }

        .cartMobile {
            width: 90%;
        }

        .buttonRemoveAllMobile {
            width: 90%;
        }

        .principalBoxMobile {
            margin-bottom: 20px;
        }

        .justifyContentCenterMobile {
            justify-content: center;
        }

        .flex-start-mobile {
            justify-content: flex-start;
        }

        .alignItemsMobile {
            align-items: center;
        }

        .flexDirectionColumnMobile {
            flex-direction: column
        }
    }
`