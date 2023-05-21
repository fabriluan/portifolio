import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', san-serif;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: ${props => props.theme.background};
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
        padding: 15px 30px; 
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1260px){
            padding: 80px 0; 
            margin-left: 0px;
        }
    }

`

export default GlobalStyles