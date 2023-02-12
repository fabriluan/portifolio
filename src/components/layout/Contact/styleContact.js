import styled from "styled-components";

export const ContactSt = styled.section `
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.text1};
    margin: 40px;
    box-shadow: 0px 0px 20px 1px ${props => props.theme.text2};
    color: ${props => props.theme.text2};

    h2{
        font-size: 1.8rem;
        margin-bottom: 13px;
    }

    p{
        font-size: 1.05rem;
    }

    ul{
        margin-top: 20px;

        li{
            display: flex;
            font-size: 1.25rem;
            margin-bottom: 10px;

            + li{
                margin-bottom: 30px;
            }
            svg{
                min-width: 15px;
                margin-right: 10px;
            }
        }
    }

    @media screen and (max-width: 600px){
        margin: 40px 0;
    }

    @media screen and (max-width: 450px) {
        li{
            font-size: 5px;
        }
    }
`