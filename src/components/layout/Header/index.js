import { App, ButtonApp, ButtonHeader, ButtonHeaderDown, Desktop, HeaderSt, Web } from "./styleHeader";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Center } from '../../Center';
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import perfil from "../../../assets/foto_perfil.jpeg"
import { Link } from "react-router-dom";

function Header(){

    const [show, setShow] = useState(false);

    const navLi = [
        {name: 'Sobre', id: '/', icon: <AiOutlineHome/>},
        {name: 'Projetos', id: '/projetos', icon: <BiTask/>},
        {name: 'Contato', id: '/contato', icon: <IoChatbubbleEllipsesSharp/>}
    ]   

    const ToggleMenu = () => {
        setShow(!show);
    }


    const AnimateMenu = {
        open: {opacity: 1, height: '100vh', transition: {type: 'spring' , duration: 3}},
        closed: {opacity: 0, height: '0vh', transition: { duration: 1}},
    }

    const AnimateButton = {
        open: { rotate: 180}, 
        closed: { rotate: 0}
    }

    return(
        <HeaderSt>
                <ButtonHeader>
                    <RiMenuFoldFill />
                </ButtonHeader>

                <Center>

                <div className="classGroup">
                    <img src={perfil} alt="logo" />

                    <h1>Fabricio L Z Cipriano</h1>
                </div>

                <motion.nav animate={show ? 'open' : 'closed'}>

                    <Web>


                        {navLi.map((nav, index) => (
                            <li  key={index}>
                                <Link to={`${nav.id}`} >{nav.icon}{nav.name}</Link>
                            </li>
                        ))}
                    </Web>

                        <ButtonApp  onClick={ToggleMenu} variants={ AnimateButton }> {show ? <AiOutlineClose /> : <HiOutlineMenu /> }</ButtonApp>


                        <App variants={AnimateMenu}>
                            {navLi.map((nav, index) => (
                                <li  key={index}>
                                    <Link to={`${nav.id}`} >{nav.icon}{nav.name}</Link>
                                </li>
                            ))}
                        </App>
                </motion.nav>

            </Center>
            
            
                <ButtonHeaderDown>
                    <BsSun />
                </ButtonHeaderDown>
                    
        </HeaderSt>
    )
}

export default Header;