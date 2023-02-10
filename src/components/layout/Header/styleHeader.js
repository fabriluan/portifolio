import styled from "styled-components";

export const HeaderSt = styled.header `
    background-color: ${props => props.theme.layout};
    color: ${props => props.theme.text1};
    padding: 20px;

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
                    right: 0;
                    width: 100%;
                    height: 10px;
                    background-color: #ffffff;
                    
                    :hover{
                        width: 100%;
                        background-color: red;
                        right: 0;
                    }
                }
            }
        }
    }
`