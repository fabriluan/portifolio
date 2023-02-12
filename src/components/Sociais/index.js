import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SociasSt } from './styleSocias';

function Socias({column}){

    console.log(column);

    return(
        <SociasSt isOn={column} >
            <a href="https://www.instagram.com/fabri_luan/" target={'blank'}><BsInstagram /></a>
            <a href="https://www.linkedin.com/in/fabricio-cipriano-a72672248/" target={'blank'}><BsLinkedin /></a>
            <a href="https://github.com/fabriluan" target={'blank'}><BsGithub /></a>
        </SociasSt>
    )
}

export default Socias;