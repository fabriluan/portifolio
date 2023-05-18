import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export default function BroserRoutes(){
    return(
        <BrowserRouter>
            
            <Header />

            <Routes>
                <Route path="/" element={ <About /> } />
                <Route path="/projetos" element={ <Project /> } />
                <Route path="/contato" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}