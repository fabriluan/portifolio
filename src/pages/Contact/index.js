
import { Title } from "../../components/Title";
import { ContactSt, FormContact, TextContact } from './styleContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Socias from "../../components/Sociais";
import { ButtonPage } from "../About/styleAbout";
import { Center } from "../../components/Center";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/theme";
import { useContext } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

function Contact(){

    const { menu } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [verif, setVerif] = useState(false);

    function SendForm(e){
        e.preventDefault();
        setVerif(true);

        
        if(name === '' || email === '' || mensagem === ''){
            toast.error("Os campos estão vazios!");
            setVerif(false);
            return;
        }

        const form_template = {
            name: name,
            email: email,
            menssage: mensagem,
        }

        emailjs.send('service_ht3828j', 'template_ajwbvia', form_template, 'Vc5KoH6YUxomuA_GV')
        .then((response) => {

            toast.success("O email foi enviado!");

            setEmail('')
            setName('')
            setMensagem('')
            setVerif(false);
        }).catch(()=>{
            toast.error("Não foi impossível enviar!");
            setVerif(false);
        })  

        setVerif(false);
        }

    return(
        <motion.article className={ menu ? 'marginContent' : 'marginContentMenu'} layout transition={ menu ? {delay: 0} : {delay: 0.3}}>

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

            <FormContact name="contatc">
                <h2>Mande sua mensagem</h2>

                <div>
                    <label for="">Seu nome</label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={ (e) => setName(e.target.value)} 
                    placeholder="Digite seu nome" />
                </div>

                <div>
                    <label for="">Seu email</label>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value)}
                    placeholder="Digite seu email" />
                </div>

                <div>
                    <label for="">Sua mensagem</label>
                    <textarea
                    value={mensagem} 
                    onChange={ (e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"></textarea>
                </div>

                <button type="submit" onClick={ SendForm }>{verif ? 'Enviando...' : 'Enviar'}</button>
            </FormContact>

            </Center>
        </motion.article>
    )
}

export default Contact;