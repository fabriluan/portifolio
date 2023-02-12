import styled from "styled-components";

export const AboutSt = styled.section `

    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.text1};
    margin: 90px 0 40px 0;
    
    img{
        width: 100%;
        max-width: 350px;
        height: 350px;
        object-fit: cover;
        border-radius: 100%;
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
    }
    
`