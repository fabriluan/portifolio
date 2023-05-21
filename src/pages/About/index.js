import { Title } from "../../components/Title";
import { Center } from "../../components/Center";
import { AboutInfo, AboutSt, ButtonPage, Skills } from "./styleAbout";
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux, SiFirebase } from "react-icons/si";
import foto from "../../assets/foto_perfil.jpeg";
import Socias from "../../components/Sociais";

function About(){

    const skills = [
        {nome: 'ReactJs', icon: <FaReact />},
        {nome: 'HTML 5', icon: <FaHtml5 />},
        {nome: 'CSS 3', icon: <FaCss3 />},
        {nome: 'JavaScript', icon: <SiJavascript />},
        {nome: 'Git', icon: <FaGitAlt />},
        {nome: 'StyledComponents', icon: <SiStyledcomponents />},
        {nome: 'Redux', icon: <SiRedux />},
        {nome: 'FireBase', icon: <SiFirebase />},
    ]


    return(
        <article className='marginContent'>
            <Title text={'Sobre'} />

            <AboutSt>
                <h2>Fabricio Luan Zambão Cipriano</h2>
                <div>
                    <p>LoremMollit culpa cillum nostrud minim cupidatat voluptate laborum esse officia pariatur nisi pariatur. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do. LoremMollit culpa cillum nostrud minim cupidatat voluptate laborum esse officia pariatur nisi pariatur. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do. LoremMollit culpa cillum nostrud minim cupidatat voluptate laborum esse officia pariatur nisi pariatur. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do.</p>
                    <img src={foto} alt="foto minha"/>
                </div>
                <p>LoremMollit culpa cillum nostrud minim cupidatat voluptate laborum esse officia pariatur nisi pariatur. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do. LoremMollit culpa cillum nostrud minim cupidatat voluptate laborum esse officia pariatur nisi pariatur. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do. Do dolore amet consectetur reprehenderit. Cillum ad ea dolore magna ullamco mollit pariatur ea velit do.</p>

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

            <ButtonPage>
                Dowload do CV
            </ButtonPage>
        </article>
    )
}

export default About;