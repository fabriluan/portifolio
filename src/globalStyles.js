import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: ${props => props.theme.background};
        font-family: 'Montserrat', san-serif;
        color: ${props => props.theme.text2};
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }

    .marginContent{
        margin-left: 370px;
        padding: 30px; 
        display: flex;
    }
`

export default GlobalStyles