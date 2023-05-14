import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderSt = styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 20px;
    position: fixed;
    z-index: 99;
    width: 100%;
    max-width: 400px;
    height: 100vh;

    > .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        font-size: 1.7rem;
        font-weight: 600;
        margin-top: 20px;
    }

    img{
        display: flex;
        width: 100%;
        max-width: 220px;
        height: 230px;
        object-fit: cover;
        object-position: 100% 0%;
        border-radius: 100% 100%;
    }

    nav{
        position: relative;

        button{
            border: 0;
            display: none;
            cursor: pointer;
            background-color: transparent;

            svg{            
                color: ${props => props.theme.text1};
                font-size: 2rem;
            }
        }

        
    }

    @media screen and (max-width: 910px) {
        nav{

            width: 100%;
            display: flex;
            justify-content: flex-end;

            button{
                display: flex;
            }

            ul:nth-child(1){
                display: none;
            }
        }
    }
`

export const Web = styled.ul `
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    li{
        margin: 15px 0;

        a{
            display: block;
            position: relative;
            color: ${props => props.theme.text1};
            padding: 5px;
            font-size: 1.5rem;

            :hover{
                transform: scale(1.1);
                transition: 0.7s;
            }
        }
    }
`

export const App = motion(styled.ul `
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    text-align: center;
    background-color: ${props => props.theme.div};
    top: 80px;
    right: 0px;

    li{
        a{
            display: block;
            font-size: 1.4rem;
            padding: 40px;
            border-bottom: 1px solid ${props => props.theme.text2};

            :hover{
                background-color: ${props => props.theme.layout};
                transition: 0.7s;
            }
        }
    }

    @media screen and (max-width: 910px){
        display: block;
    }
`)