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

        :hover{
            color: ${props => props.theme.layout};
            transform: scale(1.25);
            transition: 0.7s;
        }
    }
`