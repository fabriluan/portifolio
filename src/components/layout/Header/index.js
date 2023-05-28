import { App, ButtonApp, ButtonHeader, ButtonHeaderDown, Desktop, HeaderSt, Web } from "./styleHeader";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Center } from '../../Center';
import { useContext, useState } from "react";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import perfil from "../../../assets/foto_perfil.jpeg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../../contexts/theme";

function Header(){

    
    const {setTheme, setMenu, theme, menu} = useContext(AuthContext);

    const [app, setApp] = useState(false);

    const ToggleMenu = () => {
        setMenu(!menu);
    }

    const HandleTheme = () => {
        setTheme(!theme);
    }

    const ToggleApp = () => {
        setApp(!app);
    }

    const animateHeader = {
        open: {width: '370px', transition: { duration: 0.3, when: "beforeChildren", }},
        closed: {width: '100px', transition: { duration: 0.2, when: "afterChildren"}}
    }

    const animateImg = {
        open: {width: '100%', height: '220px', },
        closed: {width: '80px', height: '80px', marginTop: '20px'}
    }

    const animateH2 = {
        open: {opacity: 1, display: 'block'},
        closed: {opacity: 0, transitionEnd: { display: 'none'}}
    }

    const animateIcon = {
        open: {fontSize: '1.5rem'},
        closed: {fontSize: '2rem'}
    }

    const animateSpan = {
        open: {display: 'block'},
        closed: {display: 'none'}
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };

    const animateApp = {
        open: {opacity: 1, width: '100vw', x: 0},
        closed: {opacity: 0, width: '0vh', x: 100},
    }

    const navLi = [
        {name: 'Sobre', id: '/', icon: <AiOutlineHome/>},
        {name: 'Projetos', id: '/projetos', icon: <BiTask />},
        {name: 'Contato', id: '/contato', icon: <IoChatbubbleEllipsesSharp />}
    ];

    return(
        <HeaderSt animate={menu ? 'open' : 'closed'} variants={animateHeader}>
                <ButtonHeader onClick={ ToggleMenu }>
                    
                    {menu ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                    
                </ButtonHeader>

                <Center>

                <div className="classGroup">
                    <motion.img  variants={animateImg} src={perfil} alt="logo" />

                    <motion.h1 variants={animateH2}>Fabricio L Z Cipriano</motion.h1>
                </div>

                <nav>

                    <Web isLi={menu}>

                        {navLi.map((nav, index) => (
                            <motion.li variants={animateIcon}  key={index}>
                                <Link to={`${nav.id}`} > {nav.icon} <motion.span variants={animateSpan}>{nav.name}</motion.span></Link>
                            </motion.li>
                        ))}
                    </Web>

                        <ButtonApp  onClick={ ToggleApp }> {app ? <AiOutlineClose /> : <HiOutlineMenu /> }</ButtonApp>


                        <App animate={app ? 'open' : 'closed'} variants={animateApp}>
                            {navLi.map((nav, index) => (
                                <li  key={index}>
                                    <Link onClick={ ToggleApp } to={`${nav.id}`} >{nav.icon}{nav.name}</Link>
                                </li>
                            ))}

                            <li onClick={ HandleTheme }> {theme ? <FiMoon /> : <BsSun />} Mudar para o tema {theme ? 'Dark' : 'Ligth'}</li>
                        </App>
                </nav>

            </Center>
            
            
                <ButtonHeaderDown isTheme={theme} onClick={ HandleTheme }>
                    <motion.div layout transition={spring}>

                        {
                            theme ? <FiMoon /> : <BsSun />
                        }

                    </motion.div>
                </ButtonHeaderDown>
                    
        </HeaderSt>
    )
}

export default Header;