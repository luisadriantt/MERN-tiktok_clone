import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
    }
    h1 {
        font-size: 60px;
        line-height: 0;
    }

    h2 {
        font-size: 20px;
        line-height: 0;
        font-weight: 300;
    }

    h3 {
        font-size: 15px;
        font-weight: 300;
        line-height: 0;
    }

    .bold {
        font-weight: 600;
    }

    .red {
        color:#fe2c55;
    }
    
    p {
        color: grey;
        font-size: 12px;
        line-height: 0;
    }

    hr { 
        display: block; 
        height: 1px;
        border: 0; 
        border-top: 1px solid rgb(227,227,228);
    }
    
    label {
    font-size: 40px;
    line-height: 0; 
    }

    input {
        height: 45px;
        width: 500px;
        font-size: 35px;
        margin-top: -20px;
    }

    button {
        height: 30px;
        width: 100px;
        float: right;
    }

`;
