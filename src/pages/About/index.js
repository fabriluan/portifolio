import { Title } from "../../components/Title";
import { Center } from "../../components/Center";
import { AboutInfo, AboutSt } from "./styleAbout";

function About(){
    return(
        <article className='marginContent'>
            <AboutSt>
                <Title />
            </AboutSt>
        </article>
    )
}

export default About;