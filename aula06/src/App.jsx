import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";

import Consulta from "./paginas/Consulta";
import Visualizar from "./paginas/Visualizar";
import Cadastro from "./paginas/Cadastro";
import Alteracao from "./paginas/Alteracao";
import Exclusao from "./paginas/Exclusao";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home /> }  />

                <Route path="/consulta" element={ <Consulta /> } />
                <Route path="/visualizar/:codigo" element={ <Visualizar />} />
                <Route path="/cadastro" element={ <Cadastro /> } />
                <Route path="/alteracao/:codigo" element={ <Alteracao /> } />
                <Route path="/exclusao/:codigo" element={ <Exclusao /> } />
            </Routes>
        </BrowserRouter>
    );
}