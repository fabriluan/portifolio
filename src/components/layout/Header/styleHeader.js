import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderSt = motion( styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 13px 0 16px 0;
    position: fixed;
    z-index: 99;
    width: 370px;
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
        width: 100% !important;
        padding: 10px 5px;
        height: 100px;
        height: auto;
        border-bottom: 1px solid ${props => props.theme.text2};

        > .center{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }


        img{
            width: 55px !important;
            height: 55px !important;
        }

        .classGroup{
            flex-direction: row;
            justify-content: center;
            align-items: center;

            h1{
                display: block;
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
`)

export const Web = styled.ul `
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;

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
            justify-content: center;
            width: 100%;
            position: relative;
            color: ${props => props.theme.text1};
            padding: 20px 5px;
            font-size: ${props => props.isLi ? '1.4rem' : 'inherit'};

            svg{
                display: flex;
                font-size: ${props => props.isLi ? '1.6rem' : 'inherit'};
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
    /* width: 100vw; */
    overflow: hidden;
    text-align: center;
    background-color: ${props => props.theme.layoutHover};
    top: 76px;
    right: 0px;
    opacity: 0;

    li:nth-last-of-type(1){
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        padding: 40px 0;
        font-size: 1.2rem;
        cursor: pointer;
        border-bottom: 1px solid ${props => props.theme.background};

        :hover{
                background-color: ${props => props.theme.layout};
                color: ${props => props.theme.div};
                transition: 0.7s;
            }

        svg{
            font-size: 1.7rem;
            margin-right: 10px;
        }
    }

    li{

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            padding: 40px;
            color: ${props => props.theme.text1};
            border-bottom: 1px solid ${props => props.theme.background};

            :hover{
                background-color: ${props => props.theme.layout};
                color: ${props => props.theme.div};
                transition: 0.7s;
            }

            svg{
                display: flex;
                margin: auto 0;
                /* background-color: red; */
                margin-right: 5px;
                font-size: 1.6rem;
            }
        }
    }

    @media screen and (max-width: 1000px){
        display: block;
    }
`)

export const ButtonApp = styled.button `
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
`

export const ButtonHeaderDown = motion(styled.section `
    padding: 5px 7px;
    background-color: red;
    width: 70px;
    display: flex;
    border: 0;
    border-radius: 2.5rem;
    margin-top: auto;
    margin-left: 15px;
    margin-right: auto;
    background-color: ${props => props.theme.div};
    cursor: pointer;

    > div{
        width: 30px;
        height: 30px;
        margin-left: ${props => props.isTheme ? '0' : 'auto'};
        background-color: ${props => props.theme.background};
        border-radius: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            font-size: 1.6rem;
        }
    }


    @media screen and (max-width: 1260px){
        position: fixed;
        /* top: 20px; */
        bottom: 20px;
        left: 20px;
        width: 110px;

        div{
            height: 40px;
            width: 40px;
        }
    }

    @media screen and (max-width: 1000px){
        display: none;
    }
`)