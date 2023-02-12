import { Center } from "../../Center";
import Projects from "../../Projects";
import { ProjectSt } from './styleProject';
import projeto01 from "../../../assets/project01.png";
import projeto02 from "../../../assets/project02.png";
import projeto03 from "../../../assets/project03.png";
import projeto04 from "../../../assets/project04.png";
import projeto05 from "../../../assets/project05.png";

function Project(){

    const projects = [
        {
            backgound: projeto01,
            name: 'Listamento de Filmes',
            info: 'O projeto foi feito com uma api na qual lista filmes e series, na qual o site lista os em cartaz, os mais populares e os melhores avaliados. O site tem bastantes funcionalidades interessantes com o design responsivo e a utilização do react',
            link1: 'https://filmesapidb.netlify.app/',
            link2: 'https://github.com/fabriluan/filmes',
            react: true, 
            js: true,
            css: true,
            html: true,
        },
        {
            backgound: projeto02,
            name: 'Sistema Chamado',
            info: 'O projeto é um sistema de chamado com objetivo de ser utilizado por apenas uma empresa, ele conta com cadastramento e login de funcionarios, com um sistema de configurações do perfil podendo mudar a sua foto de perfil e seu nome. Os clientes podem ser cadastrados com o nome da empresa, cnpj e endereço. E para criar um chamado pode se escolher os assuntos, status e adicionar um complemento.',
            link1: 'https://sistemadechamado.netlify.app/',
            link2: 'https://github.com/fabriluan/sistema_chamada',
            react: true, 
            js: true,
            css: true,
            html: true,
            style: true,
            fb: true,
        },
        {
            backgound: projeto03,
            name: 'Repositórios GitHub',
            info: 'No projeto é utilizado uma api do github para aparecer as contribuições no projeto. O site possui um sistema de verificação se o repositório existe, também tem um sistema de alterar os tema para um tema ligth ou dark',
            link1: 'https://reposgithub.netlify.app/',
            link2: 'https://github.com/fabriluan/repositorios',
            react: true, 
            js: true,
            css: true,
            html: true,
            style: true,
        },
        {
            backgound: projeto04,
            name: 'Lista de tarefas',
            info: 'O projeto é uma Lista de Tarefas com um sistema de login e de cadastramento, o design é bem simples e tem uma funcionalidade interessante, cada tarefas é adicionada e tem duas opções de editar ou concluir.',
            link1: 'https://tarefascomloginflzc.netlify.app/',
            link2: 'https://github.com/fabriluan/tarefas',
            react: true, 
            js: true,
            css: true,
            html: true,
            style: true,
            fb: true,
        },
        {
            backgound: projeto05,
            name: 'Landing Page',
            info: 'O projeto é uma landing page de um site de fliperama de jogos antigos totalmente resposivo, como sistema de header mudando de cor após passar pela primeira section, foi feito utilizando javascript puro',
            link1: 'https://fabriluan.github.io/site_games/',
            link2: 'https://github.com/fabriluan/site_games', 
            js: true,
            css: true,
            html: true,
        },
    ]

    return(
        <ProjectSt>

            <h2>Projetos</h2>

            <Center>
                {projects.map((project) =>(
                    <>
                        <Projects project={project}/>
                    </>
                ))}
            </Center>
        </ProjectSt>
    )
}

export default Project;