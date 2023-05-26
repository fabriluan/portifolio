import { App, ButtonApp, ButtonHeader, ButtonHeaderDown, Desktop, HeaderSt, Web } from "./styleHeader";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Center } from '../../Center';
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import perfil from "../../../assets/foto_perfil.jpeg"
import { Link } from "react-router-dom";

function Header(){

    const [show, setShow] = useState(true);    
    const ToggleMenu = () => {
        setShow(!show);
    }
    const navLi = [
        {name: 'Sobre', id: '/', icon: <AiOutlineHome/>},
        {name: 'Projetos', id: '/projetos', icon: <BiTask />},
        {name: 'Contato', id: '/contato', icon: <IoChatbubbleEllipsesSharp/>}
    ];

    return(
        <HeaderSt>
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

                        <ButtonApp  onClick={ToggleMenu}> {show ? <AiOutlineClose /> : <HiOutlineMenu /> }</ButtonApp>


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