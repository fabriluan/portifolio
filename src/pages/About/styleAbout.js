import styled from "styled-components";

export const AboutSt = styled.section `
    width: 100%;
    /* padding: 40px 20px; */
    display: flex;
    justify-content: space-between;
    /* background-color: ${props => props.theme.text1}; */
    
    /* img{
        width: 100%;
        max-width: 350px;
        height: 350px;
        object-fit: cover;
        border-radius: 100%;
    } */

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