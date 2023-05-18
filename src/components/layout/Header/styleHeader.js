import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderSt = styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 13px 0 16px 0;
    /* margin-top: -20px; */
    position: fixed;
    z-index: 99;
    width: 100%;
    max-width: 370px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        font-size: 1.55rem;
        font-weight: 600;
        margin-top: 20px;
    }

    img{
        display: flex;
        width: 100%;
        max-width: 220px;
        height: 220px;
        object-fit: cover;
        object-position: 100% 0%;
        border-radius: 100% 100%;
    }

    nav{
        position: relative;
        width: 100%;        
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
    width: 100%;

    li{
        display: flex;
        align-items: center;
        justify-content: center;

        :hover{

            background-color: ${props => props.theme.layoutHover};

            a{
                transform: scale(1.05);
                transition: 0.7s;
            }
            transition: 0.7s;
        }

        a{
            display: flex;
            justify-content: left;
            align-items: center;
            /* background-color: beige; */
            position: relative;
            color: ${props => props.theme.text1};
            padding: 20px 5px;
            font-size: 1.35rem;

            svg{
                display: flex;
                /* background-color: red; */
                font-size: 1.6rem;
                margin-right: 10px;
                /* padding: 10px; */
            }
        }
    }
`

export const ButtonHeader = styled.button `
    padding: 2px 7px;
    display: flex;
    background-color: transparent;
    border: 0;
    font-size: 2.1rem;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
        transition: 0.7s;
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

export const ButtonHeaderDown = styled.button `
    padding: 2px 7px;
    display: flex;
    background-color: transparent;
    border: 0;
    font-size: 2.4rem;
    margin-top: auto;
    margin-left: 15px;
    margin-right: auto;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
        transition: 0.7s;
    }
`