import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderSt = styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 13px 0 16px 0;
    position: fixed;
    z-index: 99;
    width: 100%;
    max-width: 370px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;


    .classGroup{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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

    @media screen and (max-width: 1260px){
        width: 100%;
        padding: 10px 5px;
        height: 100px;
        max-width: none;
        height: auto;
        border-bottom: 1px solid ${props => props.theme.text2};

        > .center{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }


        img{
            width: 55px;
            height: 55px;
        }

        .classGroup{
            flex-direction: row;
            justify-content: center;
            align-items: center;

            h1{
                margin-top: 0;
                font-size: 1.4rem;
                margin-left: 10px;
            }
        }

        nav{
            display: flex;
            flex-direction: row;
            width: auto;
            justify-content: center;
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
            justify-content: center;
            width: 100%;
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

    @media screen and (max-width: 1260px){
        margin-top: 0;
        flex-direction: row;
        /* background-color: red; */

        li{

            margin: 0 10px;

            :hover{
                background-color: ${props => props.theme.layout};

                a{
                    transform: none;
                }
            }

            a{
                padding: 5px 15px;

                ::after{
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0%;
                    height: 1px;
                    content: '';
                    background-color: ${props => props.theme.div};
                }

                svg{
                    display: none;
                }

                :hover{
                    color: ${props => props.theme.div};
                    transition: 0.7s;

                    ::after{
                        width: 100%;
                        left: 0%;
                        content: '';
                        transition: 0.7s;
                    }
                }
            }
        }

        @media screen and (max-width: 1000px){
            display: none;
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

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const App = motion(styled.ul `
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    text-align: center;
    background-color: ${props => props.theme.layoutHover};
    top: 76px;
    right: 0px;

    li{
        a{
            display: block;
            font-size: 1.4rem;
            padding: 40px;
            color: ${props => props.theme.background};
            border-bottom: 1px solid ${props => props.theme.background};

            :hover{
                background-color: ${props => props.theme.layout};
                color: ${props => props.theme.div};
                transition: 0.7s;
            }
        }
    }

    @media screen and (max-width: 1000px){
        display: block;
    }
`)

export const ButtonApp = motion(styled.button `
    display: none;
    background-color: transparent;
    border: 0;
    font-size: 2rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 35px;

    @media screen and (max-width: 1000px) {
        display: flex;
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

    @media screen and (max-width: 1260px){
        /* display: none; */

        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: ${props => props.theme.div};
        padding: 15px;
        color: ${props => props.theme.background};
        border-radius: 100% 100%;
        border: 1px solid ${props => props.theme.text2};

        :hover{
            transform: none;
            background-color: ${props => props.theme.divHover};
        }
    }
`