import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";
import Exercicio6 from "./paginas/Exercicio6";
import Exercicio7 from "./paginas/Exercicio7";
import Exercicio8 from "./paginas/Exercicio8";
import Exercicio9 from "./paginas/Exercicio9";
import Exercicio10 from "./paginas/Exercicio10";

export default function App()
{
    return (
        <BrowserRouter>

            <Routes>

                <Route  path="/"  element={ <Home /> }  />

                <Route  path="/exemplo1" element={ <Exemplo1 />} />
                <Route  path="/exemplo2" element={ <Exemplo2 />} />
                
                <Route  path="/exercicio1" element={ <Exercicio1 />} />
                <Route  path="/exercicio2" element={ <Exercicio2 />} />
                <Route  path="/exercicio3" element={ <Exercicio3 />} />
                <Route  path="/exercicio4" element={ <Exercicio4 />} />
                <Route  path="/exercicio5" element={ <Exercicio5 />} />
                <Route  path="/exercicio6" element={ <Exercicio6 />} />
                <Route  path="/exercicio7" element={ <Exercicio7 />} />
                <Route  path="/exercicio8" element={ <Exercicio8 />} />
                <Route  path="/exercicio9" element={ <Exercicio9 />} />
                <Route  path="/exercicio10" element={ <Exercicio10 />} />

            </Routes>

        </BrowserRouter>
    );
}