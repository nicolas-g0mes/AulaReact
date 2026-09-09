import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";

import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exemplo3 from "./paginas/Exemplo3";
import Exemplo4 from "./paginas/Exemplo4";

import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home /> }  />

                <Route path="/exemplo1" element={ <Exemplo1 />} />
                <Route path="/exemplo2" element={ <Exemplo2 />} />
                <Route path="/exemplo3" element={ <Exemplo3 />} />
                <Route path="/exemplo4" element={ <Exemplo4 />} />

                <Route path="/exercicio1" element={ <Exercicio1 />} />
                <Route path="/exercicio2" element={ <Exercicio2 />} />
                
            </Routes>
        </BrowserRouter>
    );
}