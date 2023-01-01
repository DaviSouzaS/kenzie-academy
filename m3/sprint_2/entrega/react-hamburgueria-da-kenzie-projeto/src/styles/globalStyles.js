import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    :root {
        --color-primary: #27AE60; 
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        --white: #FFFFFF;
        --negative-color: #E60000;
        --warning-color: #FFCD07;
        --sucess-color: #168821;
        --information-color: #155BCB;

        --font-size-1: 26px;
        --font-size-2: 22px;
        --font-size-3: 18px;
        --font-size-4: 16px;
        --font-size-5: 14px;
        --font-size-6: 12px;

        --font-weight-1: 700;
        --font-weight-2: 600;
        --font-weight-3: 400;

        --radius-1: 8px;
        --radius-2: 5px;

        --principal-font: 'Inter', sans-serif; 
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--principal-font);
        color: var(--gray-100);
    }

    .container {
        margin: 0 auto;
        max-width: 1300px;
    }

    

`