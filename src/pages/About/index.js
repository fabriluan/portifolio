import { Title } from "../../components/Title";
import { Center } from "../../components/Center";
import { AboutInfo, AboutSt, ButtonPage, Skills } from "./styleAbout";
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux, SiFirebase } from "react-icons/si";
import foto from "../../assets/foto_perfil.jpeg";
import Socias from "../../components/Sociais";
import { AuthContext } from "../../contexts/theme";
import { useContext } from "react";
import { motion} from "framer-motion";
import download from "../../assets/curriculo_web.pdf";

function About(){

    const { menu } = useContext(AuthContext);

    const skills = [
        {nome: 'ReactJs', icon: <FaReact />},
        {nome: 'HTML 5', icon: <FaHtml5 />},
        {nome: 'CSS 3', icon: <FaCss3 />},
        {nome: 'JavaScript', icon: <SiJavascript />},
        {nome: 'Git', icon: <FaGitAlt />},
        {nome: 'StyledComp', icon: <SiStyledcomponents />},
        {nome: 'Redux', icon: <SiRedux />},
        {nome: 'FireBase', icon: <SiFirebase />},
    ]


    return(
        <motion.article className={ menu ? 'marginContent' : 'marginContentMenu'} layout transition={ menu ? {delay: 0} : {delay: 0.3}}>

            <Center>
                <Title text={'Sobre'} />
                
                <AboutSt>
                    <h2>Fabricio Luan Zambão Cipriano</h2>
                    <div>
                        <p>Meu nome é Fabricio Luan Zambão Cipriano, sou um entusiasta da programação e estou animado para compartilhar um pouco da minha trajetória com vocês. Iniciei minha jornada na área de TI em 2020, quando comecei a estudar programação através do curso da Danki Code. Desde então, tenho me dedicado intensamente ao aprimoramento das minhas habilidades. Em 2021, aprofundei meu conhecimento em JavaScript, explorando suas funcionalidades e recursos através de um curso específico. No ano seguinte, em 2022, decidi focar no desenvolvimento com React, e completei um curso abrangente que me permitiu compreender desde os conceitos fundamentais até técnicas avançadas dessa poderosa biblioteca.
                        </p>
                        <img src={foto} alt="foto minha"/>
                    </div>
                    <p>Atualmente, estou engajado no curso do JStack, onde tenho a oportunidade de aprofundar ainda mais meu conhecimento em desenvolvimento de software. Com essa experiência, adquiri habilidades sólidas em programação, bem como uma compreensão abrangente de tecnologias web modernas.</p>

                    <Socias />
                </AboutSt>

                <AboutSt>
                    <h2>Skills</h2>

                    <Skills>
                        {
                            skills.map((item, index) => (
                                <div>
                                    {item.icon}
                                    <p>{item.nome}</p>
                                </div>
                            ))
                        }
                    </Skills>
                </AboutSt>

                <ButtonPage href={download} download>
                    Dowload CV
                </ButtonPage>
            </Center>
        </motion.article>
    )
}

export default About;