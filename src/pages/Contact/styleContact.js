import styled from "styled-components";

export const ContactSt = styled.section `
    display: flex;
    flex-direction: column;
    padding: 20px;
    /* margin-bottom: 30px; */
    background-color: ${props => props.theme.layout};

    h2{
        font-size: 1.7rem;
        margin: 10px 0;

        @media screen and (max-width: 510px) {
            text-align: center;
        }
    }

    p{
        margin: 10px 0;
        font-size: 1.15rem;

        @media screen and (max-width: 510px) {
            text-align: center;
        }
    }

    ul{
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;

        > section{
            width: 20%;
        }

        li{
            width: 100%;
            display: flex;
            font-size: 1.25rem;
            margin-bottom: 10px;

            a{
                position: relative;
                display: flex;
                color: ${props => props.theme.text1};

                :hover{
                    color: ${props => props.theme.div};
                    transition: 0.7s;

                    ::after{
                        width: 105%;
                        left: -2.5%;
                        transition: 0.7s;
                    }
                }

                ::after{
                    position: absolute;
                    bottom: -2px;
                    width: 0;
                    left: 45%;
                    
                    height: 2px;
                    content: '';
                    background-color: ${props => props.theme.div};
                }
            }

            svg{
                min-width: 15px;
                margin-right: 10px;
            }
        }
    }

    @media screen and (max-width: 820px) {
        ul{
            align-items: start;
            flex-direction: column;

            > section{

                margin-top: 10px;
                justify-content: flex-start;

                a{
                    margin-right: 0px;
                }

                a + a{
                    margin-left: 25px;
                }
            }
        }
    }

`

export const TextContact = styled.h2`
    margin: 15px auto;
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
`

export const FormContact = styled.form `
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 30px;
    background-color: ${props => props.theme.layout};

    h2{
        font-size: 1.7rem;
        margin: 10px 0;

        @media screen and (max-width: 510px) {
            text-align: center;
        }
    }

    > div{
        display: flex;
        flex-direction: column;

        label{
            margin-top: 10px;
            font-size: 1.25rem;
            margin-bottom: 3px;
        }

        input{
            font-size: 1.05rem;
            margin-bottom: 20px;
            padding: 5px;
        }

        textarea{
            resize: none;
            width: 100%;
            height: 200px;
            font-size: 1.05rem;
            padding: 5px;
        }
        
    }

    input[type="submit"]{
        width: 100%;
        max-width: 190px;
        cursor: pointer;
        padding: 5px 0;
        border: 1px solid ${props => props.theme.divHover};
        background-color: ${props => props.theme.div};
        font-weight: 300;
        font-size: 1.4rem;
        color: ${props => props.theme.background};
        margin: 20px 0 0 auto;
        
        :hover{
            transform: scale(1.01);
            transition: 0.7s;
            background-color: ${props => props.theme.divHover};
        }
    }

    @media screen and (max-width: 820px){
        padding: 10px;
    }
`