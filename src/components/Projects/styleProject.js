import styled from "styled-components";

export const ProjectsSt = styled.div `
    width: 32%;
    height: ${props => props.isHeigth ? 'auto' : '300px'};
    color: ${props => props.theme.text2};
    padding: 15px;
    background-color: ${props => props.theme.text1};
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    margin-bottom: 20px;

    > a{
        position: relative;
        height: 210px;

        svg{
            opacity: 0;
            position: absolute;
            display: flex;
            top: calc(50% - 1.5rem);
            right: calc(50% - 1.5rem);
            font-size: 3rem;
            color: ${props => props.theme.text1};
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            
        }

        :hover{

            background-color: #000000;

            img{
                opacity: 0.2;
                transition: 0.7s;
            }
            svg{
                opacity: 1;
                transition: 0.7s;
            }

        }
    }
`

export const ProjectsInfo = styled.article `
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-size: 1.65rem;
        padding: 5px 0;
        font-weight: 600;
    }

    svg{
        cursor: pointer;
        padding: 1px;
    }
`

export const InfoDetails = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: flex-start;
    text-align: start;

    h2{
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
        margin-bottom: 7px;
    }

    p{
        font-size: 1rem;
    }

    a + a{
        margin-bottom: 20px;
    }

    a{
        text-decoration: underline;
        color: ${props => props.theme.layout};
        margin-top: 10px;
    }
`

export const Socias = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0px;

    svg{
        /* width: 33%; */
        margin: 0px 10px 20px 10px;
        font-size: 2rem;

        :hover{
            color: ${props => props.theme.layout};
            transform: scale(1.2);
            transition: 0.7s;
        }
    }
`