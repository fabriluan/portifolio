import * as Styles from "./styleProject";
import { BiDownArrow } from "react-icons/bi";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { SiStyledcomponents, SiJavascript, SiFirebase } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion"; 

function Projects({project}){

    const {backgound, name, info, link1, link2, react, style, js, html, css, fb} = project

    // const [details, setDetails] = useState(false);
    const [show, setShow] = useState(false);

    function ChangeDetails(){
        setShow(!show)
    }

    return(
        <Styles.ProjectsSt initial={false}>
            <h1>{name}</h1>
            <img src={backgound} alt={'foto'} />            

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

        </Styles.ProjectsSt>
    )
}

export default Projects;