import styled from "styled-components";

export const HeaderSt = styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 20px;
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;

    > .center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        display: flex;
        width: 120px;
        margin-bottom: -10px;
        height: 50px;
        object-fit: cover;
    }

    nav{
        position: relative;

        svg{
            display: none;
            color: ${props => props.theme.text1};
            font-size: 2rem;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 910px) {
        nav{

            width: 100%;
            display: flex;
            justify-content: flex-end;

            svg{
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

    li{
        margin: 0 10px;

        a{
            position: relative;
            color: ${props => props.theme.text1};
            padding: 5px;
            font-size: 1.18rem;

            ::after{
                content: '';
                position: absolute;
                bottom: 0;
                right: 50%;
                width: 0%;
                height: 1px;
                background-color: #ffffff;
                
            }
            
            :hover{
                ::after{
                    width: 100%;
                    right: 0;
                    transition: 0.7s;
                }
            }
        }
    }
`

export const App = styled.ul `
    display: none;
    position: absolute;
    width: 110%;
    overflow: hidden;
    text-align: center;
    background-color: ${props => props.theme.div};
    top: 68px;
    right: 0px;

    li{
        a{
            display: block;
            font-size: 1.2rem;
            padding: 20px;
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
`