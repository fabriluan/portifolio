import { Center } from '../../components/Center';
// import Projects from "../../Projects";
import { ProjectSt } from './styleProject';

function Project(){


    return(
        <ProjectSt id="projetos">

            <h2>Projetos</h2>

            <Center>
                {/* {projects.map((project, index) =>(
                    
                    <Projects key={index} project={project}/>
                    
                ))} */}
            </Center>
        </ProjectSt>
    )
}

export default Project;