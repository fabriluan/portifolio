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

    ul{
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
    }
`