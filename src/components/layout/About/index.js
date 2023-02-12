import { Center } from "../../Center";
import { AboutInfo, AboutSt } from "./styleAbout";
import logo from "../../../assets/foto_perfil.jpg"
import Socias from "../../Sociais";

function About(){
    return(
        <Center>
            <AboutSt>
                <img src={logo} alt={'foto de perfil'} />

                <AboutInfo>
                    <div>
                    <h2>Sobre mim</h2>
                    <p>Meu nome é Fabricio Luan Zambão Cipriano e sou um programador Front-End, estou iniciando os estudos na faculdade de Tecnologia em Análise e Desenvolvimento de Sistemas.
                    Sempre fui apaixonado por programação então em 2021 comecei a estudar sobre criação de sites, assim aprendi html, css e js. No meio de 2022 comecei a estudar ReactJS com o curso "React Js do zero ao avançado na pratica" no qual finalizei no inicio desse ano, porém não parei ai, sempre fui buscando cada vez mais conhecimento.
                    Sempre me considerei alguém dedicado, regrado e com uma ótima capacidade de aprendizado</p>
                    </div>

                    <Socias />
                </AboutInfo>
            </AboutSt>
        </Center>
    )
}

export default About;