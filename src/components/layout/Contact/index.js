import Socias from '../../Sociais';
import { Center } from './../../Center';
import { ContactSt } from './styleContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact(){
    return(
        <Center>
            <ContactSt>
                <h2>Contato</h2>
                <p>Cillum incididunt deserunt ut ipsum eiusmod ad aute sunt adipisicing amet. Magna id ex nulla culpa aliquip ad sint pariatur reprehenderit ad dolore sunt ipsum ea. Aliquip non sunt ullamco consequat aliquip pariatur id et. Sit veniam in cupidatat duis sint consequat sunt labore tempor.</p>

                <ul>
                    <li><MdEmail /> fabriciozambaocipriano@gmail.com</li>
                    <li><FaWhatsapp /> +55 42 9864-9151</li>
                </ul>


                <Socias />
            </ContactSt>
        </Center>
    )
}

export default Contact;