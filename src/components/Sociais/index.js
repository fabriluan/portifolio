import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SociasSt } from './styleSocias';

function Socias(){
    return(
        <SociasSt>
            <a href=""><BsInstagram /></a>
            <a href=""><BsLinkedin /></a>
            <a href=""><BsGithub /></a>
        </SociasSt>
    )
}

export default Socias;