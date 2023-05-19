import styled from "styled-components";

export const SociasSt = styled.section `
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a{
        font-size: 1.8rem;
        color: ${props => props.theme.text2};
        padding: 5px;
        margin-right: 30px;
        text-align: center;
        /* margin-bottom: 10px; */

        :hover{
            color: ${props => props.theme.div};
            transform: scale(1.1);
            transition: 0.7s;
        }
    }

    ${props => props.isOn ?  '@media screen and (max-width: 450px){flex-direction: column;}' : '' }

    ${props => props.isOn ?  '@media screen and (max-width: 450px){ a { :hover{ transform: scale(1) } } }' : '' }

`