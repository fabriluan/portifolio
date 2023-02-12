import { HeaderSt } from "./styleHeader";
import { Center } from '../../Center';

function Header(){

    const navLi = [
        {name: 'Sobre', id: '#sobre'},
        {name: 'Projetos', id: '#projetos'},
        {name: 'Contato', id: '#contato'}
    ]

    return(
        <HeaderSt>
            <Center>
                <h2>Logo</h2>

                <ul>
                    {navLi.map((nav) => (
                        <li>
                            <a href={`${nav.id}`}>{nav.name}</a>
                        </li>
                    ))}
                </ul>
            </Center>
        </HeaderSt>
    )
}

export default Header;