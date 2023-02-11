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
                    <p>Officia ullamco id aute eiusmod veniam.Quis dolore commodo ea exercitation. Nisi sit nulla excepteur enim quis nisi cillum. Culpa non consequat culpa eiusmod nisi magna tempor esse minim cillum velit minim.
                    Anim reprehenderit aliquip duis cupidatat minim et veniam excepteur veniam pariatur fugiat pariatur quis et. Consequat do fugiat labore cillum minim ad aliqua id. Non in ad excepteur dolore magna tempor.</p>
                    </div>

                    <Socias />
                </AboutInfo>
            </AboutSt>
        </Center>
    )
}

export default About;