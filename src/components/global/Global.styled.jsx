import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Special Elite', cursive;
    line-height: 20px;
}

button:hover{
    background-color: #2ab625;
    cursor: pointer;
}


`;
