import Socias from '../../Sociais';
import { Center } from './../../Center';
import { ContactSt } from './styleContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact(){
    return(
        <Center>
            <ContactSt>
                <h2>Entre em contato</h2>
                <p>Se meus projetos te interessa e você pretende ter um serviço de qualidade e com o melhor custo beneficio mande uma mensagem para que possamos conversar e ter a melhor oferta para o seu serviço. Mande para o meu email, whatsapp ou para as minha redes sociais</p>

                <ul>
                    <li><MdEmail /> fabricio<wbr/>zambao<wbr/>cipriano<wbr/>@gmail.com</li>
                    <li><FaWhatsapp /> +55 42 9864-9151</li>
                </ul>


                <Socias />
            </ContactSt>
        </Center>
    )
}

export default Contact;