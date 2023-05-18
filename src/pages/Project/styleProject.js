import styled from "styled-components";

export const ProjectSt = styled.section `
    padding: 20px;
    background-color: ${props => props.theme.div};
    color: ${props => props.theme.text1};
    text-align: center;

    > h2{
        font-size: 2.2rem;
        font-weight: 600;
        font-style: italic;
        margin: 10px 0 20px 0;
    }

    > .center{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`