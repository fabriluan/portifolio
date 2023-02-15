import { App, Desktop, HeaderSt, Web } from "./styleHeader";
import { Center } from '../../Center';
import { Link, animateScroll as scroll } from "react-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/logo.png"

function Header(){

    const [show, setShow] = useState(false);

    const navLi = [
        {name: 'Sobre', id: 'sobre'},
        {name: 'Projetos', id: 'projetos'},
        {name: 'Contato', id: 'contato'}
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
            <Center>
                <img src={logo} alt="logo" />

                <motion.nav animate={show ? 'open' : 'closed'}>
                    <Web>
                        {navLi.map((nav, index) => (
                            <li  key={index}>
                                <Link to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.name}</Link>
                            </li>
                        ))}
                    </Web>

                        <motion.button  onClick={ToggleMenu} variants={ AnimateButton }> {show ? <AiOutlineClose /> : <HiOutlineMenu /> }</motion.button>


                        <App variants={AnimateMenu}>
                            {navLi.map((nav, index) => (
                                <li key={index}>
                                    <Link onClick={ToggleMenu} to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.name}</Link>
                                </li>
                            ))}
                        </App>
                </motion.nav>
            </Center>
            

                    
        </HeaderSt>
    )
}

export default Header;