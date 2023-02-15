import { App, Desktop, HeaderSt, Web } from "./styleHeader";
import { Center } from '../../Center';
import { Link, animateScroll as scroll } from "react-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
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

    return(
        <HeaderSt>
            <Center>
                <img src={logo} alt="logo" />

                <nav>
                    <Web>
                        {navLi.map((nav, index) => (
                            <li  key={index}>
                                <Link to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.name}</Link>
                            </li>
                        ))}
                    </Web>

                        <HiOutlineMenu onClick={ToggleMenu} />
                </nav>
            </Center>


            {show && (
                        <App>
                            {navLi.map((nav) => (
                                <li>
                                    <Link onClick={ToggleMenu} to={`${nav.id}`} smooth={true} offset={-68} duration={700}>{nav.name}</Link>
                                </li>
                            ))}
                        </App>
                    )}
        </HeaderSt>
    )
}

export default Header;