
import { Title } from "../../components/Title";
import { ContactSt, FormContact, TextContact } from './styleContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Socias from "../../components/Sociais";
import { ButtonPage } from "../About/styleAbout";
import { Center } from "../../components/Center";

function Contact(){
    return(
        <article className='marginContent'>

            <Center>

            <Title text={'Contato'} />

            <ContactSt>
                <h2>Entre em contato</h2>
                <p>Se meus projetos te interessaram e você pretende ter um serviço de qualidade e com o melhor custo benefício mande uma mensagem a qualquer para que possamos conversar e ter a melhor oferta para o seu serviço. Mande para o meu email, whatsapp ou para as minha redes sociais</p>

                <ul>
                    <div>
                    <li><MdEmail /> fabricio<wbr/>zambao<wbr/>cipriano<wbr/>@gmail.com</li>
                    <li> <a href="https://wa.me/5542998649151" target="blank"><FaWhatsapp /> +55 42 99864-9151</a></li>
                    </div>

                    <Socias />
                </ul>

            </ContactSt>

            <TextContact>Ou</TextContact>

            <FormContact>
                <h2>Mande sua mensagem</h2>

                <div>
                    <label for="">Seu nome</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>

                <div>
                    <label for="">Seu email</label>
                    <input type="text" placeholder="Digite seu email" />
                </div>

                <div>
                    <label for="">Sua mensagem</label>
                    <textarea placeholder="Digite sua mensagem"></textarea>
                </div>

                <input type="submit" />
            </FormContact>

            </Center>
        </article>
    )
}

export default Contact;