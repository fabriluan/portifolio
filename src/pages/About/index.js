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
        {nome: 'StyledComp', icon: <SiStyledcomponents />},
        {nome: 'Redux', icon: <SiRedux />},
        {nome: 'FireBase', icon: <SiFirebase />},
    ]


    return(
        <article className='marginContent'>

            <Center>
                <Title text={'Sobre'} />
                
                <AboutSt>
                    <h2>Fabricio Luan Zambão Cipriano</h2>
                    <div>
                        <p>Como ja devem ter visto meu nome é Fabricio Luan Zambão Cipriano porém pode me chamar de Fabricio Cipriano, sou um programador a um pouco mais de 2 anos no qual me especializei para a criação de websites, atualmente estou cursando o ensino superior em Tecnólogo em Análise e Desenvolvimento de Sistemas(TADS) no instituto federal do Paraná. Atualmente estou trabalhando em cooperativa da minha cidade no técnico de TI assim dando suporte tecnico para todas a cooperativa, porém não me prendo a só isso também já criei pequenas aplicações para melhorar a produtividade da empresa</p>
                        <img src={foto} alt="foto minha"/>
                    </div>
                    <p>Me considero muito regrado em tudo que faço na vida, muito persistente, tenho facilidade em trabalhar em equipe e gosto muito da sensação de desafio, ou seja, a cada novo desafio que surge tanto na área de programação tanto em outras áreas da minha vida sempre me sinto desafiado a resolver e não paro até que aja uma solução.</p>

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
            </Center>
        </article>
    )
}

export default About;