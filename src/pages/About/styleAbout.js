import styled from "styled-components";

export const AboutSt = styled.section `
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.layout};
    margin-bottom: 30px;

    h2{
        font-size: 1.7rem;
        margin: 10px 0;
    }

    p{
        margin-bottom: 10px;
        font-size: 1.15rem;
    }

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            width: 79%;
        }
    }
    
    img{
        width: 100%;
        max-width: 210px;
        height: 210px;
        object-fit: cover;
        object-position: 100% 20%;
        border-radius: 100%;
        position: relative;
        top: -20px;
    }

    @media screen and (max-width: 910px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 450px){

        align-items: center;
        justify-content: center;

        img{
            max-width: 220px;
            height: 220px;
        }
    }
`

export const AboutInfo = styled.div `
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2{
        font-size: 1.75rem;
        margin-bottom: 13px;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
 
    @media screen and (max-width: 910px) {
        width: 100%;
    }

    @media screen and (max-width: 450px){
        padding: 0;
    }

`

export const Skills = styled.section `
    display: flex;
    justify-content: space-between;
    margin: 10px 5px;

    div{
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        svg{
            font-size: 2.7rem;
        }

        p{
            margin-top: 7px;
            font-size: 1.35rem;
        }
    }

`

export const ButtonPage = styled.button `
    width: 100%;
    max-width: 240px;
    cursor: pointer;
    padding: 7px 0;
    border: 1px solid ${props => props.theme.divHover};
    background-color: ${props => props.theme.div};
    font-weight: 300;
    font-size: 1.5rem;
    color: ${props => props.theme.background};
    margin: 0 auto;
    
    :hover{
        transform: scale(1.01);
        transition: 0.7s;
        background-color: ${props => props.theme.divHover};
    }
`