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
            max-width: 76%;
        }
    }
    
    img{
        width: 100%;
        max-width: 250px;
        height: 250px;
        object-fit: cover;
        object-position: 100% 20%;
        border-radius: 100%;
        position: relative;
        top: -20px;
    }

    @media screen and (max-width: 1000px) {
        > div{
            p{
                width: 70%;
            }
        }
    }

    @media screen and (max-width: 820px) {
        
        > div{

            flex-direction: column;

            p{
                width: 100%;
            }
        }

        img{
            top: -5px;
            margin: 10px 0;
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
    flex-wrap: wrap;
    justify-content: space-around;
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

    @media screen and (max-width: 480px) {
        
        flex-direction: column;

        div{
            margin: 5px 0;
        }
        
    }

`

export const ButtonPage = styled.a `
    display: block;
    text-align: center;
    width: 100%;
    max-width: 240px;
    cursor: pointer;
    padding: 7px;
    border: 1px solid ${props => props.theme.divHover};
    background-color: ${props => props.theme.div};
    font-weight: 300;
    font-size: 1.5rem;
    color: ${props => props.theme.text2};
    
    :hover{
        transform: scale(1.01);
        transition: 0.7s;
        background-color: ${props => props.theme.divHover};
    }

    @media screen and (max-width: 520px) {
        max-width: none;
        /* background-color: red; */
    }
`