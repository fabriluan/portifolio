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

    const [show, setShow] = useState(true);

    const ToggleMenu = () => {
        setShow(!show);
    }


    const AnimateMenu = {
        open: {width: '370px', transition: { duration: 1.5 }},
        closed: {width: '0%', transition: { duration: 1.3}},
    }

    const AnimateLink = {
        open: { background: 'red'},
        closed: { transition: { duration: 1.3}},
    }

    const AnimateButton = {
        open: { rotate: 180}, 
        closed: { rotate: 0}
    }

    const navLi = [
        {name: 'Sobre', id: '/', icon: <motion.AiOutlineHome variants={AnimateLink} />},
        {name: 'Projetos', id: '/projetos', icon: <BiTask variants={AnimateLink}/>},
        {name: 'Contato', id: '/contato', icon: <IoChatbubbleEllipsesSharp variants={AnimateLink}/>}
    ];

    return(
        <HeaderSt initial={false} animate={show ? 'open' : 'closed'} variants={AnimateMenu} >
                <ButtonHeader onClick={ ToggleMenu }>
                    <RiMenuFoldFill />
                </ButtonHeader>

                <Center>

                <div className="classGroup">
                    <img src={perfil} alt="logo" />

                    <h1>Fabricio L Z Cipriano</h1>
                </div>

                <nav>

                    <Web>

                        {navLi.map((nav, index) => (
                            <li  key={index}>
                                <Link to={`${nav.id}`} > {nav.icon} <span>{nav.name}</span></Link>
                            </li>
                        ))}
                    </Web>

                        <ButtonApp  onClick={ToggleMenu} variants={ AnimateButton }> {show ? <AiOutlineClose /> : <HiOutlineMenu /> }</ButtonApp>


                        <App>
                            {navLi.map((nav, index) => (
                                <li  key={index}>
                                    <Link to={`${nav.id}`} >{nav.icon}{nav.name}</Link>
                                </li>
                            ))}
                        </App>
                </nav>

            </Center>
            
            
                <ButtonHeaderDown>
                    <BsSun />
                </ButtonHeaderDown>
                    
        </HeaderSt>
    )
}

export default Header;