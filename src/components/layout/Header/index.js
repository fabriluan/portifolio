import { App, ButtonHeader, ButtonHeaderDown, Desktop, HeaderSt, Web } from "./styleHeader";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import perfil from "../../../assets/foto_perfil.jpeg"

function Header(){

    const [show, setShow] = useState(false);

    const navLi = [
        {name: 'Sobre', id: 'sobre', icon: <AiOutlineHome/>},
        {name: 'Projetos', id: 'projetos', icon: <BiTask/>},
        {name: 'Contato', id: 'contato', icon: <IoChatbubbleEllipsesSharp/>}
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
            
                <img src={perfil} alt="logo" />

                <h1>Fabricio L Z Cipriano</h1>

                <motion.nav animate={show ? 'open' : 'closed'}>

                    <Web>


                        {navLi.map((nav, index) => (
                            <li  key={index}>
                                <Link to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.icon}{nav.name}</Link>
                            </li>
                        ))}
                    </Web>

                        {/* <motion.button  onClick={ToggleMenu} variants={ AnimateButton }> {show ? <AiOutlineClose /> : <HiOutlineMenu /> }</motion.button> */}


                        <App variants={AnimateMenu}>
                            {navLi.map((nav, index) => (
                                <li key={index}>
                                    <Link onClick={ToggleMenu} to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.name}</Link>
                                </li>
                            ))}
                        </App>
                </motion.nav>
            
            
                <ButtonHeaderDown>
                    <BsSun />
                </ButtonHeaderDown>
                    
        </HeaderSt>
    )
}

export default Header;