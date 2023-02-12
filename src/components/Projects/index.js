import * as Styles from "./styleProject";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript, SiFirebase } from "react-icons/si";
import { useState } from "react";

function Projects({project}){

    const {backgound, name, info, link1, link2, react, style, js, html, css, fb} = project

    const [details, setDetails] = useState(false);

    function ChangeDetails(){
        setDetails(!details);
    }

    return(
        <Styles.ProjectsSt isHeigth={details}>
            <img src={backgound} alt={'foto'} />

            <Styles.ProjectsInfo>
                <h2>{name}</h2>

                {details ? (
                    <BiUpArrow size={'1.4rem'} onClick={ChangeDetails} />
                ) : (
                    <BiDownArrow size={'1.4rem'} onClick={ChangeDetails} />
                )}

            </Styles.ProjectsInfo>

            {details && (
                <Styles.InfoDetails>
                <h2>Detalhes</h2>
                <p>{info}</p>
                <a href={link1} target='blank'>Ir para o site</a>
                <a href={link2} target='blank'>Repositório no Github</a>

                <h2>Tecnologias usadas</h2>

                <Styles.Socias>
                    
                    {react &&  <FaReact />}
                    {style && <SiStyledcomponents />}
                    {js && <SiJavascript />}
                    {fb && <SiFirebase />}
                    {css && <FaCss3Alt />}
                    {html && <FaHtml5 />}
                </Styles.Socias>
            </Styles.InfoDetails>
            )}

        </Styles.ProjectsSt>
    )
}

export default Projects;