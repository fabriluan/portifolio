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

    const boxPrinc = {
        open: {height: 'auto', transition: { duration: 0 }},
        closed: {height: '300px', transition: { duration: 1 }}
    }

    const boxInfo = {
        open: {opacity: 1, height: 'auto', transition:  {type: 'spring' , duration: 3}},
        closed: {opacity: 0, height: '0px', transition: { duration: 1},}
    }

    const item = {
        open: { opacity: 1, y: 0, x: 0, transition: { type: "spring", duration: 3.5 }},
        closed: { opacity: 0, y: -50, transition: { duration: 0.5 }, }
    }

    function ChangeDetails(){
        setShow(!show)
    }

    return(
        <Styles.ProjectsSt initial={false} animate ={ show ? 'open' : 'closed' } variants={boxPrinc} >
            <a href={link1} target='blank'> <AiFillEye /> <img src={backgound} alt={'foto'} /> </a>

            <Styles.ProjectsInfo>
                <h2>{name}</h2>

                <motion.button onClick={ChangeDetails} variants={{open: { rotate: 180 }, closed: { rotate: 0 }}} ><BiDownArrow size={'1.4rem'}/></motion.button>
                

            </Styles.ProjectsInfo>

            <Styles.InfoDetails variants={boxInfo}>
                <motion.h2 variants={item} >Detalhes</motion.h2>
                <motion.p  variants={item} >{info}</motion.p>
                <motion.a  variants={item} href={link1} target='blank'>Ir para o site</motion.a>
                <motion.a  variants={item} href={link2} target='blank'>Repositório no Github</motion.a>

                <motion.h2 variants={item}>Tecnologias usadas</motion.h2>

                <Styles.Socias variants={item}>
                    
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