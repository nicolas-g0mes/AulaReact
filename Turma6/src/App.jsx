import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";

import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home /> }  />

                <Route path="/exercicio1" element={ <Exercicio1 />} />
                <Route path="/exercicio2" element={ <Exercicio2 />} />
                
            </Routes>
        </BrowserRouter>
    );
}