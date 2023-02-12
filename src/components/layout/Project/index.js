import { Center } from "../../Center";
import Projects from "../../Projects";
import { ProjectSt } from './styleProject';
import projeto01 from "../../../assets/project01.png";

function Project(){

    const projects = [
        {backgound: projeto01,
        name: 'Listamento de Filmes',
        info: 'O projeto foi feito com uma api na qual lista filmes e series, na qual o site lista os em cartaz, os mais populares e os melhores avaliados. O site tem bastantes funcionalidades interessantes com o design responsivo e a utilização do react',
        link1: 'https://filmesapidb.netlify.app/',
        link2: 'https://github.com/fabriluan/filmes',
        react: true, 
        js: true,
        css: true,
        html: true,
        },
        {}
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