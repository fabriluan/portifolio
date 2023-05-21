import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsSt = motion( styled.div `
    width: 100%;
    padding: 20px;
    background-color: ${props => props.theme.layout};
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    img {
        max-height: 500px;
        background-color: red;
    }
    
    h1{
        margin-bottom: 10px;
        font-size: 1.7rem;
        font-weight: 600;
    }

    @media screen and (max-width: 910px) {
        width: 80%;
    } 

    @media screen and (max-width: 720px) {
        width: 100%;
    }

`)


export const InfoDetails = motion( styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: flex-start;
    text-align: start;

    h2{
        font-size: 1.35rem;
        font-weight: 500;
        font-style: italic;
        margin-bottom: 7px;
    }

    p{
        font-size: 1.1rem;
        margin-bottom: 15px;
    }

    a + a{
        margin-bottom: 25px;
    }

    a{
        text-decoration: underline;
        color: ${props => props.theme.divHover};
        margin-top: 10px;
    }
`)

export const Socias = motion( styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0px;

    svg{
        /* width: 33%; */
        margin: 0px 10px 20px 10px;
        font-size: 2rem;

        :hover{
            color: ${props => props.theme.div};
            transform: scale(1.2);
            transition: 0.7s;
        }
    }
`)